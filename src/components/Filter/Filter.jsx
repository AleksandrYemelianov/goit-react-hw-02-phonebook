import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
    return (
        <label className={css.label}>
            Find contacts by name :
            <input
                className={css.input}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;