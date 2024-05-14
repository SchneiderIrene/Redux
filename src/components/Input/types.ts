import { ChangeEvent } from "react";
import { FocusEvent } from "react";

export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  value: string;
  error?: string | undefined;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<any,Element>)=>void
}
