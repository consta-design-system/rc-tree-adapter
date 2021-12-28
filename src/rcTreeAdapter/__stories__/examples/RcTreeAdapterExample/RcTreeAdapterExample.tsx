import React from 'react'

import { default as RCTree } from 'rc-tree'
import { data } from '@/rcTreeAdapter/__mocks__/data.mock'
import { cnRcTree } from '@/RcTree/RcTree'

export function RcTreeAdapterExample() {
  const prefix = cnRcTree()

  return <RCTree prefixCls={prefix} treeData={data} defaultExpandAll />
}
