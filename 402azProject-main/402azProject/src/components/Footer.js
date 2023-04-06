import React, { Component } from 'react';
import {render} from 'react-router-dom';

export default class footer extends Component {
    render(){
        return(
            <footer className="footer">
            <div className="content has-text-centered footer-padding">
                <p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>  {/* grid template for 3 footer columns each column only being 1 column width*/}
                <div className = "has-text-weight-normal">
                    <h4 className = "has-text-weight-medium">Useful Links</h4>
                    <a href = "/"><div>Contact Us</div></a>
                    <a href = "/"><div>Help</div></a>
                    <a href = "/"><div>FAQ</div></a>
                </div>
                <div className = "has-text-weight-normal">
                    <h4 className = "has-text-weight-medium">Follow Us</h4>
                    <a href = "/"><div>Facebook</div></a>
                    <a href = "/"><div>Twitter</div></a>
                    <a href = "/"><div>LinkedIn</div></a>
                </div>
                <div className = "has-text-weight-normal">
                    <h4 className = "has-text-weight-medium">Legal</h4>
                    <a href = "/"><div>Privacy</div></a>
                    <a href = "/TandC"><div>Terms and Conditions</div></a>
                </div>
                </div>
                </p>
                </div>
            </footer>
        )
    }
} 