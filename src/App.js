import './App.css';
import { useState } from 'react';
import Layout from './components/Layout';
import ListItems from './components/ListItems';
import EditItems from './components/EditItems';
import AddItem from './components/AddItem';
import Contact from './components/Contact';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [items , setItems] = useState([
    {id : 1, itemName: "Example" , description: "delete me", status: false}
  ])
  
  function deleteItem(id)
  {
        setItems(items.filter((item) => item.id !== id));
  }
  
  function addItem(item) {
    const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);
  }
  
  function updateItem(updated){
    setItems(items.map((item) => item.id === updated.id ? updated : item));
  }

  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={ <ListItems items={items} onDelete={deleteItem} /> }    />

            <Route path="/add" element={ <AddItem onAdd={addItem} /> }    />

            <Route path='/edit/:id' element ={<EditItems items = {items} onUpdate={updateItem}/>}/>

            <Route path='/Contact' element={<Contact/>} />
           
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
