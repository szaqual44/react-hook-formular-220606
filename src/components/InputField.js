import { Input } from 'antd'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useWatch } from "react-hook-form";


export default function InputField() {
  const value=useWatch({
    name:"inputField"
  })
// console.log(value)

  return (
      <>
        {/* TEXT FIELD */}
        <label>Text Field Andt</label>
        <Controller 
          name="inputField"
          defaultValue=""
          render={({ field }) => (
            <Input {...field}              
            />
          )}
        />
    </>     
  )
}
