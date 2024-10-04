import styled from "styled-components";


export const Button = styled.button`
background-color: #000;
color: #fff;
padding: 10px 28px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: 0.3s background ease-in;
width: 200px;

&:hover {
    background-color: transparent;
    color: #000;
    border: 2px solid #000;
    transition: 0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`

background-color: #fff;
color: #000;
border: 2px solid #000;

&:hover {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    transition: 0.3s background ease-in;
}
`;
