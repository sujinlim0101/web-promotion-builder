"use client";
import { RecoilRoot } from "recoil";

import { DisplaySection } from "./components/DisplaySection";
import { FormSelectContainer } from "./components/FormSelectContainer";

export default function Page() {
  return (
    <div className="flex h-full">
      <RecoilRoot>
        <DisplaySection />
        <FormSelectContainer />
      </RecoilRoot>
    </div>
  );
}
