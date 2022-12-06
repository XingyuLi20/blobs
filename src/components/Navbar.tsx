import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DAO, Docs, Discourse } from "../icons";
import AvatarIcon from "../icons/AvatarIcon";
import { ButtonTypeOne, ButtonTypeTwo } from "./Buttons";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (max-width: 760px)").matches
    );
  }, []);
  const [address, setAddress] = useState("");

  async function isConnected() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (
      accounts.length &&
      window.localStorage.getItem("walletConnected") === "true"
    ) {
      var addr =
        accounts[0].toString().substring(0, 6) +
        "..." +
        accounts[0].toString().substr(-6);
      setAddress(addr.toUpperCase());
    }
  }

  useEffect(() => {
    isConnected();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      var res = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      var addr =
        res.toString().substring(0, 6) + "..." + res.toString().substr(-6);
      setAddress(addr.toUpperCase());
      window.localStorage.setItem("walletConnected", "true");
    }
  };
  const disconnectWallet = async () => {
    setAddress("");
    window.localStorage.setItem("walletConnected", "false");
  };
  return (
    <div
      style={{
        padding: "24px 12px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 1140,
        margin: "auto",
      }}
    >
      <Link to="/">
        <img
          src="https://nouns.wtf/static/media/logo.f217962c.svg"
          alt="logo"
          style={{ height: 75, width: 75, transition: "all .15s ease-in-out" }}
        />
      </Link>
      <div
        style={
          isMobile
            ? { display: "flex", alignItems: "center", marginRight: 10 }
            : { display: "flex", alignItems: "center", gap: 10 }
        }
      >
        {isMobile ? (
          <></>
        ) : (
          <>
            <Link to="/vote">
              <ButtonTypeOne icon={DAO} title="DAO" />
            </Link>
            <ButtonTypeOne icon={Docs} title="Docs" />
            <ButtonTypeOne icon={Discourse} title="Discourse" />
          </>
        )}
        {address ? (
          <div onClick={disconnectWallet}>
            <div
              style={{
                display: "flex",
                width: "min-content",
                border: "1px solid rgb(207, 189, 186)",
                background: "#fdf9f9",
                borderRadius: 10,
                padding: "2px 18px 2px 2px",
                height: 34,
              }}
            >
              <AvatarIcon />
              <div style={{ height: 30 }}>
                <p
                  style={{
                    color: "#000",
                    fontSize: 14,
                    fontWeight: 600,
                    margin: "2px 0px 0px 8px",
                    marginLeft: 8,
                    whiteSpace: "nowrap",
                    paddingLeft: 2,
                  }}
                >
                  {address}
                </p>
                <p
                  style={{
                    color: "#647693",
                    fontSize: 10,
                    position: "relative",
                    top: -9,
                    cursor: "pointer",
                    marginLeft: 8,
                    whiteSpace: "nowrap",
                    paddingLeft: 2,
                  }}
                >
                  Disconnect
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div onClick={connectWallet}>
            <ButtonTypeTwo title="Connect" />
          </div>
        )}
      </div>
    </div>
  );
}
