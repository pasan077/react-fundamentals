import React from 'react';
import NameListItem from './NameListItem';

function NameList(){
    return (
        <div>
            <h1>Name List</h1>
      <hr/>
            <ul>
                <NameListItem name="Pasan Jayathilaka" course="Sycoshouts.com" />
                <NameListItem name="Uthpala Heenatigala" course="DoingITeasy.com" />
                <NameListItem name="Lahiru Perera" course="RocellTiles" />
                <NameListItem name="Prashan Palansooriya" course="onetyremart.com" />
                <NameListItem />
            </ul>
        </div>
    )
}

export default NameList;