
type LinearGradientButtonProps = React.PropsWithChildren & {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function LinearGradientButton({ children, onClick }: LinearGradientButtonProps) {

  return (
    <button className='btn-gradient-indigo-to-pink text-gray-200 font-bold py-3 px-6 rounded-lg' onClick={onClick}>{children}</button>
  )
}