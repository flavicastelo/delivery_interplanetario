import React from "react";
import { InputFieldMars } from "./styles";

export default function InputMars({ placeholder, width, height, value, onChange, ref }) {
  return (
    <InputFieldMars type="text" placeholder={placeholder} height={height} width={width} value={value} onChange={onChange} maxLength='1' ref={ref} />
  );

}
