"use client";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { asPath } = useRouter();

  // console.log(asPath)

  return (
    <>
      {asPath === "/Login/Login" ? (
        children
      ) : (
        <>
          <SessionProvider>
            <Navbar />
            <div className="mainWithSideBar">
              <SideBar />
              <main style={{ width: "50px" }} className="mainContent">
                <div className="innerMainCententWrapper">{children}</div>
              </main>
            </div>
          </SessionProvider>
        </>
      )}
    </>
  );
};

export default Layout;
