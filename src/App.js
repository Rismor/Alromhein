import React from "react";
import Tree from "react-d3-tree";
import closeChartJson from "./data/close.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <circle r="15" onClick={toggleNode} fill="" />
    {nodeDatum.gender === "Male" && (
      <>
        <circle r="15" onClick={toggleNode} fill="lightblue" />
        <text fill="black" strokeWidth="1" x="25">
          {nodeDatum.name}
        </text>
      </>
    )}
    {nodeDatum.gender === "Female" && (
      <>
        <circle r="15" onClick={toggleNode} fill="lightpink" />
        <text fill="black" strokeWidth="1" x="25">
          {nodeDatum.name}
        </text>
      </>
    )}
    {nodeDatum.gender === "Him" && (
      <>
        <circle r="15" onClick={toggleNode} fill="gold" />
        <text fill="black" strokeWidth="1" x="20">
          {nodeDatum.name}
        </text>
      </>
    )}
  </g>
);

export default function App() {
  const [translate, containerRef] = useCenteredTree();
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={closeChartJson}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
        initialDepth={1}
        zoom={0.31}
      />
    </div>
  );
}
