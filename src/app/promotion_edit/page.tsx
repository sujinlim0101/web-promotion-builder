"use client";
import { RecoilRoot } from "recoil";


import { FormPart } from "./components/FormPart";
import { PreveiwPart } from './components/PreveiwPart'

export default function Page() {
  return (
    <div className="flex h-full">
      <RecoilRoot>
        <PreveiwPart />
        <FormPart/>
      </RecoilRoot>
    </div>
  );
}
