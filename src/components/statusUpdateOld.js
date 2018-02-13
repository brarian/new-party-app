/* eslint-disable */
import React from 'react';
import getStatusAction from "../actions/status";
import {connect} from 'react-redux';
import {Switch} from 'react-foundation';
class Status extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            statusData: {}
        }
    }

    // componentWillMount(){
    //     this.setState(statusData)
    // }

    render() {
        return (
            <div>
                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Week Before</h2>
                    {/* <div className="switch ">
                        <input className="switch-input" id="rsvp" type="checkbox" name="rsvp" onChange={(e)=> {
                            console.log("=======================>", e.target.value);
                        }}/>
                            <label className="switch-paddle" for="rsvp">
                                <span className="show-for-sr">rsvp</span>
                                <span className="switch-active" for="false" aria-hidden="true">Yes</span>
                                <span className="switch-inactive"  for="true" aria-hidden="true">No</span>
                            </label>
                    </div> */}
                    <div className="switch ">
                        <div>Gather all the RSVPS you've recieved
                            <Switch size={"medium"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={(e) => {
                            console.log("======>", e.target.checked)}  }/>
                        </div>
                    </div>
                    <div className="switch ">
                        Take inventory of the tableware, cookware, and serving dishes you will need
                        <Switch size={"medium"} active={{ text: 'Yes' }} inactive={{ text: 'No' }} onChange={(e) => {
                            console.log("======>", e.target.checked)}  }/>
                        {/* <input className="switch-input" id="inventory" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="inventory">
                                <span className="show-for-sr">Take inventory of the tableware, cookware, and serving dishes you will need.</span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label> */}
                    </div>
                    <div className="switch">Make a detailed shopping list and cooking schedule
                        <input className="switch-input" id="grocery" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="grocery">
                                <span className="show-for-sr">Make a detailed shopping list and cooking schedule. </span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Create a seating plan if you'd like one
                        <input className="switch-input" id="seating" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="seating">
                                <span className="show-for-sr">Create a seating plan if you'd like one</span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Purchase alcohol and non perishable items 
                        <input className="switch-input" id="alcohol" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="alcohol">
                                <span className="show-for-sr">Purchase alcohol and non perishable items </span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>Three Days Before</h2>
                    <div className="switch">Shop for food
                    <input className="switch-input" id="shop" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="shop">
                                <span className="show-for-sr">Shop for food </span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Tidy up your entertaining area 
                        <input className="switch-input" id="clean" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="clean">
                                <span className="show-for-sr">Purchase alcohol and non perishable items </span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Choose the music
                        <input className="switch-input" id="playlist" type="checkbox" name="exampleSwitch"/>
                                <label className="switch-paddle" htmlFor="playlist">
                                    <span className="show-for-sr">Purchase alcohol and non perishable items </span>
                                    <span className="switch-active" aria-hidden="true">Yes</span>
                                    <span className="switch-inactive" aria-hidden="true">No</span>
                                </label>
                    </div>
                </div>
                </div>



                <div className="row">
				<div className="small-12 medium-8 columns main">
                    <h2>One Day Before</h2>
                    <div className="switch">Set your tableware
                        <input className="switch-input" id="setTable" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="setTable">
                                <span className="show-for-sr">Set your tableware</span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Pick up ice 
                        <input className="switch-input" id="ice" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="ice">
                                <span className="show-for-sr">Pick up ice </span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                    </div>
                    <div className="switch">Buy Flowers
                        <input className="switch-input" id="flowers" type="checkbox" name="exampleSwitch"/>
                            <label className="switch-paddle" htmlFor="flowers">
                                <span className="show-for-sr">Buy Flowers</span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
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