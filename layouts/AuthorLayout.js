import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text text-5xl font-extrabold leading-14 tracking-tight text-transparent sm:text-5xl sm:leading-14 md:text-6xl md:leading-18">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="300px"
              height="300px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight text-transparent">
              {name}
            </h3>
            <div className="text-gray-00 dark:text-gray-400">{occupation}</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 text-gray-600 dark:prose-dark dark:text-gray-400 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
