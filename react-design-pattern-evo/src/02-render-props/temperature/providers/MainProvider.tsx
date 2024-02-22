import React from "react";
import InputText from "@ui/forms/inputs/InputText";


type MainProviderProps = {
  render: (value: string) => JSX.Element
};

type MainProviderState = {
  temperatureInCelsius: string;
}

export default class MainProvider extends React.Component<MainProviderProps, MainProviderState> {
  constructor(props: MainProviderProps) {
    super(props);

    this.state = {
      temperatureInCelsius: ''
    };
  }

  handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ temperatureInCelsius: e.target.value })
  }

  render() {
    const { render } = this.props;
    const { temperatureInCelsius } = this.state;
    return (
      <>
        <div className="m-[30px]">
          <InputText
            value={temperatureInCelsius}
            onChange={this.handleTemperatureChange} id='temperature-celsius-input'
            placeholder='Temp in °C'
          />
        </div>
        {render(temperatureInCelsius)}
      </>
    )
  }
}
