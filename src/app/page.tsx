"use client";

import { Main } from "next/document";
import Balance_sheet from "./balance_sheet/page";

export default function Home() {
  return (
    <Main>
      <Balance_sheet />
    </Main>
  );
}
