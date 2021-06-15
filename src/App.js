import './App.css';
import User from './components/User/User';
import userData from './data/data.json'
import { useEffect, useState } from 'react';
import Details from './components/Details/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setUsers(userData)
  }, [])

  // event handler for details
  const handleDetails = (user) => {
    console.log(user);
    const moreInfo = [...details, user];
    setDetails(moreInfo);
  }

  return (
    <div className="App">
      <h2>Client Information</h2>
      <Details details={details}></Details>
      {
        users.map(user => <User userInfo={user} handler={handleDetails}></User>)
      }
    </div>
  );
}

export default App;
