
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Center, Container, Input, Language, Left, MenuItem, NavLogo, Right, SearchContainer, Wrapper } from './NavbarElements'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)

  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", frontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><NavLogo>MANGO.</NavLogo></Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>SIGN UP</MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
