import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "touch" });

  const onSubmit = async (credentials) => {
    const response = await axios.post("http://localhost:3000/users/signup", {
      credentials,
    });
    console.log(response);
  };
  return (
    <div>
      <div className="login-wrap">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="userName"
            className="input-primary"
            {...register("userName")}
          />

          <input
            className="input-primary"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <div>
            <button className="button-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
