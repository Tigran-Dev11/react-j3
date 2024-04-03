// EditUser.js

import { useParams, useNavigate } from "react-router-dom";
import { useUserActions } from "../../../hooks/use-user-actions";
import { UseFetch } from "../../../hooks/use-fetch";
import { useUserContext } from "../../../providers/user-provider";


const EditUser = () => {
  const { "user-id": id } = useParams();
  const navigate = useNavigate();
  const { updateUser } = useUserActions();
  const { setUser } = useUserContext();
  const token = "4859a411b1d21f2494d65e15ec6c9f3af6b204d0e12a1ae507c88e69ea35e95b";

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const [userData, loading, error] = UseFetch({ url: `/users/${id}`, options });

  const editValue = async (e) => {
    e.preventDefault();
    const updatedUserData = {
      name: e.target.name.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      status: e.target.status.value
    };
    await updateUser(id, updatedUserData);
    setUser(userData); 
    console.log(updatedUserData)
    navigate("/arm/user-list");
  };

  return (
    <div>
      <h1>Edit User</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <form onSubmit={editValue}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              defaultValue={userData.name}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              defaultValue={userData.email}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              defaultValue={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              defaultValue={userData.status}
            />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
