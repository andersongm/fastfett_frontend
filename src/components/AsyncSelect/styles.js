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
    // fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
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
