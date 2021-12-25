import React from 'react'

import { default as RCTree } from 'rc-tree'
import { data } from '@/useRcTreeAdapter/__mocks__/data.mock'
import { customPrefixCls } from '@/customPrefixCls/customPrefixCls'

export function UseRcTreeAdapterExample() {
  const prefix = customPrefixCls()

  return <RCTree prefixCls={prefix} treeData={data} defaultExpandAll />
}
