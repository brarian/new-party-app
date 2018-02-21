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
				<div className="small-12 medium-8 columns statusInput">
                    <h2>Two Weeks Before</h2>
                    <div className="switch ">
                        <div>Send and extend invitations if you have not yet. Text or email is fine!
                            <Switch input={{name:"invites", defaultChecked: this.props.party.statusUpdate.invites}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="switch">
                        Finalize the Menu.
                        <Switch input={{name: "menu", defaultChecked:  this.props.party.statusUpdate.menu}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Line up any help you may need.
                        <Switch input={{name: "help", defaultChecked:  this.props.party.statusUpdate.help}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange= {this.onChange}/>
                    </div>
                </div>
                </div>

                <div className="row">
				<div className="small-12 medium-8 columns statusInput">
                    <h2>One Week Before</h2>
                    <div className="switch ">
                        <div>Gather all the RSVP's you've recieved and finalize your guest list. 
                            <Switch input={{name:"rsvp", defaultChecked: this.props.party.statusUpdate.rsvp}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                        </div>
                    </div>
         
                    <div className="switch">
                        Take inventory of the tableware, cookware, and serving dishes you will need, make sure you have it. 
                        <br /> If you don't have something at this point, borrow it! 
                        <Switch input={{name: "inventory", defaultChecked:  this.props.party.statusUpdate.inventory}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>

                    <br />
                    <div className="switch">Make a detailed shopping list and cooking schedule.
                        <Switch input={{name: "grocery", defaultChecked:  this.props.party.statusUpdate.grocery}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange= {this.onChange}/>
                    </div>
                    <div className="switch">Create a seating plan if you'd like one.
                        <Switch input={{name: "seating", defaultChecked:  this.props.party.statusUpdate.seating}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>  
                    </div>
                    <div className="switch">Purchase all the alcohol and any non perishable food items you need.  
                        <Switch input={{name: "alcohol", defaultChecked:  this.props.party.statusUpdate.alcohol}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns statusInput">
                    <h2>Three Days Before</h2>
                    <div className="switch">Grocery shop for all other items you need.
                        <Switch input={{name: "shop", defaultChecked:  this.props.party.statusUpdate.shop}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Tidy up your entertaining area. 
                        <Switch input={{name: "clean", defaultChecked:  this.props.party.statusUpdate.clean}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange }/>
                    </div>
                    <div className="switch">Finalize a playlist for the party. 
                        <Switch input={{name: "playlist", defaultChecked:  this.props.party.statusUpdate.playlist}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>
                
                <div className="row">
				<div className="small-12 medium-8 columns statusInput">
                    <h2>One Day Before</h2>
                    <div className="switch">Set your table.
                        <Switch input={{name: "setTable", defaultChecked:  this.props.party.statusUpdate.setTable}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Pick up ice. 
                        <Switch input={{name: "ice", defaultChecked:  this.props.party.statusUpdate.ice}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Buy Flowers.
                        <Switch input={{name: "flowers", defaultChecked:  this.props.party.statusUpdate.flowers}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Cook as much as you can the day before, it will save you a lot of time and stress tomorrow.
                        <Switch input={{name: "cookBefore", defaultChecked:  this.props.party.statusUpdate.cookBefore}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                </div>
                </div>


                <div className="row">
				<div className="small-12 medium-8 medium-offset-2 columns statusInput">
                    <h2>One Hour Before</h2>
                    <div className="switch">Set alcohol, glassware, and ice out if your guests are making their own drinks.
                        <Switch input={{name: "drinks", defaultChecked:  this.props.party.statusUpdate.drinks}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch">Light candles and set up flowers.
                        <Switch input={{name: "candles", defaultChecked:  this.props.party.statusUpdate.candles}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
                    </div>
                    <div className="switch"> Get dressed and set out appetizers for guests last! 
                        <Switch input={{name: "dressed", defaultChecked:  this.props.party.statusUpdate.dressed}} size={"small"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={this.onChange}/>
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