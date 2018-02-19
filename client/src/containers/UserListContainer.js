import React from 'react'
import { observer, inject } from 'mobx-react'
import UserForm from '../forms/UserForm'
import UserList from '../components/UserList'

@inject('userStore', 'searchStore') @observer
class UserListContainer extends React.Component {

    async componentDidMount() {
        this.props.searchStore.loadStoredData()
        await this.props.userStore.getUsers()
    }

    render() {
        const userStore = this.props.userStore
        //add loading and failure state
        if (this.props.isLoading) {
            return <span>Loading...</span>
        }

        if (this.props.isFailure) {
            return <span>Error loading users!</span>
        }

        return <div className="user">
            <UserForm data={{}}
                submitHandler={userStore.getUsers}
             /*   changeHandler={this.props.changeForm}
                clearHandler={this.props.clearForm} *//>
            {userStore.users && <UserList users={userStore.users} />}
        </div>;
    }
}

export default UserListContainer
