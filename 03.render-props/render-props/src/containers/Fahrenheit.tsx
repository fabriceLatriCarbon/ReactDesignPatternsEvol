

type FahrenheitProps = {
  temperatureCelsius: string
}

const Fahrenheit: React.FC<FahrenheitProps> = ({ temperatureCelsius }) => {
  return <div className="text-[20px] bg-gray-400 p-2 rounded-[10px] m-[15px] w-[100px] text-center">{(parseInt(temperatureCelsius || "0") * 9) / 5 + 32}°F</div>
}

export default Fahrenheit;