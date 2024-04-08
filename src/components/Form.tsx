import { useForm } from "react-hook-form"
import { FormSchema } from "../schemas/formSchema";

const Form = () => {

  const {resister, handleSubmit, erros} = useForm();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  }

  
  return (
    <div>Form</div>
  )
}

export default Form