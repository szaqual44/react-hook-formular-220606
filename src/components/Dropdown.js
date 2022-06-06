import { Select } from 'antd'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function Dropdown() {


  return (
    <>
      <label>Dropdown</label>
      <Controller 
        name="dropdown"
        defaultValue=""
        render={({ field }) => (
          <Select {...field} 
          className="myDropdown"
            options={[
                { value: "A", label: "A" },
                { value: "B", label: "B" },
                { value: "C", label: "C" }
            ]}
            
          />
        )}
      />
    </>
  )
}
