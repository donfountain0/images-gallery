import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value)
}

const App = () => {
  const [word, setWord] = useState('')
  return (
    <div>
      <Header title="Images Gallery"> </Header>
      <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
