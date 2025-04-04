import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

const CircleNode: React.FC<NodeProps> = ({ data }: any) => {
  return (
    <div className="circle-node">
      <Handle type="target" position={Position.Top} />
      <div className="circle-content">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CircleNode;
