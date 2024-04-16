import React, { Component } from 'react';
import styles from './FilterContacts.module.css';
import PropTypes from 'prop-types';

class FilterContacts extends Component{
  render(){
    const {filter, onAddFilter} = this.props;
      return(
        <div className={styles.containerFilter}>
          <h3 className={styles.titleFilter}>Contacts</h3>
          <h3 className={styles.titleContact}>Find contacts by name</h3>
          <input
            className={styles.filterInput}
            type = "text"
            name = "filter"
            value={filter}
            placeholder="Contacts"
            onChange={onAddFilter}
            required
          />
        </div>
      )
    }
}

FilterContacts.propTypes = {
    filter: PropTypes.string.isRequired,
    onAddFilter: PropTypes.func.isRequired,
}

export default FilterContacts;