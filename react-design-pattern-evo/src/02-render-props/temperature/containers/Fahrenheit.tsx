import React from "react";


type FahrenheitProps = {
  temperatureCelsius: string
}

export default class Fahrenheit extends React.PureComponent<FahrenheitProps> {

  render() {
    const { props: { temperatureCelsius } } = this;
    const temperatureParsed = parseInt(temperatureCelsius);

    return <div className="temp-result-container">{((Number.isNaN(temperatureParsed) ? 0 : temperatureParsed) * 9) / 5 + 32}°F</div>
  }
}
