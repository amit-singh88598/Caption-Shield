import React from "react";
import Head from "next/head";
import LogIn from "../Components/login";

function Login(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-in | Captain Shield</title>
      </Head>
      <LogIn role="user" />
    </div>
  );
}

export default Login;
