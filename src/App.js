import {useForm,  FormProvider} from 'react-hook-form'
import 'antd/dist/antd.css';
import './App.css';
import Dropdown from './components/Dropdown'
import InputField from './components/InputField';
import InputFieldRequired from './components/InputFieldRequired';
import DatePickerComponent from './components/DatePickerComponent';
import useValidateButton  from './hooks/useValidateButton';
import useValidationDropdown from './hooks/useValidationDropdown'

function App() {  
  const methods = useForm()  
  const onSubmit = (data) =>{
    // console.log('data:' ,data)  
    if (dropdownValidationMessage==='' && methods.formState.errors.inputFieldRequired ===undefined) alert('Success!')
  } 

  //DROPDOWN VALIDATION
  const dropdownValue = methods.watch("dropdown")
  const inputField = methods.watch("inputField")  
  const dropdownValidationMessage=useValidationDropdown(dropdownValue,inputField)

  //BUTTON VALIDATION
  const chosenData = methods.watch('dataPicker')
  const color =useValidateButton(chosenData)


  
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit) }>        
          <Dropdown />
            {dropdownValidationMessage}
          <InputField />
          <InputFieldRequired />
            {methods.formState.errors.inputFieldRequired?.type ==='required' && <span>To pole jest wymagane</span>}
          <DatePickerComponent />
          <input type="submit"  style={{backgroundColor:`${color}`}}/>
      </form>
    </FormProvider>      
    
  );
}

export default App;












//DROPDOWN VALIDATION
// useEffect(() => {
//   validationDropdown()
// });
//   const [message,setMessage] = useState('s')
//   const validationDropdown = () =>{
//     if (dropdownValue === 'C') alert('ssdsdssssss')
//     console.log(methods.watch())
//   }
  // console.log(methods.watch())
  // console.log('App: ', validationDropdown)
  