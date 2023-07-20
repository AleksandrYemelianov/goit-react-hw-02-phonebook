import PropTypes from 'prop-types';



import css from './ContactList.module.css'

const ContactList = ({ contactsData, deleteContact }) => {
    return (
        <ul className={css.list}>
            {contactsData.map(({name, number, id}) => (
                <li key={id} id={id} className={css.item}>
                    <p className={`${css.info} ${css.point}`}>{name}:</p>
                    <p className={css.info}>{number}</p>   
                    <button onClick={() => deleteContact(id)} className={css.btn}>Delete</button>
                </li>))}
        </ul>
    )
}

ContactList.propTypes = {
    contactsData: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;