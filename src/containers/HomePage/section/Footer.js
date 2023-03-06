import React, { Component } from 'react';

import { connect } from 'react-redux';



class Footer extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Truong Ho With react. More information, please visit my Githup.<a target='_blank' href="https://github.com/Lam-Truong-Ho-6-6-01?tab=repositories"> &#8594; Click here &#8592; </a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
