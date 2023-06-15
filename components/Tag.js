import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-1 mr-3 text-sm font-semibold uppercase text-gray-700 duration-300 ease-in-out hover:font-bold dark:text-gray-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
