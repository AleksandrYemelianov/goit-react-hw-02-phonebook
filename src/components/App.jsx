import React, { Component } from 'react'
import { nanoid } from 'nanoid';

import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {

  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value, [name]: value })
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const nameNormalize = name.toLowerCase();
    const isExist = contacts.find(contact => nameNormalize === contact.name.toLocaleLowerCase())
   
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return
    } 

    const contact = {
      name: name,
      number: number,
      id: nanoid()
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
    
    
  }

  findContact = () => {
    const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();
    return (
      contacts.filter(({ name }) => name.toLowerCase().includes(filterNormalize))
    )
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const contactsUpdate = contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts: contactsUpdate,
    })
  }

  render() {
    const { filter } = this.state
    return (
      <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
        
          <h2>Contacts</h2>
          <Filter onChange={this.handleChange} filter={filter}></Filter>
          <ContactList contactsData={this.findContact()} deleteContact={this.deleteContact} />
        
      </div>
    )
  }
}

export default App;