import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonStyle = styled(Button)`
  color: black;
  background-color: #eceded;
  width: 120px;
  height: 53px;
  border-radius: 30px;
  margin: 5px 10px;
  box-sizing: border-box;
  text-transform: capitalize;
  
  :hover {
    background-color: #e0e0e0;
  }
`;
const TextStyle = styled("p")`
  color: #a0a0a0;
  font-size: small;
  margin: 0px 15px;
`;
const Containr = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default function Balance(props) {
  return (
    <Containr>
      <ButtonStyle>
        {props.icon}
        {props.text}
      </ButtonStyle>

      {props.balance ? (
        <TextStyle>Balance:{props.balance}</TextStyle>
      ) : null}
    </Containr>
  );
}
