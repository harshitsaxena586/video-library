import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "touch" });
  const onSubmit = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        credentials,
      });
      const { token, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      toast.success("welcome back");
    } catch (error) {
      const { status } = error.response;
      if (status === 404) {
        toast.error("Username does not exist please Signup");
      } else if (status === 401) {
        toast.error("Invalid password ,please try again");
      }
    }
  };
  

  return (
    <div>
      <div className="login-wrap">
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
