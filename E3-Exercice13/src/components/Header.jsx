import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <div>
        <span>ESTIAM</span>
      </div>
      <div>
        <input type="text" placeholder="Rechercher..."></input>
      </div>
      <div>
        <button>⚙</button>
        <button>🤷‍♀️</button>
        <button>🛒</button>({props.nbArticles})
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  & div:first-child {
    & span {
      color: blue;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  & div:nth-child(2) {
    & input {
      border-radius: 6px;
      border: 1px solid black;
      height: 36px;
    }
  }

  & div:last-child {
    & button {
      width: 36px;
      height: 36px;
      border-radius: 50px;
      border: 1px solid black;
      cursor: pointer;
      margin: 0 4px;
    }
  }
`;
