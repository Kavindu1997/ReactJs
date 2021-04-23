import React, { useState,  useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);





function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleFormChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleFormChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el1 = <AddForm />; 
ReactDOM.render(
  el1, 
  document.getElementById('cal')
);




function Counter() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("Number of clicks: " + counter);
  // });

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const el2 = <Counter />; 
ReactDOM.render(
  el2, 
  document.getElementById('counter')
);



function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
  <input type="text" value={km} onChange={handleChange} />
  <p> {km} km is {convert(km)} miles </p>
  </div>;
}

const el3 = <Converter />; 
ReactDOM.render(
  el3, 
  document.getElementById('converter')
);



function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el4 = <MyList data={arr} />; 

ReactDOM.render(
  el4, 
  document.getElementById('lists')
);