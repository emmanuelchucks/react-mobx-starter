import styled, { css } from "styled-components";

const Button = styled.button`
    background: white;
    color: red;
    border: 2px solid red;
    width: 8rem;
    height: 2rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-family: "Segoe UI";
    outline: 0;

    ${({ primary }) =>
        primary &&
        css`
            background: red;
            color: white;
            border: none;
        `};
`;

export default Button;
