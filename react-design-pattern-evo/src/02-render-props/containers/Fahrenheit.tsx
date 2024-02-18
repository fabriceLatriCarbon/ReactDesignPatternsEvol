

type FahrenheitProps = {
  temperatureCelsius: string
}

const Fahrenheit: React.FC<FahrenheitProps> = ({ temperatureCelsius }) => {
  return <div className="temp-result-container">{(parseInt(temperatureCelsius || "0") * 9) / 5 + 32}°F</div>
}

export default Fahrenheit;