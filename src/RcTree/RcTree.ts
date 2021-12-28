import { cn } from '@/__private__/utils/bem'
import './RcTree.css'

export const cnTree = cn('RcTree')

type RcTreeProps = {
  size?: 'm' | 's'
  prefixCls?: string
}

export const cnRcTree = (props?: RcTreeProps) => {
  const params = props || ({} as RcTreeProps)
  const { size = 's', prefixCls } = params
  return cnTree({ size: size || 's' }, [prefixCls])
    .split(' ')
    .reverse()
    .join(' ')
}
