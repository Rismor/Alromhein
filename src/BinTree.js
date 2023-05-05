import React from "react";
import Tree from "react-d3-tree";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
  const orgChart = 
  {
    "Rashid": {
      "name": "Rashid",
      "children": []
    },
    "": {
      "name": "",
      "children": [
        {
          "name": "Shlash",
          "children": []
        },
        {
          "name": "Rashid",
          "children": []
        },
        {
          "name": "Rasheed",
          "children": []
        },
        {
          "name": "Daaebis",
          "children": []
        },
        {
          "name": "Tuma",
          "children": []
        },
        {
          "name": "Braheem",
          "children": []
        },
        {
          "name": "Eid",
          "children": []
        },
        {
          "name": "Dlaim",
          "children": []
        },
        {
          "name": "Sulayman",
          "children": []
        }
      ]
    },
    "Salami": {
      "name": "Salami",
      "children": []
    }
  }
;

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div
      id="treeWrapper"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "gray"
      }}
    >
      <Tree data={orgChart} />
    </div>
  );
}
