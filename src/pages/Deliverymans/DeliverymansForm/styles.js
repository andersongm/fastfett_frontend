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
    /* height: 85%; */
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
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    span {
        color: #f00;
        margin-top: 2px;
      }

`;

export const Content = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;

`;


