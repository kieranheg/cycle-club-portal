import React from 'react';

class MemberRow extends React.Component {
  render() {
    const member = this.props.member;
    const createDate = member.createdDate != null ? member.createdDate.substring(0,10) : "";
    const modifiedDate = member.modifiedDate != null ? member.modifiedDate.substring(0,10) : "";
    return (
      <tr>
        <td>{member.id}</td>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.age}</td>
        <td>{createDate}</td>
        <td>{modifiedDate}</td>
      </tr>
    );
  }
}

export default MemberRow;