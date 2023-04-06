import React, {Component} from "react";

export default class About extends Component {
    render(){
        return(
            <section className="hero is-medium has-bg-img">
            <div className="hero-body">
            <div className="container has-text-left">
                <h1 className = 'title'>About</h1>
                <h2 className = 'subtitle'>Learn About Us</h2>
                
                        <p>
                        <p class="mb-6  has-text-weight-medium">
                        Welcome to WebVideo Inc, your number one source for all things US TV. We're dedicated to providing you the very best of US content streaming service, with an emphasis on free cost, speed and an easy to access product.              
                        Founded in 2022 by [founder name], WebVideo Inc has come a long way from its beginnings in New York. When [founder name] first started out, [his/her/their] passion for bringing US content to many different countries drove them to start their own business.
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <p class="mb-6 has-text-weight-medium">
                        Sincerely,
                        </p>

                        <strong>[founder name]</strong>
                        </p>
                </div>
            </div>
            
            </section>

        );
    }
}