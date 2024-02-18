import InputText from "@ui/forms/inputs/InputText";
import { useState } from "react";


type MainProviderProps = {
  render: (value: string) => JSX.Element
};

const MainProvider: React.FC<MainProviderProps> = ({ render }) => {
  const [temperatureCelsius, setTemperatureCelsius] = useState<string>('');

  const handleTemperatureCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => { setTemperatureCelsius(e.target.value); }

  return (
    <>
      <div className="m-[30px]">
        <InputText
          value={temperatureCelsius}
          onChange={handleTemperatureCelsiusChange}
          id='temperature-celsius-input'
          placeholder='Temp in °C'
        />
      </div>
      {render(temperatureCelsius)}
    </>
  )
}

export default MainProvider;
