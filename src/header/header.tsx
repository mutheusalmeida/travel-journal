import { ReactComponent as Logo } from '@/assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <Logo />

        <h1>My travel journal.</h1>
      </S.LogoWrapper>
    </S.HeaderWrapper>
  )
}
