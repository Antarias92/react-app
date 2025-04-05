import './App.css';
import { useState } from 'react';
import Layout from './components/Layout';
import ListItems from './components/ListItems';
import EditItems from './components/EditItems';
import AddItem from './components/AddItem';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const initialState = {
  items: [
      {id: 1, itemName: "Example", description: "Edit, Complete (under edit), or Delete me", status: false}
  ]
};

// 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ITEMS':
          return { ...state, items: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
  const [items , setItems] = useState(store.getState().items);

  /*const [items , setItems] = useState([
    {id : 1, itemName: "Example" , description: "Edit, complete, or delete me", status: false}
  ])*/
  
  function deleteItem(id)
  {
        /*setItems(items.filter((item) => item.id !== id));*/
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }
  
  function addItem(item) {
    /*const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);*/
    const newItem = { ...item, id: Date.now() };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }
  
  function updateItem(updated){
    /*setItems(items.map((item) => item.id === updated.id ? updated : item));*/
    const updatedItems = items.map((item) => item.id === updated.id ? updated : item);
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
