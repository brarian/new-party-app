import React from 'react';
import { withRouter } from 'react-router-dom'; 

class LogOut extends React.Component {
	// constructor(props){
	// 	super(props)
    // }
    componentDidMount(){
        window.localStorage.clear('token');
        this.props.history.push('/login');        
    }

	render() {
		return <div> Log Out</div>;
	}
}

export default (withRouter(LogOut))