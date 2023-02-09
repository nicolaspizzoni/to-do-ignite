import { HeaderContainer, HeaderContent } from "./styles"
import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="" />
            </HeaderContent>
        </HeaderContainer>
    )
}