import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')

  return (
    <div className="App">
      <h1 className='heading'>Typescript</h1>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
