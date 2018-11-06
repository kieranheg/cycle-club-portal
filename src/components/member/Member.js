import React from 'react';
import MemberTable from './MemberTable.js'

class Member extends React.Component {
  render() {
    const MEMBERS = [
      {
        "createdDate": "2017-01-03T10:04:34.000+0000",
        "modifiedDate": "2018-11-05T10:04:34.000+0000",
        "id": 1,
        "firstName": "Sam",
        "lastName": "Smith",
        "age": 25},
      {
        "createdDate": "2018-10-05T10:14:34.000+0000",
        "modifiedDate": "2018-11-05T10:04:34.000+0000",
        "id": 2,
        "firstName": "John",
        "lastName": "Smitheee",
        "age": 29
      }
    ];
    return (
      <div className="Member">
        <MemberTable members={MEMBERS} />
      </div>
    );
  }
}

export default Member;