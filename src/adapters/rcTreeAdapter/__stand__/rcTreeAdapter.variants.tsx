import './rcTreeAdapterVariants.css';

import { useBoolean, useSelect } from '@consta/stand';
import RCTree from 'rc-tree';
import React from 'react';

import { rcTreeAdapter } from '##/adapters/rcTreeAdapter/rcTreeAdapter';
import { cn } from '##/utils/bem';

import { data } from '../__mocks__/data.mock';

const cnRcTreeAdapterVariants = cn('rcTreeAdapterVariants');

const Variants = () => {
  const size = useSelect('size', ['s', 'm'], 's');
  const checkable = useBoolean('checkable', true);
  const selectable = useBoolean('selectable', true);
  const showIcon = useBoolean('showIcon', true);
  const showLine = useBoolean('showLine', true);
  const defaultExpandAll = useBoolean('defaultExpandAll', true);

  const treeProps = rcTreeAdapter({
    size,
  });

  return (
    <div className={cnRcTreeAdapterVariants()}>
      <RCTree
        {...treeProps}
        height={150}
        treeData={data}
        showIcon={showIcon}
        draggable
        showLine={showLine}
        selectable={selectable}
        defaultExpandAll={defaultExpandAll}
        checkable={checkable}
      />
    </div>
  );
};

export default Variants;
