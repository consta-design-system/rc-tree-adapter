import React from 'react'

import { default as RCTree } from 'rc-tree'
import { useRcTreeAdapter } from '@/useRcTreeAdapter/useRcTreeAdapter'
import { data } from '@/useRcTreeAdapter/__mocks__/data.mock'

export function UseRcTreeAdapterStoriesExample() {
  const treeProps = useRcTreeAdapter({ treeData: data, defaultExpandAll: true })

  return <RCTree {...treeProps} />
}
