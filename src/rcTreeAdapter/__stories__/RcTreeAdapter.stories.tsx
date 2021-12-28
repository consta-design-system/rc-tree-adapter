import React from 'react'

import { cn } from '@bem-react/classname'
import { boolean, select } from '@storybook/addon-knobs'

import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mocks__/data.mock'

import { default as RCTree } from 'rc-tree'

import mdx from './RcTreeAdapter.docs.mdx'
import './RcTreeAdapterStories.css'
import { rcTreeAdapter } from '@/rcTreeAdapter/rcTreeAdapter'

const cnRcTreeAdapterStories = cn('RcTreeAdapterStories')

const defaultKnobs = () => ({
  size: select('size', ['s', 'm'], 's'),
  checkable: boolean('checkable', false),
  showIcon: boolean('showIcon', false),
  defaultExpandAll: boolean('defaultExpandAll', false),
})

export function Playground() {
  const { defaultExpandAll, showIcon, size, checkable } = defaultKnobs()

  const treeProps = rcTreeAdapter({
    showIcon,
    size,
  })

  return (
    <div className={cnRcTreeAdapterStories()}>
      <RCTree
        {...treeProps}
        height={150}
        treeData={data}
        defaultExpandAll={defaultExpandAll}
        checkable={checkable}
      />
    </div>
  )
}

export default createMetadata({
  title: 'Utils|/rcTreeAdapter',
  id: 'Utils/rcTreeAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
