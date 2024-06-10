import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Erro ao obter contatos:', error);
      }
    }

    fetchContacts();
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact));
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const startEditing = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Contatos</h1>
      <ContactForm addContact={addContact} updateContact={updateContact} editingContact={editingContact} />
      <ContactList 
        contacts={contacts} 
        updateContact={startEditing} 
        deleteContact={deleteContact} 
      />
    </div>
  );
}

export default App;