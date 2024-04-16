import React, {Component} from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';


class ContactForm extends Component {
  constructor (props){
      super(props);
      this.state = {
        name: '',
        number: ''
      }
    }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const newName = ev.target.elements.name.value;
    const newNumber = ev.target.elements.number.value;
    console.log(newName);
      if(newName.trim() !== "" && newNumber.trim() !== 0){
        const newContact = {
        id : nanoid(),
        name : newName,
        number: newNumber
        };

        this.props.onAddContacts(newContact);

        this.setState({
            name: '',
            number:''
        }, () => {console.log("Cleared values:", this.state.name, this.state.number);
                  console.log("Cleared values:", newName, newNumber);
                })
      };
    }
    render() {
      return(
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.labelName}> Name:
            <input
              className={styles.formInput}
              type="text"
              name="name"
              placeholder='Name'
              pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={(ev) => this.setState({name: ev.target.value})}
              required
            />
          </label>
          <label className={styles.labelPhone}> Number:
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              placeholder='Phone number'
              pattern= "\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={(ev) => this.setState({number: ev.target.value})}
              required
            />
         </label>
         <button type="submit" className={styles.btnSubmit}>Add contact</button>
        </form>
      )
    }
}
  ContactForm.protoType = {
  onAddContacts: PropTypes.func.isRequired,
  };

export default ContactForm;