import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { UseRcTreeAdapter } from './helper'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'

import './UseRcTreeAdapter.css'

const cnTree = cn('rc-tree')

export const useRcTreeAdapter: UseRcTreeAdapter = props => {
  const { size = 's', prefixCls, switcherIcon, showIcon = false } = props

  const customPrefixCls = cnTree({ size }, [prefixCls])
    .split(' ')
    .reverse()
    .join(' ')

  return {
    switcherIcon: switcherIcon || <IconArrowRight size={size} />,
    prefixCls: customPrefixCls,
    showIcon,
    ...props,
  }
}
