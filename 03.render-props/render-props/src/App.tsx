import './App.css';
import AppLayout from '@ui/layouts/AppLayout';
import MainContainer from '@containers/MainContainer';
import Kelvin from '@containers/Kelvin';
import Fahrenheit from '@containers/Fahrenheit';

export default function App() {
  return (
    <AppLayout>
      <MainContainer
        render={(value) => (
          <>
            <Kelvin temperatureCelsius={value} />
            <Fahrenheit temperatureCelsius={value} />
          </>
        )}
      />
    </AppLayout>
  );
}
