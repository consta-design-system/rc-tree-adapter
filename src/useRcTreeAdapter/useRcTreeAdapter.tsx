import React from 'react'

import { UseRcTreeAdapter, UseRcTreeAdapterProps } from './helper'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { customPrefixCls } from '@/customPrefixCls/customPrefixCls'
import './UseRcTreeAdapter.css'

export const useRcTreeAdapter: UseRcTreeAdapter = props => {
  const params = props || ({} as UseRcTreeAdapterProps)
  const { size, prefixCls, switcherIcon, showIcon = false } = params

  return {
    switcherIcon: switcherIcon || <IconArrowRight size={size} />,
    prefixCls: customPrefixCls({ size, prefixCls }),
    showIcon,
  }
}
