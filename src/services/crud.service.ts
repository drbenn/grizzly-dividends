import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function CrudService() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/items');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('https://api.example.com/items', { item: newItem });
      setData([...data, response.data]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const updateItem = async (itemId, updatedValue) => {
    try {
      const response = await axios.put(`https://api.example.com/items/${itemId}`, { value: updatedValue });
      const updatedData = data.map((item) => (item.id === itemId ? { ...item, value: updatedValue } : item));
      setData(updatedData);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`https://api.example.com/items/${itemId}`);
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.value}{' '}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <input
              type="text"
              value={item.value}
              onChange={(e) => updateItem(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};