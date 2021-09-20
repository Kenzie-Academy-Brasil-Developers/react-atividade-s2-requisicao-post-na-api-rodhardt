
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios"

import { useState } from "react";

function Login({handleLogin}) {

    const formSchema = yup.object().shape({
      username: yup.string().required("*Digite seu nome de usuário"),
      password: yup
        .string()
        .required("*Digite sua senha")
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
    });
  
    const onSubmitFunction = (data) => {
      axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        handleLogin(response)
      }).catch((err) => {handleLogin()})
    };
    return (
      
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome de usuário" {...register("username")} />
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <button type="submit">Login</button>
        </form>
  
    );
  }
  
  export default Login