import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};
