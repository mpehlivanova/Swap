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
const BalanceStyle = styled("p")`
  color: #a0a0a0;
  font-size: x-large;
  margin-left: 15px;
`;

export default function ListBalance(props) {
  return (
    <>
      <DivStyle>
        <BalanceStyle>{props.available}</BalanceStyle>
        <Balance icon={props.icon} text={props.text} balance={props.balance} />
      </DivStyle>
    </>
  );
}
