import React from 'react'

import { default as RCTree } from 'rc-tree'
import { TreeProps as RCTreeProps } from 'rc-tree/lib/Tree'

import './Tree.css'

type ExcludeProps = 'prefixCls'

type TreeProps = Omit<RCTreeProps, ExcludeProps> & { prefixCls?: string }

export type TreeComponentType = (props: TreeProps) => React.ReactElement | null

export const Tree: TreeComponentType = props => {
  const { prefixCls = 'rc-tree' } = props

  return <RCTree {...props} prefixCls={prefixCls} />
}
