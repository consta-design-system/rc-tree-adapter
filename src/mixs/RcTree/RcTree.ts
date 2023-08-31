import './RcTree.css';

import { cn } from '##/utils/bem';

export const cnTree = cn('RcTree');

type RcTreeProps = {
  size?: 'm' | 's';
  withNestedLines?: boolean;
};

export const cnRcTree = (
  props?: RcTreeProps,
  classNames?: Array<string | undefined>,
) => {
  const params = props || ({} as RcTreeProps);
  const { size = 's', withNestedLines } = params;
  return cnTree({ size: size || 's', withNestedLines }, classNames)
    .split(' ')
    .reverse()
    .join(' ');
};
