import React, { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import './datepicker.scss';

function DatePicker(){
  const[startDate, setStartDate] = useState(new Date());
  const[endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };


  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return ( 
      <DateRangePicker 
      className="icz-daterangepicker"
        ranges={[selectionRange]}
        color = "#11a1fd"
        rangeColors={["#11a1fd"]}
        onChange={handleSelect}
      />
    )
}
export default DatePicker;