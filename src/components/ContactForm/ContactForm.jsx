import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    static propTypes = {
         addContact: PropTypes.func.isRequired
     };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value, [name]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const data = {
            name,
            number,
        }
        this.props.addContact(data)
        this.reset();
    }

    reset = () => {
    this.setState({
      name: '',
      number: '',
    })
    }

    render() {
        const { handleSubmit, handleChange } = this;
        const { name, number } = this.state;
        const idNameInput = nanoid();
        const idNumberInput = nanoid()

        return (
            <div className={css.formWrap}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <label htmlFor={idNameInput} className={css.label}>Name</label>
                    <input
                    className={css.input}
                    id={idNameInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    <label htmlFor={idNumberInput} className={css.label}>Number</label>
                    <input
                    className={css.input}
                    id={idNumberInput}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <button type="submit" className={css.btn}>Add contact</button>
                </form>
        </div>
        )
    }
}

// ContactForm.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }
