import React from 'react'

import { default as RCTree } from 'rc-tree'
import { TreeProps as RCTreeProps } from 'rc-tree/lib/Tree'

export type TreeComponentType = (props: RCTreeProps) => React.ReactElement | null

export const Tree: TreeComponentType = props => {
  return <RCTree {...props} />
}
