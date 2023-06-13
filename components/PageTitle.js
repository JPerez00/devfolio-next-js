export default function PageTitle({ children }) {
  return (
    <h1 className="bg-gradient-to-br from-rose-400 to-blue-400 bg-clip-text text-3xl font-extrabold leading-9 tracking-tight text-transparent sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
