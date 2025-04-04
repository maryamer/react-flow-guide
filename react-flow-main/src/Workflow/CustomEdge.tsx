import React from "react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents event from propagating in ReactFlow
    console.log("Deleting edge:", id);
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all", // Makes sure the button is clickable
          }}
        >
          <button
            aria-label="Delete Edge"
            className="text-red-500  rounded-full p-1  hover:bg-red-500 hover:text-white transition"
            onClick={handleDelete}
          >
            <X />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
