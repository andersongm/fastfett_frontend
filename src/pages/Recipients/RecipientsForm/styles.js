import styled from 'styled-components';

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }

`;

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;

    label {
        align-items: center;
        font-weight: bold;
        margin: 10px 0 5px;
    }

    input {
        border-radius: 4px;
        padding: 5px;
        margin-top: 5px;
        height: 40px;
        font-size: 16px;

        &::placeholder {
          color: #ccc;
        }
    }
`;

export const Content = styled.div`
    background: #FFF;
    padding: 20px;
    border-radius: 5px;

    .row-1 {
      display: flex;
      flex-direction: column;

      span {
        color: #f00;
        margin-top: 2px;
      }
    }

    .row-2 {
      display: grid;
      grid-template-columns: 60fr 20fr 20fr;
      grid-column-gap: 10px;

      div {
        display: flex;
        flex-direction: column;
      }

      span {
        color: #f00;
        margin-top: 2px;
      }

    }

    .row-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;

      div {
        display: flex;
        flex-direction: column;
      }

      span {
        color: #f00;
        margin-top: 2px;
      }

    }


`;


