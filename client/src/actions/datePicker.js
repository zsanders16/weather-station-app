export const setDatePickerDate = ( date, dataType, dateType ) => {
  return {
    type: 'UPDATE_DATEPICKER_DATE',
    date: date,
    dataType: dataType,
    dateType: dateType,
  }
}
