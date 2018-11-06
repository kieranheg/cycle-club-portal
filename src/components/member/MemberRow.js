import React from 'react';

class MemberRow extends React.Component {
  render() {
    const member = this.props.member;
    return (
      <tr>
        <td>{member.id}</td>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.age}</td>
        <td>{member.createdDate}</td>
        <td>{member.modifiedDate}</td>
      </tr>
    );
  }
}

export default MemberRow;