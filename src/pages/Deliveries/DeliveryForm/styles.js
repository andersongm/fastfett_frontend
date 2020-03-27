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
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
`;

export const DataDelivery = styled.div`

    display: flex;

    div {
        flex-direction: column;
        width: 370px;
    }
`;


// export const Container = styled.div`
//     max-width: 1000px;
//     /* width: 100px; */
//     height: 400px;
//     background: #f90;
//     margin: 0 auto;
//     display: flex;

//     form {
//       background: #999;
//       width: 100%;
//       display: flex;

//       div {
//         width: 100%;
//         background: #f00;
//       }

//     }


//     label {
//       align-items: center;
//       font-weight: bold;
//       margin: 10px 0 5px;
//     }

//     input {
//         border-radius: 4px;
//         padding: 5px;
//         margin-top: 5px;
//         height: 40px;
//         font-size: 16px;
//     }

//     div {
//         flex-direction: column;
//         justify-content: space-between;
//     }

//     /* span {
//         color: #f00;
//         margin-top: 2px;
//     } */

// `;

// export const HeaderForm = styled.div`
//   background: #f00;
//   width: 1000px;
//   display: flex;
//   /*align-items: center;
//   justify-content: space-between; */
//   padding: 10px;

//   div {
//     display: flex;
//     justify-content: space-between;
//   }

// `;

// export const DataDelivery = styled.div`

//     /* display: flex;
//     justify-content: space-between; */

//     display: grid;
//     grid-template-columns: 2fr;

//     div {
//         flex-direction: column;
//     }
// `;








