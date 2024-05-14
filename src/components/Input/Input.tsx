
import { InputProps } from "./types";
import {InputComponentContainer, InputComponentLabel, InputComponent, ErrorMessage} from './styles'

function Input({ name, type = "text", placeholder, label, onInputChange, value, error, onBlur }: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponent name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        />
        <ErrorMessage>{error}</ErrorMessage>
    </InputComponentContainer>
  );
}

export default Input;