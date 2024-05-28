import React from "react";
import { InputField } from "./styles";

export default function InputText({ placeholder, width, height, value, onChange, maxLength, ref }) {
  return (
    <InputField type="text" placeholder={placeholder} height={height} width={width} value={value} onChange={onChange} maxLength={maxLength} ref={ref} />
  );

}
