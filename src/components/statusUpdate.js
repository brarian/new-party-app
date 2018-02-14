/* eslint-disable */
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Switch} from 'react-foundation';
import updateStatusAction from "../actions/status";
import getPartyByIdAction from "../actions/getPartyById";

class Status extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount(){
        const partyId = this.props.match.params.partyId
        this.props.getPartyById(partyId);
        
    }
    
    onChange(e){
        const partyId = this.props.match.params.partyId
        this.props.UpStatus(partyId, {statusUpdate: {[e.target.name]: e.target.checked}})
    }


    render() {
        return (
            <div>{this.props.party && 
                <div>
                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Week Before</h2>
                    <div className="switch ">
                        <div>Gather all the RSVPS you've recieved
                            <Switch input={{name:"rsvp", defaultChecked: this.props.party.statusUpdate.rsvp}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="switch">
                        Take inventory of the tableware, cookware, and serving dishes you will need
                        <Switch input={{name: "inventory", defaultChecked:  this.props.party.statusUpdate.inventory}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Make a detailed shopping list and cooking schedule
                        <Switch input={{name: "grocery", defaultChecked:  this.props.party.statusUpdate.grocery}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange= {this.onChange}/>
                    </div>
                    <div className="switch">Create a seating plan if you'd like one
                        <Switch input={{name: "seating", defaultChecked:  this.props.party.statusUpdate.seating}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>  
                    </div>
                    <div className="switch">Purchase alcohol and non perishable items 
                        <Switch input={{name: "alcohol", defaultChecked:  this.props.party.statusUpdate.alcohol}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>Three Days Before</h2>
                    <div className="switch">Shop for food
                        <Switch input={{name: "shop", defaultChecked:  this.props.party.statusUpdate.shop}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Tidy up your entertaining area 
                        <Switch input={{name: "clean", defaultChecked:  this.props.party.statusUpdate.clean}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange }/>
                    </div>
                    <div className="switch">Choose the music
                        <Switch input={{name: "playlist", defaultChecked:  this.props.party.statusUpdate.playlist}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>
                
                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Day Before</h2>
                    <div className="switch">Set your tableware
                        <Switch input={{name: "setTable", defaultChecked:  this.props.party.statusUpdate.setTable}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Pick up ice 
                        <Switch input={{name: "ice", defaultChecked:  this.props.party.statusUpdate.ice}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Buy Flowers
                        <Switch input={{name: "flowers", defaultChecked:  this.props.party.statusUpdate.flowers}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>
                </div>
            }
               
            </div>
        )
    }

}

const mapStoreToProps = (store) => {
    return {
        statusData: store.partyDataReducer.statusData,
        party: store.partyDataReducer.party
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        UpStatus: (partyId, statusUpdate) => dispatch(updateStatusAction(partyId, statusUpdate)),
        getPartyById: (partyId) => dispatch(getPartyByIdAction(partyId))
    }
}

 
export default connect(mapStoreToProps, mapDispatchToProps)(Status);