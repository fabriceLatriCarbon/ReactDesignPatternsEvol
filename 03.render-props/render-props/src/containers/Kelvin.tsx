
type KelvinProps = {
  temperatureCelsius: string
}

const Kelvin: React.FC<KelvinProps> = ({ temperatureCelsius }) => {
  return <div className="text-[20px] bg-gray-400 p-2 rounded-[10px] m-[15px] w-[100px] text-center">{parseInt(temperatureCelsius || "0") + 273.15}K</div>
}

export default Kelvin;