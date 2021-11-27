import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Circle, Container, Icon, Image, Info } from "./ProductElements"


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorder />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
