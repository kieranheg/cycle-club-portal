import React from 'react';
import axios from "axios";
import MemberTable from './MemberTable.js'

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      members: null
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/members", {})
      .then((res) => {
        //on success
        this.setState({members: res.data});
      })
      .catch((error) => {
        //on error
        alert("There is an error in Members API call.");
      });
  }

  render() {
    return (
      <div className="Member">
        <MemberTable members={this.state.members}/>
      </div>
    );
  }
}

export default Member;