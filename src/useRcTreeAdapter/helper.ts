import { IconType } from 'rc-tree/lib/interface'

export type UseRcTreeAdapterProps = UseRcTreeAdapterPropsResults & {
  size?: 's' | 'm'
}

export type UseRcTreeAdapterPropsResults = {
  prefixCls?: string
  switcherIcon?: IconType
  showIcon?: boolean
}

export type UseRcTreeAdapter = (props?: UseRcTreeAdapterProps) => UseRcTreeAdapterPropsResults
