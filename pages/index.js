import { Button } from "@material-ui/core";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth, UserProtectedPage } from "../auth";

export default function Home() {
  const { isAuthenticatedUser } = useAuth();
  const router = useRouter();
  // useEffect(async () => {
  //   // axios.defaults.headers = {
  //   //   "Access-Control-Allow-Origin": "*",
  //   //   "Content-Type": "application/json",
  //   // };
  // }, []);
  return (
    <div>
      {/* {isAuthenticatedUser == false ? (
        <div>
          <Button onClick={() => router.replace("/vendor/login")}>
            Login first
          </Button>
        </div>
      ) : ( */}
      <div>
        <UserProtectedPage>
          <Head>
            <title>Captain Shield</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h5>Welcome in Captain Shield</h5>
        </UserProtectedPage>
      </div>
      {/* )} */}
    </div>
  );
}
