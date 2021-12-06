import React from 'react'

import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { default as RCTree } from 'rc-tree'
import { TreeProps as RCTreeProps } from 'rc-tree/lib/Tree'

import { cn } from '@/__private__/utils/bem'

import './Tree.css'

type ExcludeProps = 'prefixCls'

type TreeProps = Omit<RCTreeProps, ExcludeProps> & { prefixCls?: string; size?: 's' | 'm' }

export type TreeComponentType = (props: TreeProps) => React.ReactElement | null

const cnTreeDefault = cn('rc-tree')

export const Tree: TreeComponentType = props => {
  const { prefixCls, size = 's', switcherIcon, showIcon = false } = props

  const switchIcon = switcherIcon || <IconArrowRight size={size} />

  const cnTree = prefixCls ? cn(prefixCls) : cnTreeDefault

  const treeClassname = cnTree({ size })
    .split(' ')
    .reverse()
    .join(' ')

  return (
    <RCTree {...props} showIcon={showIcon} switcherIcon={switchIcon} prefixCls={treeClassname} />
  )
}
