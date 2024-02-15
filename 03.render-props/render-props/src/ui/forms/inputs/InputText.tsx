


type InputTextProps = {
  value: string,
  id: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, id, placeholder }) => {
  // return <input type="text" value={value} onChange={onChange} placeholder="Temp in °C" />

  return (
    <div className="m-[30px]">
      <input value={value} onChange={onChange} id={id}
        className="outline-none p-4 rounded-[15px] shadow-none border-2 border-solid border-pink-300 text-[20px]"
        placeholder={placeholder} />
    </div>
  )
}

export default InputText;