import React from 'react'

import { cn } from '@bem-react/classname'

import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mocks__/data.mock'
import { Tree } from '../Tree'

import mdx from './Tree.docs.mdx'
import './TreeStories.css'

const cnTreeStories = cn('TreeStories')

export function Playground() {
  return (
    <div className={cnTreeStories()}>
      <Tree defaultExpandAll treeData={data} height={150} />
    </div>
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
