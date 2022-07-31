import { apiDELETE, apiUPDATE } from "./API/APIRES";

export const DATAFIREBASE = (users: any) => {
  const deleteUser = async (id: any) => {
    console.log("Delete");
    await apiDELETE(id);
  };

  const upDateUser = async (id: any, age: any) => {
    console.log("Edit");
    await apiUPDATE(id, age);
  };

  return (
    <div>
      <h4>DATA FIREBASE</h4>
      {import.meta.env.VITE_BACKEND_FIREBASE}
      {users.users.map((user: any) => (
        <p key={user.id}>
          {user.name} - {user.age}
          <button onClick={() => upDateUser(user.id, user.age)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => deleteUser(user.id)}>
            <i className="fa-solid fa-trash-can"></i>{" "}
          </button>
        </p>
      ))}
    </div>
  );
};
