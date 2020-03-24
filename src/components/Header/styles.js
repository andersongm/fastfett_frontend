import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 10px;
  /* position: fixed;
  left: 0;
  top: 0;
  width: 100%; */
`;

export const ItemMenu = styled.li`
  list-style: none;
  display: inline-block;
  padding-left: 20px;

  & + li {
    margin-left: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
      margin-top: 5px;
      color: #f00;
      border: 0;
      border-radius: 4px;
      font-size: 12px;
  }

  img {
    width: 32px;
    height: 38px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      flex-direction: row;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 150px;
    }

    a {
      font-weight: bold;
      /* color: #7159c1; */
    }
  }
`;
