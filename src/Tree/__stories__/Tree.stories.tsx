import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/data.mock'
import { Tree } from '../Tree'

import mdx from './Tree.docs.mdx'

const defaultExpandedKeys = ['0', '0-2', '0-9-2']

const motion = {
  motionName: 'node-motion',
  motionAppear: false,
  onAppearStart: () => ({ height: 0 }),
  onAppearActive: (node: HTMLElement) => ({ height: node?.scrollHeight }),
  onLeaveStart: (node: HTMLElement) => ({ height: node.offsetHeight }),
  onLeaveActive: () => ({ height: 0 }),
}

export function Playground() {
  return (
    <Tree
      defaultExpandAll
      defaultExpandedKeys={defaultExpandedKeys}
      motion={motion}
      height={200}
      itemHeight={20}
      style={{ border: '1px solid #000' }}
      treeData={data}
      prefixCls={''}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Tree',
  id: 'components/Tree',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
