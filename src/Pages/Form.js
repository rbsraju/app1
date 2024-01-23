import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
export const Registor=()=>{

    const schema=yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(10).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null,"Password Don't Match"]).required(),
    });
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input type="text" placeholder="Name"{...register("name")}></input>
            <p>{errors.name?.message}</p>
            <input type="text" placeholder="Email"{...register("email")}></input>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Password"{...register("password")}></input>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="ConformPassword"{...register("conformPassword")}></input>
            <p>{errors.conformPassword?.message}</p>
            <button type="submit"> submit</button>
            </div>
        </form>
    );
}