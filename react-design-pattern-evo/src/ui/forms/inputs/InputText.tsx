


type InputTextProps = {
  value: string,
  id: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, id, placeholder }) => {

  return (
    <input value={value} onChange={onChange} id={id}
      className="temp-input-txt"
      placeholder={placeholder} />
  )
}

export default InputText;