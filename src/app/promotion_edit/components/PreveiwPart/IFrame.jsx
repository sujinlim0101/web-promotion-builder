"use client";

import { useState } from "react";

import { createPortal } from "react-dom";

export const IFrame = ({ children }) => {
  const [ref, setRef] = useState();

  const container = ref?.contentWindow?.document?.body;

  return (
    <iframe ref={setRef} height={667} width={375}>
      {/* create portal for link stylesheet /global.css to iframe */}
      {container &&
        createPortal(
          <link rel="stylesheet" type="text/css" href="layout.css" />,
          container
        )}

      {container && createPortal(children, container)}
    </iframe>
  );
};
