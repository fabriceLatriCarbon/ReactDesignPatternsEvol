
import { Switch } from "@material-tailwind/react";

type ClassicSwitchProps = {
  isChecked: boolean;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label?: React.ReactNode
}

const ClassicSwitch: React.FC<ClassicSwitchProps> = ({ id, isChecked, label, onChange }) => {
  return (
    <Switch
      id={id}
      onChange={onChange}
      label={label}
      checked={isChecked}
      ripple={false}
      className="h-full w-full checked:bg-gradient-indogo-to-pink"
      containerProps={{
        className: "w-11 h-6",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none",
      }}
      crossOrigin={undefined}
      labelProps={{
        className: 'text-gray-700 dark:text-gray-200',
      }} />
  );
}

export default ClassicSwitch
