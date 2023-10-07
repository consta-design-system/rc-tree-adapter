import { IconArrowDown } from '@consta/icons/IconArrowDown';
import { IconArrowRight } from '@consta/icons/IconArrowRight';
import React from 'react';

import { cnRcTree } from '##/mixs/RcTree/RcTree';

import { RcTreeAdapter, RcTreeAdapterProps } from './types';

export const rcTreeAdapter: RcTreeAdapter = (props) => {
  const params = props || ({} as RcTreeAdapterProps);
  const { size = 's', prefixCls, switcherIcon, showIcon = false } = params;

  return {
    switcherIcon: (props) => {
      const Icon = props.expanded ? IconArrowDown : IconArrowRight;
      return typeof switcherIcon === 'function'
        ? switcherIcon?.(props)
        : switcherIcon || <Icon size={size} />;
    },
    prefixCls: cnRcTree({ size }, [prefixCls]),
    showIcon,
  };
};
