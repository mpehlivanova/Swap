import "./App.css";
import * as React from "react";
import ButtonColor from "./components/ButtonColor";
import styled from "@emotion/styled";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListBalance from "./components/ListBalance";
import logo from "./css/LOGO.png";
import meta from "./css/metamask-fox-logo 1.png";
import hack from "./css/hack-logomark-436x436-purple-transparent-background 3.png";
import etn from "./css/Group.png";
import swap from "./css/Swap Button.png";

const Contract = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background: rgba(165, 132, 227, 0.4);
  border-radius: 30px;
  padding: 1px 2px;
`;
const ContractETH = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background: rgba(165, 132, 227, 0.2);
  border-radius: 30px;
  padding: 4px 10px 4px 10px;
`;
const ContractStyle = styled("p")`
  margin: 1px 2px;
`;
const Circul = styled("div")`
  width: 10px;
  height: 10px;
  background-color: orange;
  border-radius: 50%;
  margin-right: 5px;
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
  text-transform: capitalize;
  gap: 15px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0px 5px;
`;

const TextSubmit = styled("h2")`
  color: white;
  font-size: large;
`;
const ContainerRevert = styled("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: auto;
  width: 99%;
  margin: -30px;
`;
const Revert = styled("div")`
  background: #f3f3f3;
  border: 4px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Img = styled("img")`
  padding-right: 10px;
`;

function App() {
  const [data, setData] = React.useState([]);
  const [change, setChange] = React.useState(true);

  const showContract = () => {
    let contract = "0x5F302b83F96692b033eeA7502cfA683672CbfFf0";
    let apiKey = "5A2H3Y3EQUQZ99S89AVTB6TEHCC81E2XRZ";

    fetch(
      "https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=" +
        contract +
        apiKey
    )
      .then((response) => response.json())
      .then((res) => {
        if (typeof res !== "string") {
          console.log("many result");
          setData([
            {
              account: "0x5F302b83F96692b033eeA7502cfA683672CbfFf0",
              balance: "1000000000000000",
            },
          ]);
        } else {
          setData(res);
        }
      });
  };


  const show = typeof data !== "string";

  // console.log(data);
  // console.log(show);
  // console.log(data[0]?.balance);

  return (
    <div className="App">
      <div className="header">
        <Img src={logo} alt="logoImg" />
        {show && data[0]?.account ? (
          <>
            <ContractETH>
              {data[0]?.balance} ETH
              <Contract>
                <ContractStyle>
                  {data[0]?.account.length >= 6
                    ? data[0]?.account.substring(0, 6) +
                      "..." +
                      data[0]?.account.substring(
                        data[0]?.account.length - 4,
                        data[0]?.account.length
                      )
                    : data[0]?.balance}{" "}
                </ContractStyle>
                <Circul />
              </Contract>
            </ContractETH>
          </>
        ) : (
          <>
            <ButtonColor
              contained="contained"
              text="Connect Wallet"
              width="202px"
              icon={<Img width="30px" src={meta} alt="metaPhoto" />}
              onClick={showContract}
            />
          </>
        )}
      </div>
      <div className="main">
        <Container>
          <Header>
            <h3>Swap</h3>
            <SettingsOutlinedIcon sx={{ fontSize: 27.03 }} />
          </Header>
          {change ? (
            <ListBalance
              available="0.00" // get data from JSON(fech)
              text="ETH"
              icon={<Img width="30px" src={etn} alt="vectorPhoto" />}
              balance={data[0]?.balance} // get data from JSON(fech)
            />
          ) : (
            <ListBalance
              available="0.00"
              text="HTK"
              icon={<Img width="35px" src={hack} alt="vectorPhoto" />}
              balance={data[0]?.balance} // get data from JSON(fech)
            />
          )}
          <ContainerRevert>
            <Revert>
              <ButtonColor
                icon={<img src={swap} alt="swapPhoto" />}
                onClick={() => setChange(!change)}
              />
            </Revert>
          </ContainerRevert>
          {!change ? (
            <ListBalance
              available="0.00" // get data from JSON(fech)
              text="ETH"
              icon={<Img width="30px" src={etn} alt="vectorPhoto" />}
              balance={data[0]?.balance} // get data from JSON(fech)
            />
          ) : (
            <ListBalance
              available="0.00"
              text="HTK"
              icon={<Img width="35px" src={hack} alt="vectorPhoto" />}
              balance={data[0]?.balance} // get data from JSON(fech)
            />
          )}

          <button
            id={show && data[0]?.account ? "buttonSubmite" : "buttonSubmiteDis"}
          >
            <TextSubmit>Submit</TextSubmit>
          </button>
        </Container>
      </div>
    </div>
  );
}

export default App;
