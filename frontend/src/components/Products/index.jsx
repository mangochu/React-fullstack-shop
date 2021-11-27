import Product from "../Product"
import { popularProducts } from "./data"
import { Container } from "./ProductsElements"

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => 
        <Product item={item} key={item.id} />
        )}
    </Container>
  )
}

export default Products
