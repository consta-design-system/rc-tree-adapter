import { cn } from '@/__private__/utils/bem'
import './RcTree.css'

export const cnTree = cn('RcTree')

type RcTreeProps = {
  size?: 'm' | 's'
}

export const cnRcTree = (props?: RcTreeProps, classNames?: Array<string | undefined>) => {
  const params = props || ({} as RcTreeProps)
  const { size = 's' } = params
  return cnTree({ size: size || 's' }, classNames)
    .split(' ')
    .reverse()
    .join(' ')
}
