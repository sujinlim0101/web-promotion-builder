"use client";
import { RecoilRoot } from "recoil";

import { FormPart } from "./components/FormPart";
import { PreveiwPart } from "./components/PreveiwPart";
import { StructurePart } from "./components/StructurePart";

import "../selected.scss";

export default function Page() {
  return (
    <div className="flex h-full">
      <RecoilRoot>
        <StructurePart />
        <PreveiwPart />
        <FormPart />
      </RecoilRoot>
    </div>
  );
}
