import React from "react";
import { InputField } from "./styles";

export default function InputText({ type, minLength, placeholder, width, height, value, onChange, maxLength, ref }) {
  return (
    <InputField type={type} placeholder={placeholder} height={height} width={width} value={value} onChange={onChange} minLength={minLength} maxLength={maxLength} ref={ref} />
  );

}
