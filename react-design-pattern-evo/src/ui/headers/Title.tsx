

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {

  return <h1 className="text-2xl leading-8 font-bold text-gray-800 dark:text-gray-200">{children}</h1>
}

export default Title;

