import { useEffect, useState } from "react";

const useValidationDropdown = (dropdownValue,inputField) => {
    const [dropdownValidationMessage,setDropdownValidationMessage] = useState('')
    useEffect(()=>{  
            let inputLength = String(inputField).length
            if (dropdownValue === 'C' && inputLength<5) setDropdownValidationMessage('Nie spełnione kryteria')
            else setDropdownValidationMessage('')    
      })

    return dropdownValidationMessage
}

export default useValidationDropdown