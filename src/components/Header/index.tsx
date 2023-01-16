import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoDtMoneyImg from '../../assets/logo-dt-money.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMoneyImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
