import React from 'react'
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';


export default function DatePickerComponent() {
  return (
    <>
        <label>DatePicker</label>
        <Controller                     
          name="dataPicker"
          defaultValue=""
          render={({ field }) => (
            <DatePicker {...field}                         
            />
          )}
        />     
    </>
  )
}
