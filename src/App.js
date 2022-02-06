import {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from "./components/Phonebook/Phonebook";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import Container from "./components/Container/Container";
  
export default function App () {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ??
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (name, number) => {
    if (onCheckContact(name)) {
      alert(`${name} is already in contacts.`)
      return
    }
    const obj = { id: uuidv4(), name, number }
    setContacts([...contacts, obj])
  }

  const onCheckContact = (value) => {
    return contacts.find(
      (el) => el.name.toUpperCase() === value.toUpperCase(),
    )
  }

  const onDeleteContacts = (id) => {
    setContacts(contacts.filter((el) => el.id !== id))
  }

  const onFiltering = contacts.filter((el) => 
    el.name.toUpperCase().includes(filter.toUpperCase()));

return (
      <div className="App">
        <Container title="Phonebook">
          <Phonebook onAddContact={onAddContact} />
        </Container>
        <Container title="Contacts">
          {contacts.length >= 2 && (
            <Filter filter={filter} onFilter={setFilter} />
          )}
          <Contacts
        listContacts={onFiltering}
            onDelete={onDeleteContacts}
          />
        </Container>
      </div>
  )
}