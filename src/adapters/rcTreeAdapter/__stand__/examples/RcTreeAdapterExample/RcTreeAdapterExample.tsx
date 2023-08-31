import RCTree from 'rc-tree';
import React from 'react';

import { data } from '##/adapters/rcTreeAdapter/__mocks__/data.mock';
import { rcTreeAdapter } from '##/adapters/rcTreeAdapter/rcTreeAdapter';

export function RcTreeAdapterExample() {
  const treeProps = rcTreeAdapter();

  return <RCTree {...treeProps} treeData={data} defaultExpandAll />;
}

export function RcTreeAdapterExampleStyles() {
  const treeProps = rcTreeAdapter({ size: 'm' });

  return <RCTree {...treeProps} treeData={data} defaultExpandAll />;
}

export function RcTreeAdapterExampleCheckable() {
  const treeProps = rcTreeAdapter();

  return <RCTree {...treeProps} treeData={data} defaultExpandAll checkable />;
}

export function RcTreeAdapterExampleHeight() {
  const treeProps = rcTreeAdapter();

  return (
    <RCTree {...treeProps} treeData={data} defaultExpandAll height={100} />
  );
}

export function RcTreeAdapterExampleNestedLines() {
  const treeProps = rcTreeAdapter({ withNestedLines: true });

  return <RCTree {...treeProps} treeData={data} defaultExpandAll />;
}

export function RcTreeAdapterExampleIcon() {
  const treeProps = rcTreeAdapter();

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      defaultExpandAll
      height={100}
      showIcon
    />
  );
}
