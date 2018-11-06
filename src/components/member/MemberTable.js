import React from 'react';
import MemberRow from './MemberRow.js'

class MemberTable extends React.Component {
  render() {
    const rows = [];
    this.props.members != null && this.props.members.forEach((member) => {
      rows.push(
        <MemberRow
          member={member}
          key={member.id}
        />
      );
    });
    return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Joined</th>
        <th>Updated</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
  }
}

export default MemberTable;