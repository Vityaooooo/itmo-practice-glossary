import {
  Controls,
  Edge,
  Node,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect } from "react";
import useFetchPrettyData from "../../hooks/useFetchPrettyData.ts";
import { TNodesLayoutDirection } from "../../types";
import getLayoutedElements from "./helpers.ts";
import {
  buttonStyles,
  controlsStyles
} from "../../styles";

export default function GraphContainer() {
  const { fitView } = useReactFlow();

  const { data, isLoading, isError } = useFetchPrettyData();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (data) {
      const { nodes: initialNodes, edges: initialEdges } = data;
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [data]);

  const onLayout = useCallback(
    (direction: TNodesLayoutDirection) => {
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes(layouted.nodes);
      setEdges(layouted.edges);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [edges, nodes],
  );

  if (isLoading) return <div>Загрузка данных...</div>;
  if (isError) return <div>Ошибка при загрузке данных</div>;

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Panel position="bottom-right" className={controlsStyles}>
        <button className={buttonStyles} onClick={() => onLayout("TB")}>
          Расставить
        </button>
      </Panel>
      <Controls />
    </ReactFlow>
  );
}
