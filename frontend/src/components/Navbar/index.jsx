
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Center, Container, Input, Language, Left, MenuItem, NavLogo, Right, SearchContainer, Wrapper } from './NavbarElements'


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "gray", frontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><NavLogo>MANGO.</NavLogo></Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
