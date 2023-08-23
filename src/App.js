import { React, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Card from './components/Card';
import Select from './components/Select';
import Button from './components/Button';


function App({object}) {
  const [inp, setInp] = useState('');
  const [opt] = useState(['Hasnain', 'Zeeshan', 'Adnan', 'Umar', 'Ali', 'Talha',]);
  const [list, setList] = useState('')

  const handle = (value) => {
    setInp(value);
  }
  const onClick = () => {
    if (inp === "Hasnain") {
        setList(object)
    } else {
        setList('not equal')
    }
  }

  return (
    <div>
        <Table list={list} show={inp} /> 
        <Input show={inp} opt={inp} />
        <Card />
        <Select setInp={handle} option={opt} />
        <Button onclick={onClick} />
    </div>
  );
}

export default App;
