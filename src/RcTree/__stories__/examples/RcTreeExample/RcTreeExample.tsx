import React from 'react'
import { default as RCTree } from 'rc-tree'
import { data } from '@/rcTreeAdapter/__mocks__/data.mock'
import { cnRcTree } from '../../../../RcTree/RcTree'

export const RcTreeExample = () => {
  const prefix = cnRcTree({ size: 's' }, ['CustomTree'])
  return <RCTree treeData={data} prefixCls={prefix} defaultExpandAll />
}
