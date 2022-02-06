import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

export default function Phonebook({onAddContact}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddContact(name, number)
    setName("")
    setNumber("")
  }

 return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={(e) =>{setName(e.target.value)}}
            />
          </label>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Phone</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\styles]?\(?\d{1,3}?\)?[-.\styles]?\d{1,4}[-.\styles]?\d{1,4}[-.\styles]?\d{1,9}"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={(e) =>{setNumber(e.target.value)}}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
  )
}

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}