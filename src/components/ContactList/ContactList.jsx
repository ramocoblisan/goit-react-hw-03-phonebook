import React, { Component } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component{

render() {
  const {contacts, onDeleteContacts} = this.props;
  return (
    <div className={styles.containerContacts}>
      <ul className={styles.itemsContact}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.itemContact}>
            <span className={styles.itemName}>{`${contact.name}: ${contact.number}`}</span>
            <button className={styles.btnDelete} onClick={() => { onDeleteContacts(contact.id)}}>Delete</button>
          </li>
          ))}
      </ul>
    </div>
  )
};
}

ContactList.propTypes = {
  contacts : PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
  })
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
}
export default ContactList;