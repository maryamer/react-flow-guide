import { useDnD } from "./DnDContext";
const Sidebar = () => {
  const [_, setType] = useDnD();

  const onDragStart = (event: any, nodeType: any) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
      <div
        className="circlenode rounded-full"
        onDragStart={(event) => onDragStart(event, "circle")}
        draggable
      >
        Circle Node
      </div>
    </aside>
  );
};
export default Sidebar;
