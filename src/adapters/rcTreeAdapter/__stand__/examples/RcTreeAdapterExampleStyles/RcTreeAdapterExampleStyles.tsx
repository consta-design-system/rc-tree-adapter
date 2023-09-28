import { Example } from '@consta/stand';
import RCTree from 'rc-tree';
import React from 'react';

import { data } from '##/adapters/rcTreeAdapter/__mocks__/data.mock';
import { rcTreeAdapter } from '##/adapters/rcTreeAdapter/rcTreeAdapter';

export function RcTreeAdapterExampleStyles() {
  const treePropsM = rcTreeAdapter({ size: 'm' });
  const treePropsS = rcTreeAdapter({ size: 's' });

  return (
    <Example
      items={[treePropsS, treePropsM]}
      getItemDescription={(item) =>
        `size="${item.prefixCls?.includes('size_s') ? 's' : 'm'}"`
      }
      getItemNode={(item) => (
        <RCTree {...item} treeData={data} defaultExpandAll />
      )}
    />
  );
}
