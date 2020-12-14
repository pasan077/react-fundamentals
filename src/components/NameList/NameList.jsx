import React from 'react';
import NameListItem from './NameListItem';

function NameList(){

    const nameList = [{
        "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
     },
     "email": "brad.gibson@example.com",
     "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "picture": {
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
];

    return (
        <div>
            <h1>Name List</h1>
      <hr/>
            <ul>
                <NameListItem 
                name={nameList[0].name.first + ' ' + nameList[0].name.last} 
                name={`${nameList[0].name.first} ${nameList[0].name.last}`} 
                city={nameList[0].location.city} 
                email={nameList[0].email}
                birthday={nameList[0].dob.date}
                avatar={nameList[0].picture.medium}/>
                 </ul>
        </div> 
    )
}

export default NameList;