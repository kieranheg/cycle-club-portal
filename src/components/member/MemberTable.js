import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MemberRow from './MemberRow.js'


const CustomTableHeaderCell = withStyles(theme => ({
   head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   body: {
      fontSize: 14,
   },
}))(TableCell);

const styles = theme => ({
   root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
   },
   table: {
      minWidth: 700,
   },
});


function MemberTable(props) {
   const {classes} = props;
   const rows = [];
   props.members != null && props.members.forEach((member) => {
      rows.push(
         <MemberRow member={member} key={member.id}/>
      );
   });
   return (
      <Paper className={classes.root}>
         <Table className={classes.table}>
            <TableHead>
               <TableRow>
                  <CustomTableHeaderCell numeric>Id</CustomTableHeaderCell>
                  <CustomTableHeaderCell>First Name</CustomTableHeaderCell>
                  <CustomTableHeaderCell>Last Name</CustomTableHeaderCell>
                  <CustomTableHeaderCell numeric>Age</CustomTableHeaderCell>
                  <CustomTableHeaderCell>Joined</CustomTableHeaderCell>
                  <CustomTableHeaderCell>Updated</CustomTableHeaderCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows}
            </TableBody>
         </Table>
      </Paper>
   );
}

MemberTable.propTypes = {
   classes: PropTypes.object.isRequired,
   members: PropTypes.array.isRequired,
};

export default withStyles(styles)(MemberTable);