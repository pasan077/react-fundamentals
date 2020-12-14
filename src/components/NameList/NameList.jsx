import React from 'react';
import NameListItem from './NameListItem';

function NameList(){
    return (
        <div>
            <h1>Name List</h1>
      <hr/>
            <ul>
                <NameListItem name="Pasan Jayathilaka" course="Sycoshouts.com" email="pasan4all@gmail.com"/>
                <NameListItem name="Uthpala Heenatigala" course="DoingITeasy.com" email="uheenatigala@gmail.com"/>
                <NameListItem name="Lahiru Perera" course="RocellTiles" email="Lahiru.p@gmail.com"/>
                <NameListItem name="Prashan Palansooriya" course="onetyremart.com" email="prashanp@gmail.com"/>
                <NameListItem name="Kasun Lakmal" course="business entreprenuer" email="Kasun.lakmal@gmail.com"/>
            </ul>
        </div>
    )
}

export default NameList;