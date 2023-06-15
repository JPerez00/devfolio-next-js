import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="bg-gradient-to-br from-rose-400 to-blue-500 bg-clip-text text-5xl font-extrabold leading-14 tracking-tight text-transparent sm:text-5xl sm:leading-14 md:text-6xl md:leading-18">
            My Projects
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
            Here are some of the projects that I have created.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
