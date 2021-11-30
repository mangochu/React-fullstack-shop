import { MenuRounded, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Center, Container, Input, Language, Left, MenuItem, MobileIcon, NavLogo, Right, SearchContainer, Wrapper } from './NavbarElements'
import { useSelector } from 'react-redux'

const Navbar = ({ toggle }) => {
  const quantity = useSelector(state => state.cart.quantity)

  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <MobileIcon>
          <MenuRounded style={{ transform: 'scale(1.5)' }} onClick={toggle} />
        </MobileIcon>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", frontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><NavLogo>MANGO.</NavLogo></Center>
        <Right>
          <MenuItem to='/login'>SIGN IN</MenuItem>
          <MenuItem to='/register'>SIGN UP</MenuItem>
        </Right>
        <MenuItem to='/cart'>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Wrapper>
    </Container>
  )
}

export default Navbar
