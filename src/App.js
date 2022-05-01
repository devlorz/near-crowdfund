import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";
import "./global.css";

import Layout from "./Layout";
import Content from "./Content";
import List from "./List";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  const [donations, setDonations] = React.useState([]);

  React.useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      window.contract.list_crowdfunds().then((res) => {
        setDonations(res);
      });
    }
  }, []);

  if (!window.walletConnection.isSignedIn()) {
    return (
      <Layout buttonClick={login}>
        <main>
          <Content />
        </main>
      </Layout>
    );
  }

  return (
    <Layout buttonClick={logout} isLoggedIn={true}>
      <Content />
      <List donations={donations} />
    </Layout>
  );
}
