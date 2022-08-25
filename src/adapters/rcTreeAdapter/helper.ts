import { IconType } from 'rc-tree/lib/interface';

export type RcTreeAdapterProps = RcTreeAdapterPropsResults & {
  size?: 's' | 'm';
};

export type RcTreeAdapterPropsResults = {
  prefixCls?: string;
  switcherIcon?: IconType;
  showIcon?: boolean;
};

export type RcTreeAdapter = (
  props?: RcTreeAdapterProps,
) => RcTreeAdapterPropsResults;
