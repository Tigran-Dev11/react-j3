import { useNavigate, useParams } from "react-router-dom";
import { useUserActions } from "../../../hooks/use-user-actions";
import { UseFetch } from "../../../hooks/use-fetch";

const EditUser = () => {
  const { "user-id": id } = useParams();
  const token =
    "4859a411b1d21f2494d65e15ec6c9f3af6b204d0e12a1ae507c88e69ea35e95b";
const navigate = useNavigate()
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };



  const [userOne] = UseFetch({ url: `/users/${id}`, options });

  const { updateUser } = useUserActions();

const editValue =(e)=>{
  e.preventDefault();
  updateUser()
navigate('/arm/user-list')
}
  return (
    <div>
      <form onSubmit={editValue} >

        <input type="text" value={id} />
        <input type="text"  defaultValue={userOne.name} />
        <input type="email" defaultValue={userOne.email} />
        <input type="text"defaultValue={userOne.gender} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditUser;
