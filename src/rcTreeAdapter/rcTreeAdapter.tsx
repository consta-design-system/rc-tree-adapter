import React from 'react'

import { RcTreeAdapter, RcTreeAdapterProps } from './helper'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { cnRcTree } from '@/RcTree/RcTree'

export const rcTreeAdapter: RcTreeAdapter = props => {
  const params = props || ({} as RcTreeAdapterProps)
  const { size, prefixCls, switcherIcon, showIcon = false } = params

  return {
    switcherIcon: switcherIcon || <IconArrowRight size={size} />,
    prefixCls: cnRcTree({ size }, [prefixCls]),
    showIcon,
  }
}
