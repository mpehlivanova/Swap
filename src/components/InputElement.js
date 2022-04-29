import * as React from "react";
import { styled } from "@mui/material/styles";
import Balance from "./Balance";

const DivStyle = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #c4c4c4;
  padding: 15px;
  margin: auto;
  width: 99%;
  border-radius: 15px;
  text-transform: capitalize;
  box-sizing: border-box;
  background: rgba(196, 196, 196, 0.1);
`;
const InputStyle = styled("input")`
  border: none;
  backgroundcolor: #c4c4c4;
  padding: 10px;
  borderradius: 50px;
  width: 100%;
  height: 20px;
  outlinewidth: 0;

  font-size: large;
`;

export default function InputElemet(props) {
  return (
    <>
      <DivStyle>
        <InputStyle
          onChange={(ev) => props.onChange(ev)}
          type="number"
          placeholder="Please enter numbers"
          value={props.value}
        ></InputStyle>
        <Balance icon={props.icon} text={props.text} balance={props.balance} />
      </DivStyle>
    </>
  );
}
