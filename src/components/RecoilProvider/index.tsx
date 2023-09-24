"use client";

import { ReactNode } from "react";

import { RecoilRoot, SetRecoilState } from "recoil";

export default function RecoilProvider({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
