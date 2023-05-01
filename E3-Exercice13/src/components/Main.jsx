import styled from "styled-components";
import CardItem from "./CardItem";

const Main = (props) => {
  return (
    <Container>
      <CardItemContainer>
        <CardItem addArticle={props.addArticle} />
        <CardItem addArticle={props.addArticle} />
        <CardItem addArticle={props.addArticle} />
      </CardItemContainer>
    </Container>
  );
};

export default Main;

const Container = styled.main``;

const CardItemContainer = styled.section`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
