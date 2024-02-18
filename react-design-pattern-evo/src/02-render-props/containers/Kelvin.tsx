
type KelvinProps = {
  temperatureCelsius: string
}

const Kelvin: React.FC<KelvinProps> = ({ temperatureCelsius }) => {
  return <div className="temp-result-container">{parseInt(temperatureCelsius || "0") + 273.15}K</div>
}

export default Kelvin;