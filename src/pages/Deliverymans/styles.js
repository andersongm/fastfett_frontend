import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ImageDeliveryman = styled.img`
  background: '#f90';
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */
  border-radius: 50px;
`;


export const TableList = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  /* border-collapse: collapse;  */
  padding: 30px 30px;
  font-size: 16px;
  color: #666;

  thead {
    text-align: left;

    tr {
        display: flex;

        th {
            width: 50%;

            &:first-child {
              width: 15%
            }

            &:last-child {
              width: 11%;
              text-align: center;
            }

        }

    }
  }

  tbody {

    tr {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #eee;

        td {
            width: 50%;

            &:first-child {
              width: 15%;
            }

            &:last-child {
              width: 11%;
              text-align: center
            }


        }

    }
  }

  `;
