import Fahrenheit from "@renderProps/temperature/containers/Fahrenheit";
import Kelvin from "@renderProps/temperature/containers/Kelvin";
import MainProvider from "@renderProps/temperature/providers/MainProvider";
import Title from "@ui/headers/Title";


export default function RenderPropsPage() {
  return (
    <>
      <Title>☃️ Temperature Converter 🌞</Title>

      <MainProvider
        render={(value) => (
          <>
            <Kelvin temperatureCelsius={value} />
            <Fahrenheit temperatureCelsius={value} />
          </>
        )}
      />
    </>
  );
}