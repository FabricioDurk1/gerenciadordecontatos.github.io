const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let contacts = [
  { id: 1, name: 'Contato 1', email: 'contato1@example.com', phone: '123456789' },
  { id: 2, name: 'Contato 2', email: 'contato2@example.com', phone: '987654321' }
];

// Endpoint para obter todos os contatos
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Endpoint para adicionar um novo contato
app.post('/api/contacts', (req, res) => {
  const newContact = { id: Date.now(), ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Endpoint para atualizar um contato
app.put('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const updatedContact = req.body;
  contacts = contacts.map(contact => contact.id == id ? { ...contact, ...updatedContact } : contact);
  res.json(updatedContact);
});

// Endpoint para deletar um contato
app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter(contact => contact.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
