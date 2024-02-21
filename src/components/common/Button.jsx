import styled, { css } from "styled-components";

export default function Button({
    text,
    onClick = () => { },
    size = "small",
    disabled = null,
}) {
    return (
        <BtnWrapper size={size}>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </BtnWrapper>
    );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: black;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    }

    cursor: pointer;
    ${(props) => {
        switch (props.size) {
            case "large":
                return css`
            font-size: 20px;
          `;
            default:
                return css`
            font-size: 20px;
          `;
        }
    }}
`;