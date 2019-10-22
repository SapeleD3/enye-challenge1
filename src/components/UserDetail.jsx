import React from 'react'
import Card from '@material-ui/core/Card';

export default function UserDetail({firstName, lastName, birthday, age, hobby}) {
    return (
        <Card className='userCard'>
                <p>FullName: {firstName}   {lastName}</p> <br/>
                <p>Birthday: {` ${birthday}  `}</p> Age: {age} <br/>
                Hobby: {hobby}
        </Card>
    )
}

