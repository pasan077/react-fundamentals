import React from 'react';
import NameListItem from './NameListItem';

function NameList() {

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
  {
    "name": {
      "title": "mr",
      "first": "Jacqueline",
      "last": "Simmons"
    },

    "location": {
      "street": { "number": 9217, "name": "Rolling Green Rd" },
      "city": "Warragul",
      "state": "Tasmania",
      "country": "Australia",
      "postcode": 4012,
      "coordinates": { "latitude": "-88.8355", "longitude": "177.8865" },
      "timezone": { "offset": "0:00", "description": "Western Europe Time, London, Lisbon, Casablanca" }
    },
    
    "email":"jacqueline.simmons@example.com",

    "dob": {
      "date": "1967-05-03T06:30:22.191Z", "age": 53
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/14.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
    },
  },    
];

  return (
    <div>
      <h1>Name List</h1>
      <hr />
      <ul>
        <NameListItem
          name={nameList[0].name.first + ' ' + nameList[0].name.last}
          name={`${nameList[0].name.first} ${nameList[0].name.last}`}
          city={nameList[0].location.city}
          email={nameList[0].email}
          birthday={nameList[0].dob.date}
          avatar={nameList[0].picture.medium} />
      <NameListItem
          name={nameList[1].name.first + ' ' + nameList[1].name.last}
          name={`${nameList[1].name.first} ${nameList[1].name.last}`}
          city={nameList[1].location.city}
          email={nameList[1].email}
          birthday={nameList[1].dob.date}
          avatar={nameList[1].picture.medium} />
      </ul>
    </div>
  )
}

export default NameList;