import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import React from 'react';

import { cnRcTree } from '##/mixs/RcTree/RcTree';

import { RcTreeAdapter, RcTreeAdapterProps } from './types';

export const rcTreeAdapter: RcTreeAdapter = (props) => {
  const params = props || ({} as RcTreeAdapterProps);
  const { size = 's', prefixCls, switcherIcon, showIcon = false } = params;

  return {
    switcherIcon: switcherIcon || <IconArrowRight size={size} />,
    prefixCls: cnRcTree({ size }, [prefixCls]),
    showIcon,
  };
};
