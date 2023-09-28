import { Example } from '@consta/stand';
import RCTree from 'rc-tree';
import React from 'react';

import { cnRcTree } from '../../../../RcTree/RcTree';
import { data } from '../../../__mocks__/data.mock';

export const RcTreeExample = () => {
  const prefix = cnRcTree({ size: 's' }, ['CustomTree']);
  return (
    <Example>
      <RCTree treeData={data} prefixCls={prefix} defaultExpandAll />
    </Example>
  );
};
