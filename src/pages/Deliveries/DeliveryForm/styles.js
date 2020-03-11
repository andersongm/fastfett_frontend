import styled from 'styled-components';

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#ee4d64',
    background: state.isSelected ? '#ee4d64' : 'none',
  }),
  valueContainer: styles => ({
    ...styles
  }),
  selectContainer: styles => ({
    ...styles,
    alignContent: 'center',
    background: '#f90',
  }),
  control: (styles) => ({
    ...styles,
    height: 38,
    justifyContent: 'center',
    alignContent: 'center',
    width: '98%'
  }),
  input: (styles) => ({
    ...styles,
    height: 40,
    fontSize: 16,
    // alignContent: 'center',
    // justifyContent: 'center',
    color: '#444',
    fontWeight: 'bold',
    // width: '500px',
  }),
  indicatorSeparator: styles => ({
    //...styles,
    display: 'none',
    alignContent: 'center',
    justifyContent: 'center'
  }),
  indicatorsContainer: () => ({
    height: 38,
  }),

}

export const DataDelivery = styled.div`

    div.row {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
`;

// export const selectStyles = {
//     option: (provided, state) => ({
//       ...provided,
//       color: state.isSelected ? '#fff' : '#ee4d64',
//       background: state.isSelected ? '#ee4d64' : 'none',
//     }),
//     control: styles => ({
//       ...styles,
//       height: 44,
//       width: '500px',
//       background: '#ccc'
//     }),
//     indicatorSeparator: styles => ({
//       ...styles,
//       display: 'none',
//     }),
//     indicatorsContainer: styles => ({
//       ...styles,
//       height: 44,
//       // width: '500px'
//     }),
//     input: styles => ({
//       ...styles,
//       height: 40,
//       fontSize: 16,
//       // alignContent: 'center',
//       color: '#444',
//       fontWeight: 'bold',
//       // width: '500px',
//       background: '#f90'
//     }),
//   };

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
    max-width: 1000px;
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

`;

export const Content = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;

`;


