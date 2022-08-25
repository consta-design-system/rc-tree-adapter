import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import React from 'react';

import { cnRcTree } from '##/components/RcTree/RcTree';

import { RcTreeAdapter, RcTreeAdapterProps } from './helper';

export const rcTreeAdapter: RcTreeAdapter = (props) => {
  const params = props || ({} as RcTreeAdapterProps);
  const { size, prefixCls, switcherIcon, showIcon = false } = params;

  return {
    switcherIcon: switcherIcon || <IconArrowRight size={size} />,
    prefixCls: cnRcTree({ size }, [prefixCls]),
    showIcon,
  };
};
