import { Button } from "@material-tailwind/react";
import { RippleEffectButtonProps } from "./types";


export default function RippleEffectButton({ onClick, className, children, ...otherProps }: RippleEffectButtonProps) {

  return <Button placeholder="" className={className} onClick={onClick} {...otherProps}>
    {children}
  </Button>
}
