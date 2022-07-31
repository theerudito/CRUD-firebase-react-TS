import { useEffect, useRef, useState } from "react";
import "./App.css";
import { apiGET, apiPOST } from "./Components/API/APIRES";
import { DATAFIREBASE } from "./Components/DATA";

function App() {
  const [users, setUsers] = useState<any>([]);


  const getData = async () => {
    const data: any = await apiGET();
    setUsers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, []);

  const userName: any = useRef("");
  const userAge: any = useRef("");

  const posData = async (e: any) => {
    e.preventDefault();
    const dataUser: any = {
      name: userName.current.value,
      age: userAge.current.value,
    };
    await apiPOST(dataUser);
    getData();

    userName.current.value = "";
    userAge.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={posData}>
        <input ref={userName} type="text" placeholder="name" />
        <br />
        <input ref={userAge} type="text" placeholder="age" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <DATAFIREBASE users={users} />
      </div>
    </div>
  );
}

export default App;
