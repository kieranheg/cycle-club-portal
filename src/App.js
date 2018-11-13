import React, {Component} from 'react';
import NavBar from './components/navbar/NavBar'
import Member from './components/member/Member'

class App extends Component {
   render() {
      return (
         <div className="App">
            <NavBar/>
            <Member/>
         </div>
      );
   }
}

export default App;