import React from 'react';

function NameListItem (props) {
    return (
        <div>
            <li>{props.name} - course - {props.course} - email - {props.email}</li>
        </div>
    )
}

export default NameListItem;