"use client";
import Navbar from "@/components/Navbar";
import React from "react";

function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DefaultLayout;
