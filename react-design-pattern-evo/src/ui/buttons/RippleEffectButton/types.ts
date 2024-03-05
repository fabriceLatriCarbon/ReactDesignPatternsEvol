import { ButtonProps } from '@material-tailwind/react';

export type RippleEffectButtonProps = Partial<ButtonProps> &
  React.RefAttributes<HTMLButtonElement>;

export type UseRippleEffectButton = {
  getOnClickProps(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ): void;
  handleFocus: (e: React.FocusEvent<HTMLButtonElement>) => void;
};
