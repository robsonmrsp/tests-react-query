import "./App.css";

import axios from "axios";
import { useQuery } from "react-query";

const loadUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const App = () => {
  const { isLoading, error, data } = useQuery("users", loadUsers);

  if (isLoading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>Error Loading users</h1>;
  }

  return (
    <div className="App">
      <h1>React Query</h1>
      {data.map((user) => (
        <h4 key={user.id}> {user.name}</h4>
      ))}
    </div>
  );
};

export default App;
