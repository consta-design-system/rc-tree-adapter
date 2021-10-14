import React from 'react'

import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mocks__/data.mock'
import { Tree } from '../Tree'

import mdx from './Tree.docs.mdx'
import './TreeStories.css'

export function Playground() {
  return <Tree defaultExpandAll treeData={data} height={150} prefixCls="Tree" />
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
