// CircleNode.tsx
import React from "react";
import { Handle, Position } from "reactflow";

const CircleNode = ({ data }: any) => {
  return (
    <div className="p-2 rounded-full  w-16 h-16 flex items-center justify-center">
      <span>{data.label}</span>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CircleNode;
