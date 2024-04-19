import Input from "/src/common/input";
import Button from "/src/common/button";
import { useNavigate, useParams } from "react-router-dom";
import { UseFetch } from "./../../../../hooks/use-fetch/index";
import { useUserActions } from "../../../../hooks/use-user-action";
import { useUserContext } from "../../../../providers/user-provider";

const EditUser = () => {
  const { "user-id": id } = useParams();
  const navigate = useNavigate();
  const { updateUser } = useUserActions();
  const { setUser } = useUserContext();
  const token =
    "4859a411b1d21f2494d65e15ec6c9f3af6b204d0e12a1ae507c88e69ea35e95b";

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const [userData, loading, error] = UseFetch({ url: `/user/${id}`, options });

  const editValue = async (e) => {
    e.preventDefault();
    const updatedUserData = {
      name: e.target.name.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      status: e.target.status.value,
    };
    await updateUser(id, updatedUserData);
    setUser(userData);
    console.log(updatedUserData);
    navigate("/arm/admin/user");
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <form onSubmit={editValue}>
          <Input type="text" variant="secondary" />
          <Input type="email" variant="secondary" />
          <Button title={"Save"} variant="primary" />
        </form>
      )}
    </>
  );
};

export default EditUser;
