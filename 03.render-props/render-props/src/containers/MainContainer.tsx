import InputText from "@ui/forms/inputs/InputText";
import { useState } from "react";


type MainContainerProps = {
  render: (value: string) => JSX.Element
};

const MainContainer: React.FC<MainContainerProps> = ({ render }) => {
  const [temperatureCelsius, setTemperatureCelsius] = useState<string>('');

  const handleTemperatureCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => { setTemperatureCelsius(e.target.value); }

  return (
    <>
      <InputText
        value={temperatureCelsius}
        onChange={handleTemperatureCelsiusChange}
        id='temperature-celsius-input'
        placeholder='Temp in °C'
      />
      {render(temperatureCelsius)}
    </>
  )
}

export default MainContainer;
