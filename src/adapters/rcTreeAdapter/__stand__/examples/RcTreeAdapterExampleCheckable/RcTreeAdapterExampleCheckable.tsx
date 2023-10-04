import { Example } from '@consta/stand';
import RCTree from 'rc-tree';
import React from 'react';

import { data } from '##/adapters/rcTreeAdapter/__mocks__/data.mock';
import { rcTreeAdapter } from '##/adapters/rcTreeAdapter/rcTreeAdapter';

export function RcTreeAdapterExampleCheckable() {
  const treeProps = rcTreeAdapter();

  return (
    <Example>
      <RCTree {...treeProps} treeData={data} defaultExpandAll checkable />
    </Example>
  );
}
