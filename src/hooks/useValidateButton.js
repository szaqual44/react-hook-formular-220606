import { useEffect, useState } from "react";

const useValidateButton = (chosenData) => {
    const [color, setColor] = useState('green')

    useEffect(()=>{  
        if (chosenData === undefined) return   
     
        const currentDate =  new Date()
        if (chosenData <= currentDate && chosenData !==null) {
          setColor('yellow')
        }
        else setColor('green')
       
      })

    return color
}

export default useValidateButton