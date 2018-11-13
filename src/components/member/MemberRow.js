import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class MemberRow extends React.Component {
  render() {
    const member = this.props.member;
    const createDate = member.createdDate != null ? member.createdDate.substring(0,10) : "";
    const modifiedDate = member.modifiedDate != null ? member.modifiedDate.substring(0,10) : "";
    return (
      <TableRow>
        <TableCell component="th" scope="row" numeric>{member.id}</TableCell>
        <TableCell>{member.firstName}</TableCell>
        <TableCell>{member.lastName}</TableCell>
        <TableCell numeric>{member.age}</TableCell>
        <TableCell>{createDate}</TableCell>
        <TableCell>{modifiedDate}</TableCell>
      </TableRow>
    );
  }
}

MemberRow.propTypes = {
    member: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
};

export default MemberRow;