import React, { useState } from "react";
import { InputContainer, InputField, ToggleButton } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function InputPassword({ placeholder, width, height, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const color = 'theme.colors.color1';
    return (
        <InputContainer>
            <InputField
                type={showPassword ? "text" : "password"}
                placeholder={placeholder} onChange={onChange} width={width} height={height}
            />
            <ToggleButton type="button" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash color={color} size={isMobile ? 24 : 18} /> : <FaEye color={color} size={isMobile ? 22 : 18} />}

            </ToggleButton>
        </InputContainer>
    );

}
