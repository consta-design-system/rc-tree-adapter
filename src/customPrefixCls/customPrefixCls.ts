import { cn } from '@/__private__/utils/bem'
import '@/useRcTreeAdapter/UseRcTreeAdapter.css'

export const cnTree = cn('rc-tree')

import '@/useRcTreeAdapter/UseRcTreeAdapter.css'

type CustomPrefixClsProps = {
  size?: 'm' | 's'
  prefixCls?: string
}

export const customPrefixCls = (props?: CustomPrefixClsProps) => {
  const params = props || ({} as CustomPrefixClsProps)
  const { size = 's', prefixCls } = params
  return cnTree({ size: size || 's' }, [prefixCls])
    .split(' ')
    .reverse()
    .join(' ')
}
