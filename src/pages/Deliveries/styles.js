import styled from 'styled-components';

export const ContainerModal = styled.div`
  line-height: 1em;
  p {
    margin-bottom: 15px;
  }

  div.modal-img {
    display: flex;
    justify-content: center;
    padding: 10px 0 0;

    img {
      width: 100%;
      height: 200px;
    }

  }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Pagination = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 48px;
    padding: 2px;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    background: #7d3fe7;
  }
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
          text-align: right;
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

        &:nth-child(3){
          display: flex;
          align-items: center;
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
