import React, {Component} from 'react';
import './Components.css';

export class Footer extends Component {
    render() {
        return (
            <div className={"footerContainer"}>
                <div className={"longLine"}/>
                <br/>
                <div className={"footerText"}>
                    <div>© Stefan Todoran</div>
                    <div>Last Updated 2/24/22</div>
                </div>
                <br/>
            </div>
        );
    }
}