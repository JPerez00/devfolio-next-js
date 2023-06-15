import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex pb-2 leading-7">
            <Image
              src="/static/images/about.jpg"
              alt="me"
              width={200}
              height={200}
              className="h-48 w-48 rounded-full"
            />
          </div>
          <h1 className="bg-gradient-to-br from-rose-500 to-blue-500 bg-clip-text text-5xl font-extrabold leading-14 tracking-tight text-transparent sm:text-5xl sm:leading-12 md:text-6xl md:leading-18">
            Hi, I'm Jorge —
          </h1>
          <p className="pt-1 text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300">
            A full-stack developer, writer & photographer based in Canada 🇨🇦
          </p>
          <p className="pt-2 text-lg leading-7 text-gray-600 dark:text-gray-400">
            The more I try to learn, the more I realize how much I don't know. So I created this
            portfolio/developer blog site to try to document & showcase my process, progress &
            learnings along the way.
          </p>
          <p className="pt-2 text-lg leading-7 text-gray-600 dark:text-gray-400">
            This particular project was created with <b>Next.js and Tailwind.css</b>, but you'll
            find more in the projects page. I chose to present this site in a blog format in order
            to <b>combine my interest with useful skills</b>. Mergin <b>Writing, Media & Code</b>.
          </p>
        </div>
        <ul className="divide-y divide-gray-300 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text text-transparent"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap ">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text text-transparent duration-300 ease-in-out hover:font-bold"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text text-transparent duration-300 ease-in-out hover:font-bold"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
