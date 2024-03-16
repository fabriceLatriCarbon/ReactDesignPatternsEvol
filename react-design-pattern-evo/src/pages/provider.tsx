import Title from '@ui/headers/Title'
import ClassicSwitch from '@ui/switchs/ClassicSwitch';
import useAppTheme from '@commonHooks/useAppTheme';

export default function ProviderPage() {

  const { appTheme, setAppTheme } = useAppTheme();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setAppTheme();
  }

  return (
    <>
      <Title>Provider Pattern</Title>
      <ClassicSwitch isChecked={appTheme === 'dark'} id="provider-switch" onChange={handleChange} label="Changer de thème (light/dark)" />
    </>
  )
}
