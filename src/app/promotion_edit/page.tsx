"use client";

import { FormPart } from "./components/FormPart";
import { PreveiwPart } from "./components/PreveiwPart";
import { StructurePart } from "./components/StructurePart";

import "../selected.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <div className="flex min-h-full">
      <QueryClientProvider client={queryClient}>
        <StructurePart />
        <PreveiwPart />
        <FormPart />
        <GoogleOAuthProvider
          clientId={
            "869407715226-9bvoc2v6a3src84i777ap3irm800cvqg.apps.googleusercontent.com"
          }
        >
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
            }}
          />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  );
}
