import React from "react";

type KelvinProps = {
  temperatureCelsius: string
}

export default class Kelvin extends React.PureComponent<KelvinProps> {

  render() {
    const { props: { temperatureCelsius } } = this;
    const temperatureParsed = parseInt(temperatureCelsius);

    return <div className="temp-result-container">{(Number.isNaN(temperatureParsed) ? 0 : temperatureParsed) + 273.15}K</div>
  }
}
