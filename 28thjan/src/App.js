// import { Component } from "react";
import React from "react";
export default class App extends React.Component {
    state = {
        Days: [
            { id: "01", Day: "Monday" },
            { id: "02", Day: "Saturday" },
            { id: "03", Day: "Sunday" },
            { id : "04", Day: "friday" },
            { id : "05", Day: "Tuesday" }
        ]
    };

    render() {
        const PartyDays = this.state.Days.length;
        const style = {
            textAlign: "center",
            color: "green"
        };
        return (
            <div style={style}>
                <h1>I am User</h1>
                <p> We party: {PartyDays} days a week </p>
            </div>
        );
    }
}
