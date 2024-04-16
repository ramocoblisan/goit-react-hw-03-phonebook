import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '10px',
  opacity: 1,
});
export class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: ''
    }
  }

  componentDidMount(){
    const storedContacts = localStorage.getItem('savedContacts');
    if (storedContacts) {
      this.setState(JSON.parse(storedContacts));
    }
  
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev State:", prevState);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('savedContacts', JSON.stringify(this.state));
    }
  }

  hendleAddContacts = (newContact) => {
    const existingContact = this.state.contacts.filter(contact => contact.name === newContact.name);
    console.log(existingContact);
    console.log('New contact:', newContact);

    if (existingContact.length > 0) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    }
  };
  
  hendleToggleContacts = (id) => {
    this.setState((prevState)=>( {
      contacts : prevState.contacts.map((contact)=> contact.id ===id ? {...contact} : contact)
    })
  )}

  handleAddFilter = (ev) => {
    this.setState( {filter: ev.target.value})
  }
  handleFilteredContacts = () => {
    const {contacts, filter} =this.state
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  };
  handleDeletedContacts = (id) =>{
    this.setState((prevState => ({
      contacts : prevState.contacts.filter((contact) => contact.id !==id)
    })))
  }
    render() {
      const {filter} = this.state;
      return(
        <>
        <Section title="PhoneBook">
        <ContactForm onAddContacts = {this.hendleAddContacts}/>
        <FilterContacts filter = {filter} onAddFilter = {this.handleAddFilter}/>
        <ContactList contacts ={this.handleFilteredContacts()}  onDeleteContacts ={this.handleDeletedContacts}/>
        </Section>
        </>
      )
    }
  }