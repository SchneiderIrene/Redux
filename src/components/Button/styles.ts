import styled from "@emotion/styled";

interface ButtonComponentStylesProps{
    disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentStylesProps>`
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background-color:${({disabled}) => disabled ? '#CEDBF4' : '#1f27f5' } ;
    color: white;
    font-size: 16px;
    cursor: pointer;
` 
