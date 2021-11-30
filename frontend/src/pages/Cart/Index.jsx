import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from "./CartElements";
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react";
import { userRequest } from '../../requestMethods'
import { useNavigate } from 'react-router-dom'
import Sidebar from "../../components/Sidebar";

const avatar = require("./../../assets/images/avatar.gif").default

const KEY = process.env.REACT_APP_STRIPE

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const history = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onToken = token => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        })
        history('/success', { data: res.data })
      } catch { }
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken, cart.total, history])
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={()=>history(-1)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='Mango Shop'
              image={avatar}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
