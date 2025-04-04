import React from "react";
import { Handle, HandleProps } from "reactflow";

export default function CustomHandle(props: HandleProps) {
  return (
    <Handle
      style={{
        width: 12,
        height: 12,
        background: "white",
        border: "1px solid black",
      }}
      {...props}
    />
  );
}
