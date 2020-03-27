import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const TableList = styled.table`
  width: 100%;
  border-spacing: 0 10px;

  thead {
    tr {
      th {
        font-weight: bold;
        text-align: left;
        color: #444;
        padding: 0 10px;

        &:last-child {
          text-align: center;
        }
      }
    }
  }

  tbody {
    tr {
      background: #fff;

      td {
        padding: 10px;
        color: #666666;

        &:first-child {
          width: 40px;
        }

        &:last-child {
          width: 40px;
          text-align: center;

          svg {
            cursor: pointer;

            &:hover {
              opacity: 0.7;
            }
          }

        }
      }
    }
  }
`;
