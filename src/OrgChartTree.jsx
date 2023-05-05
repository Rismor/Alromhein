import React from 'react';
import Tree from 'react-d3-tree';
import "./custom-tree.css"

const orgChart = {
  name: 'Mazen',
  children: [
    {
      name: 'Mazen',
      children: [
        {
          name: 'Morris',
        },
        {
          name: 'Julia',
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={orgChart} />
    </div>
  );
}
