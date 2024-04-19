/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { SCHEME } from "/src/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersActions } from "../../../../libs/redux/user/user-slice";
import Input from "/src/common/input";
import Button from "/src/common/button";
import { adminRoutesHref } from "../../../../utils/constants";

const CreateUser = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const token =
    "4859a411b1d21f2494d65e15ec6c9f3af6b204d0e12a1ae507c88e69ea35e95b";
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
      id: Math.floor(Math.random().toString() * 1000),
      ...data,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(newUser);
    dispatch(usersActions.addUser);
    navigate(adminRoutesHref.user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Name"
          register={register("name")}
          variant="secondary"
        />
        <Input
          type="email"
          placeholder="Email"
          register= {register("email")}
          variant="secondary"
        />
        <Button type="submit" title="Create User" />
      </form>
    </div>
  );
};

export default CreateUser;
