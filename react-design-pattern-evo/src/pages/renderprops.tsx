import Fahrenheit from "@renderProps/containers/Fahrenheit";
import Kelvin from "@renderProps/containers/Kelvin";
import MainProvider from "@renderProps/providers/MainProvider";
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