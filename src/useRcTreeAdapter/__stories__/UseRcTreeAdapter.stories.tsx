import React from 'react'

import { cn } from '@bem-react/classname'
import { boolean, select } from '@storybook/addon-knobs'

import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mocks__/data.mock'

import { default as RCTree } from 'rc-tree'

import mdx from './UseRcTreeAdapter.docs.mdx'
import './UseRcTreeAdapterStories.css'
import { useRcTreeAdapter } from '@/useRcTreeAdapter/useRcTreeAdapter'

const cnUseRcTreeAdapterStories = cn('UseRcTreeAdapterStories')

const defaultKnobs = () => ({
  size: select('size', ['s', 'm'], 's'),
  checkable: boolean('checkable', false),
  showIcon: boolean('showIcon', false),
  defaultExpandAll: boolean('defaultExpandAll', false),
})

export function Playground() {
  const { defaultExpandAll, showIcon, size, checkable } = defaultKnobs()

  const treeProps = useRcTreeAdapter({
    showIcon,
    size,
  })

  return (
    <div className={cnUseRcTreeAdapterStories()}>
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
  title: 'Hooks|/useRcTreeAdapter',
  id: 'hooks/useRcTreeAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
