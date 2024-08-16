import React from "react";
import Input from "../layouts/Input";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSchema = z.object({
   email: z.string(),
   password: z.string(),
   
})

function Register() {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <Input placeholder={"Email"}/>
      <Input placeholder={"Password"}/>
      <Input placeholder={"Confirm Password"}/>
      <button className="border">Register</button>
    </div>
  );
}

export default Register;
