import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [ users, setUsers ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState([]);
  const ref = useRef();

  const handleSearch = () => {
    // フィルタリング機能
    setSearchQuery(
      users.filter((user) => user.name.toLowerCase().includes(ref.current.value))
    )
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      }).then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="main">
        <h2>検索アプリ</h2>
        <input type='text' ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {searchQuery.map((user) => (
            <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
