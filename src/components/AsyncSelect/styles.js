export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? '#fff' : '#ee4d64',
    // background: state.isSelected ? '#ee4d64' : 'none',
  }),
  valueContainer: styles => ({
    ...styles
  }),
  // selectContainer: styles => ({
  //   ...styles,
  //   alignContent: 'center',
  //   background: '#f90',
  // }),
  control: (styles) => ({
    ...styles,
    height: 38,
    justifyContent: 'center',
    // alignContent: 'center',
    width: '100%'
  }),
  input: (styles) => ({
    ...styles,
    // fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: 38,
    background: '#f00',
    marginLeft: 0
  }),
  indicatorSeparator: styles => ({
    //...styles,
    display: 'none',
    // alignContent: 'center',
    // justifyContent: 'center'
  }),
  menuList: () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }),

}

export const asyncSelectStyles = {
  control: (styles) => ({
    ...styles,
    // height: 38,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    // width: '100%'
  }),
  valueContainer: (styles) => ({
    // background: '#f00',
    height: 38,
    position: 'absolute'
  }),
  indicatorsContainer: (styles) => ({
    // background: '#f00',
    maxHeight: 38,
    maxWidth: 38,
    alignContent: 'center',
    marginLeft: '90%',
    marginTop: -10,
  }),
  input: (styles) => ({
    // background: '#f00',
    maxHeight: 38,
    color: '#444',
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 7,
  }),
  singleValue: (styles) => ({
    marginLeft: 7,
    marginTop: 10,
  }),
  loadingIndicator: () => ({
    display: 'none'
  }),
  placeholder: () => ({
    marginLeft: 6,
    marginTop: 10
  })

}

