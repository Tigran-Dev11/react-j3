import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { SCHEME } from "../../validation";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserActions } from "../../../hooks/use-user-actions";

const CreateUser = () => {
  const { createUser } = useUserActions();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(SCHEME.createUserScheme),
  });
  const onSubmit = (data) => {
    const newUser = {
      id: Math.floor(Math.random().toString()*1000),
      ...data,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(newUser);
    createUser();
    navigate("/lng/user-list")
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="text" placeholder="Gender" {...register("gender")} />
        {errors.gender && <p>{errors.gender.message}</p>}

        <input type="text" placeholder="Status" {...register("status")} />
        {errors.status && <p>{errors.status.message}</p>}

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
