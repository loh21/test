import React, {Component} from "react";

export default class FAQ extends Component {
    render(){
        return(
            <section className="hero is-medium has-bg-img">
            <div className="hero-body">
            <div className="container has-text-left">
                <h1 className = 'title'>FAQ</h1>
                <h2 className = 'subtitle'>Frequently Asked Questions</h2>
                        <p className = "has-text-weight-medium">
                            <p class="mb-5">
                            <p>Q: About the company</p>
                            <p>A: A general overview that includes the name of the company, year it was founded and its goal. For example: Company was founded in 2019, with a goal to bring better products to every home across the US.</p>
                            </p>

                            <p class="mb-5">
                            <p>Q: What payment methods do you accept?</p>
                            <p>A: Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.</p>
                            </p>

                            <p class="mb-5">
                            <p>Q: What does the warranty cover?</p>
                            <p>A: The warranty and its guidelines to your different products. If you offer various products with additional policies, it’s best to list them all out. For example: The warranty covers defects in materials. It does not cover issues caused by damage due to shipment, handling, storage, accident, impact, abuse or misuse.</p>
                            </p>

                            <p class="mb-5">
                            <p>Q: Where are you located?</p>
                            <p>Location of main headquarters, and any additional physical stores you might have. For example: Our headquarters are located in Connecticut, USA.</p>
                            </p>

                            <p class="mb-5">
                            <p>Q: How can I contact you?</p>
                            <p>A: A link to a contact us form, an email address, phone number or any communication method you might offer. For example: If you have a question, comment, suggestion or want to reach out for any other reason, you can contact our team at team@company.com, +1 123 456 7890 or through our chat assistant.</p>
                            </p>
                        </p>
                </div>
            </div>
            
            </section>

        );
    }
}
