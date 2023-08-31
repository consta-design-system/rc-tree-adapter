import './rcTreeAdapterVariants.css';

import { cn } from '@bem-react/classname';
import { useBoolean, useSelect } from '@consta/stand';
import RCTree from 'rc-tree';
import React from 'react';

import { rcTreeAdapter } from '##/adapters/rcTreeAdapter/rcTreeAdapter';

import { data } from '../__mocks__/data.mock';

const cnRcTreeAdapterVariants = cn('rcTreeAdapterVariants');

const Variants = () => {
  const size = useSelect('size', ['s', 'm'], 's');
  const checkable = useBoolean('checkable', false);
  const showIcon = useBoolean('showIcon', false);
  const defaultExpandAll = useBoolean('defaultExpandAll', false);
  const withNestedLines = useBoolean('withNestedLines', false);

  const treeProps = rcTreeAdapter({
    showIcon,
    size,
    withNestedLines,
  });

  return (
    <div className={cnRcTreeAdapterVariants()}>
      <RCTree
        {...treeProps}
        height={150}
        treeData={data}
        defaultExpandAll={defaultExpandAll}
        checkable={checkable}
      />
    </div>
  );
};

export default Variants;
