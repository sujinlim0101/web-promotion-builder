"use client";
import { RecoilRoot } from "recoil";

import { EditPreveiwPart } from "./components/EditPreveiwPart";
import { FormPart } from "./components/FormPart";
import { PreviewModeChangeForm } from "./components/PreviewModeChangeForm";

export default function Page() {
  return (
    <div className="flex h-full">
      <RecoilRoot>
        <div className="bg-gray100 p-8 pt-32 grow justify-center">
          <PreviewModeChangeForm />
          <EditPreveiwPart />
        </div>
        <FormPart/>
      </RecoilRoot>
    </div>
  );
}
