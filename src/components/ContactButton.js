import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <a href={ `mailto:${this.props.email}` }>Contact</a>
        )
    }
}

export default Contact;