import { Input } from 'antd'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function InputFieldRequired() {
  const { register } =useFormContext()

  return (
      <>
        {/* TEXT FIELD REQUIRED*/}
        <label>Text Field Andt *</label>
        <Controller 
          name="inputFieldRequired"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field}              
            />
          )}
        />
    </>     
  )
}
