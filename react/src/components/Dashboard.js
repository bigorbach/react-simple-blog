import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Link to='/' className='navbar'> HOME </Link> <br/>
        { this.props.children }
      </div>
    )
  }
}

export default Dashboard;
