import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ContactForm({ addContact, updateContact, editingContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: editingContact ? editingContact.id : Date.now(), name, email, phone };
    if (isEditing) {
      updateContact(editingContact.id, newContact);
    } else {
      addContact(newContact);
    }
    setName('');
    setEmail('');
    setPhone('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  editingContact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default ContactForm;
