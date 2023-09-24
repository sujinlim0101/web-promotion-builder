"use client";

import { FormPart } from "./components/FormPart";
import { PreveiwPart } from "./components/PreveiwPart";
import { StructurePart } from "./components/StructurePart";

import "../selected.scss";

export default function Page() {
  return (
    <div className="flex min-h-full">
      <StructurePart />
      <PreveiwPart />
      <FormPart />
    </div>
  );
}
