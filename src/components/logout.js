import React from 'react';
import { withRouter } from 'react-router-dom'; 

class LogOut extends React.Component {
	// constructor(props){
	// 	super(props)
    // }
    componentDidMount(){
        window.localStorage.clear('token');        
    }

	render() {
        this.props.history.push('/login');
		return <div> Log Out</div>;
	}
}

export default (withRouter(LogOut))