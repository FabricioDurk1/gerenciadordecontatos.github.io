import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ contacts, updateContact, deleteContact }) {
  const handleDelete = (id) => {
    deleteContact(id);
  };

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-item">
          <span>Nome: {contact.name}</span>
          <span>Email: {contact.email}</span>
          <span>Telefone: {contact.phone}</span>
          <button onClick={() => updateContact(contact)}>Editar</button>
          <button onClick={() => handleDelete(contact.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })).isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

