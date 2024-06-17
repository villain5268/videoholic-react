import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    };

    const styles = {
        searchBar: {
            marginBottom: '20px'
        },
        input: {
            padding: '10px',
            marginRight: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.searchBar}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    placeholder="Search videos..."
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
