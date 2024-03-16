
import { Switch } from "@material-tailwind/react";

type ClassicSwitchProps = {
  isChecked: boolean;
  id: string;
  onClick: React.MouseEventHandler<HTMLInputElement>
}

const ClassicSwitch: React.FC<ClassicSwitchProps> = ({ id, isChecked, onClick }) => {
  return (
    <Switch
      id={id}
      onClick={onClick}
      checked={isChecked}
      ripple={false}
      className="h-full w-full checked:bg-[#2ec946]"
      containerProps={{
        className: "w-11 h-6",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none",
      }} crossOrigin={undefined} />
  );
}

export default ClassicSwitch
