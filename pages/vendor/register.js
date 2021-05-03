import React from "react";
import Head from "next/head";
import VendorRegister from "../../Components/register";

function UserSignup(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-up | Captain Shield</title>
      </Head>
      <VendorRegister />
    </div>
  );
}

export default UserSignup;
