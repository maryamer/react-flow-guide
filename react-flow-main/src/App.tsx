import "reactflow/dist/style.css";
import { Workflow } from "./Workflow/Workflow";
import { WorkflowLeft } from "./Workflow/WorkflowLeft";
import { WorkflowTop } from "./Workflow/WorkflowTop";
import { ReactFlowProvider } from "reactflow";

export default function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <ReactFlowProvider>
          <WorkflowTop />
        </ReactFlowProvider>
        <WorkflowLeft />
        <Workflow />
      </div>
    </>
  );
}
