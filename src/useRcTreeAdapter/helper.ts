import { TreeProps as RCTreeProps } from 'rc-tree/lib/Tree'

type ExcludeProps = 'prefixCls'

type UseRcTreeAdapterProps = Omit<RCTreeProps, ExcludeProps> & {
  prefixCls?: string
  size?: 's' | 'm'
}

export type UseRcTreeAdapter = (props: UseRcTreeAdapterProps) => RCTreeProps
