import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import Card from '@material-ui/core/Card';

import {setInfo} from '../actions'

 class UserDetail extends React.Component {
   

     render () {
        const {info} = this.props
        const userTable = info.map(user => <Card className='userCard' key={user.userId}> 
            <p>FullName: {user.firstName}   {user.lastName} </p> <br/>
            <p>Birthday: {` ${user.birthday}  `}</p> Age: {user.age} <br/>
            <p>Hobby: {user.hobby}</p>
            user Id: {user.userId}
         </Card>)
        return (
            <div>
                {userTable}
            </div>
        )
     }
}
const mapStateToProps = (state) => ({  
    info: state.info
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)

