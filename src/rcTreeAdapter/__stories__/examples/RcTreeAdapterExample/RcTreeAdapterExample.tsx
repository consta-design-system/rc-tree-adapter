import React from 'react'

import { rcTreeAdapter } from '@/rcTreeAdapter/rcTreeAdapter'
import { default as RCTree } from 'rc-tree'
import { data } from '@/rcTreeAdapter/__mocks__/data.mock'

export function RcTreeAdapterExample() {
  const treeProps = rcTreeAdapter()

  return <RCTree {...treeProps} treeData={data} defaultExpandAll />
}

export function RcTreeAdapterExampleStyles() {
  const treeProps = rcTreeAdapter({ size: 'm' })

  return <RCTree {...treeProps} treeData={data} defaultExpandAll />
}

export function RcTreeAdapterExampleCheckable() {
  const treeProps = rcTreeAdapter()

  return <RCTree {...treeProps} treeData={data} defaultExpandAll checkable />
}

export function RcTreeAdapterExampleHeight() {
  const treeProps = rcTreeAdapter()

  return <RCTree {...treeProps} treeData={data} defaultExpandAll height={100} />
}

export function RcTreeAdapterExampleIcon() {
  const treeProps = rcTreeAdapter()

  return <RCTree {...treeProps} treeData={data} defaultExpandAll height={100} showIcon />
}
