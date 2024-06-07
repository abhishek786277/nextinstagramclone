"use client"
import { RecoilRoot } from "recoil";

export default function Recoilwrapper({children}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
