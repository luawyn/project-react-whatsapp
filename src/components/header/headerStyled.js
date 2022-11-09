import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainPerson = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-evenly;

  img {
    border-radius: 50%;
    width: 50px;
  }

  div {
    font-weight: bold;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p:last-child {
      color: #b9bec3;
      font-weight: normal;
    }
  }
`;

export const Icons = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }

  :active {
    filter: brightness(0.95);
  }
`;
