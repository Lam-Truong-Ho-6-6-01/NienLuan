import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser } from '../../services/userService'
import ModalUser from './ModalUser';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })

        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })

    }
    toogleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }




    render() {
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers)
        return (
            <div className='user-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toogleUserModal}
                />
                <div className='title text-center'>
                    Manage user With TruongHo
                </div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()} >
                        <i className="fas fa-plus icon"></i>Add new users</button>

                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                    </td>


                                </tr>
                            )
                        })
                        }


                    </table>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
