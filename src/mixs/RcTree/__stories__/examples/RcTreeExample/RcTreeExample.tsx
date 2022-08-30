import RCTree from 'rc-tree';
import React from 'react';

import { data } from '##/adapters/rcTreeAdapter/__mocks__/data.mock';

import { cnRcTree } from '../../../../RcTree/RcTree';

export const RcTreeExample = () => {
  const prefix = cnRcTree({ size: 's' }, ['CustomTree']);
  return <RCTree treeData={data} prefixCls={prefix} defaultExpandAll />;
};
