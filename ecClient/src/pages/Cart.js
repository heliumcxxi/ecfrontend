import { Add, DeleteOutline, Remove, WhatsApp } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useSelector } from "react-redux";
import { PayMethods } from "../data";
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkOut = () => {
    fetch(`${process.env.REACT_APP_CLIENT_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const removeClick = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Wrapper>
        <TopInfo>
          <Title>Your Bag</Title>
        </TopInfo>
        <BottomInfo>
          <Left>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductImg src={product.img} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductMaterial>{product.color}</ProductMaterial>
                  <ProductColor>{product.size}</ProductColor>
                  <RemoveButton onClick={() => removeClick(product)}>
                    <DeleteOutline fontSize="small" />
                    Remove
                  </RemoveButton>
                </ProductInfo>
                <ProductAmountInfo>
                  <ProductPrice>$ {product.price}</ProductPrice>
                  <ProductAmount>
                    <Remove fontSize="small" />
                    <Amount>{product.quantity}</Amount>
                    <Add fontSize="small" />
                  </ProductAmount>
                </ProductAmountInfo>
              </Product>
            ))}
          </Left>

          <Right>
            <Summary>
              <OrderSummary>
                <SummaryTitle> Order Summary</SummaryTitle>
              </OrderSummary>
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
            </Summary>

            <PayMethodsSummary>
              <PaymentText>Check out with Credit/Debit Card</PaymentText>
              <Button onClick={checkOut}>Check out</Button>

              <br />
              <PaymentText>We also accept</PaymentText>
              <Payment>
                {PayMethods.map((x) => (
                  <Image key={x.id} src={x.img} />
                ))}
              </Payment>
              <PaymentText
                onClick={() =>
                  window.open(
                    "https://web.whatsapp.com/send?phone=85291471893&text=Hello"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                Click here for alternative payments
              </PaymentText>
            </PayMethodsSummary>
          </Right>
        </BottomInfo>
      </Wrapper>
      <Newsletter />
    </>
  );
};

const Wrapper = styled.div`
  background-color: var(--light-pink);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

const Title = styled.h2`
  margin-top: 2rem;
`;

const BottomInfo = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  margin: 2rem auto 5rem;
  width: 80%;
  border-radius: 5px;
`;

const Left = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-left: 1rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #c6c9cf;
  margin: 2rem;
`;

const ProductImg = styled.img`
  flex: 1;
  height: 25%;
  width: 25%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
`;

const ProductTitle = styled.h4`
  margin-top: 3rem;
  margin-left: 0.5rem;
`;

const ProductId = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: grey;
`;

const ProductMaterial = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  color: grey;
  text-transform: capitalize;
`;

const ProductColor = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding-bottom: 1rem;
  color: grey;
`;

const RemoveButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
`;

const ProductAmountInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductPrice = styled.div`
  font-size: 1.3rem;
  margin-top: 2rem;
`;

const ProductAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Amount = styled.div`
  padding: 1rem;
`;

const Right = styled.div`
  flex: 1;
  width: 50%;
`;

const Summary = styled.div`
  background-color: white;
  margin: 0 1rem;
  padding: 1rem;
`;

const OrderSummary = styled.div`
  flex: 1;
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 250px;
  height: 40px;
  border-style: none;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 15%;
`;

const PayMethodsSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

const Payment = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

const PaymentText = styled.div`
  margin: 1rem auto;
`;

const Image = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

export default Cart;
