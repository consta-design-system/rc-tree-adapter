import React from 'react'

import { cn } from '@bem-react/classname'
import { boolean, select } from '@storybook/addon-knobs'

import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mocks__/data.mock'
import { Tree } from '../Tree'

import mdx from './Tree.docs.mdx'
import './TreeStories.css'

const cnTreeStories = cn('TreeStories')

const defaultKnobs = () => ({
  size: select('size', ['s', 'm'], 's'),
  checkable: boolean('checkable', false),
  showIcon: boolean('showIcon', false),
  defaultExpandAll: boolean('defaultExpandAll', false),
})

export function Playground() {
  const { defaultExpandAll, showIcon, size, checkable } = defaultKnobs()

  return (
    <div className={cnTreeStories()}>
      <Tree
        showIcon={showIcon}
        checkable={checkable}
        size={size}
        defaultExpandAll={defaultExpandAll}
        treeData={data}
        height={150}
      />
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
