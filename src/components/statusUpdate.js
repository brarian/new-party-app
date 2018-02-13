/* eslint-disable */
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Switch} from 'react-foundation';
import getStatusAction from "../actions/status";


class Status extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount(){
        const party = this.props.location.state.party
        console.log(party)
        this.setState(party.statusUpdate)
    }
    
    onChange(e){
        const party = this.props.location.state.party
        axios.put(`/api/party/${party._id}`,{statusUpdate: {[e.target.name]: e.target.checked}, name: e.target.name  })
        .then((party)=>{
            console.log(party.data)
            this.setState(party.data.statusUpdate)
        }).catch((err)=> {
            console.log(err.message)
        })
    }


    render() {
        return (
            <div>
                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Week Before</h2>
                    <div className="switch ">
                        <div>Gather all the RSVPS you've recieved
                            <Switch input={{name:"rsvp", defaultChecked: this.state.rsvp}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="switch">
                        Take inventory of the tableware, cookware, and serving dishes you will need
                        <Switch input={{name: "inventory", defaultChecked: this.state.inventory}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Make a detailed shopping list and cooking schedule
                        <Switch input={{name: "grocery", defaultChecked: this.state.grocery}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange= {this.onChange}/>
                    </div>
                    <div className="switch">Create a seating plan if you'd like one
                        <Switch input={{name: "seating", defaultChecked: this.state.seating}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>  
                    </div>
                    <div className="switch">Purchase alcohol and non perishable items 
                        <Switch input={{name: "alcohol", defaultChecked: this.state.alcohol}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>Three Days Before</h2>
                    <div className="switch">Shop for food
                        <Switch input={{name: "shop", defaultChecked: this.state.shop}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Tidy up your entertaining area 
                        <Switch input={{name: "clean", defaultChecked: this.state.clean}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange }/>
                    </div>
                    <div className="switch">Choose the music
                        <Switch input={{name: "playlist", defaultChecked: this.state.playlist}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Day Before</h2>
                    <div className="switch">Set your tableware
                        <Switch input={{name: "setTable", defaultChecked: this.state.setTable}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Pick up ice 
                        <Switch input={{name: "ice", defaultChecked: this.state.ice}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Buy Flowers
                        <Switch input={{name: "flowers", defaultChecked: this.state.flowers}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

const mapStoreToProps = (store) => {
    return {
        statusData: store.statusReducer.statusData
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        status: (partyId) => dispatch(getStatusAction(partyId))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Status);