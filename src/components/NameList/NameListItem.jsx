import React from 'react';
import moment from 'moment';

function NameListItem (props) {
    return (
        <div>
            <li>
                <p><img src={props.avatar}/> {props.name}</p>
                <p>City: {props.city}</p>
                <p>Email: {props.email}</p>
                <p>Birthday:{ } {new Intl.DateTimeFormat('si-lk').format(new Date(props.birthday))}</p>
                <p></p>
                <p>Birthday: {moment(props.birthday).format('DD-MM-YYYY')}</p>
            </li>
        </div>
    )
}

export default NameListItem;