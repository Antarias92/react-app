import './App.css';
import { useState } from 'react';
import Layout from './components/Layout';
import ItemForm from './components/ItemForm';
import ListItems from './components/ListItems';
import EditItems from './components/EditItems';
import AddItem from './components/AddItem';

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
  
  
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={ <ListItems items={items} onDelete={deleteItem} /> }    />

           
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
