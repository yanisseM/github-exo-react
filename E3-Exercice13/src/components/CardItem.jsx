import styled from "styled-components";
import React from "react";

const CardItem = (props) => {
  return (
    <Container>
      <div>
        <img
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <h3>Titre</h3>
        <p>Description</p>
      </div>
      <div>
        <button onClick={props.addArticle}>➕</button>
      </div>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  border-radius: 12px;
  width: 256px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  & img {
    height: 172px;
    display: block;
  }

  & div:nth-child(2) {
    padding: 8px 12px;
  }

  & div:last-child {
    & button {
      width: 100%;
      height: 32px;
      border: none;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        background-color: aquamarine;
      }
    }
  }

  & h3 {
    margin: 0;
  }
`;
