
export default function GradientSpinner() {
  return (
    <div className=" transform translate-x-1/8 translate-y-1/8">
      <div className="p-2 bg-gradient-to-tr animate-spin from-indigo-500 to-pink-500 via-purple-500 rounded-full">
        <div className="bg-white dark:bg-ardoise rounded-full">
          <div className="w-12 h-12 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
