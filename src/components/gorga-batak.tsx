import type { ComponentProps } from 'react'

import GorgaBatakImage from '../../public/assets/images/gorga-batak.svg'

interface Props extends ComponentProps<'svg'> {}

const GorgaBatak = ({ ...rest }: Props) => {
  return <GorgaBatakImage {...rest} />
}

export default GorgaBatak
