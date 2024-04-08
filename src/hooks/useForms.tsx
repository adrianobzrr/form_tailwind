import { useForm } from "react-hook-form"
import { FormSchema, formSchema } from "../schemas/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"


export const useForms = () => {

    const {register, handleSubmit, formState: {erros}} = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    return {register, handleSubmit, erros};

}