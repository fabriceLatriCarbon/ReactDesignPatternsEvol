import { useState } from "react";

import useDebounce from "@customHooks/hooks/useDebounce";
import InputText from "@ui/forms/inputs/InputText";


export default function DebounceLayout() {

  const [text, setText] = useState<string>('');
  const [localValue, setLocalValue] = useState<string>('');

  const debouncedUpdateText = useDebounce((newText: string) => {
    setText(newText);
  }, 1000);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { target: { value: newText } } = event;
    setLocalValue(() => newText);

    debouncedUpdateText(newText);
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <InputText value={localValue} id={"custom-hooks-debounce-text-input"} placeholder={"Enter text"} onChange={handleOnChange} />
      <div className="p-4 dark:text-gray-200 text-center">
        <p className=" dark:text-gray-200">Voici la valeur saisie dans l'input avec un rebond de 1000ms (1s) :</p>
        <p className=" dark:text-gray-200 mt-4 text-xl font-bold">{text}</p>
      </div>
    </div>
  )
}