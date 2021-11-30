import { Close } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { Bottom, Container, Desc, Icon, Logo, MenuItem, Wrapper } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <Close style={{ transform: 'scale(1.5)' }} />
      </Icon>
      <Wrapper>
        <Link to='/login'><MenuItem>Sign in</MenuItem></Link>
        <Link to='/register'><MenuItem>Sign up</MenuItem></Link>
        <Link to='/cart'><MenuItem>Cart</MenuItem></Link>
        <MenuItem>Language</MenuItem>
        <MenuItem>Search</MenuItem>
      </Wrapper>
      <Bottom>
        <Logo>Mango.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit, non nam debitis pariatur suscipit adipisci iusto reiciendis quidem amet deserunt, itaque cupiditate officiis. Facere velit consectetur molestiae doloremque dignissimos!</Desc>
      </Bottom>
    </Container>
  )
}

export default Sidebar
