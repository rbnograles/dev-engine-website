import React, { Component, Fragment } from 'react'

export class CardPricing extends Component {
    render() {
        const { apps, users, allowable, classNames, aosDelay, cardTitle, cardContent, aosclasses } = this.props;
        return (
            <Fragment>
                <div data-aos={aosclasses} data-aos-delay={aosDelay} data-aos-easing="ease-in-out" className={classNames}>
                    <div className="content-body">
                        {cardTitle}
                        <p className="content-paragraph">{cardContent}</p>
                        <div className="content-paragraph-sub">
                            <ul className="list">
                                <li>
                                    <span>{apps}</span> apps
                                </li>
                                <li>
                                    <span>{users}</span> users
                                </li>
                                    <div className="line"></div>
                                <li>
                                    24/7 Support
                                </li>
                                <li className={`${allowable[0] === 2 ?  '': 'text-muted'}`}>
                                    School-Specific Build
                                </li>
                                <li className={`${allowable[1] === 3 ?  '': 'text-muted'}`}>
                                    Free Data Transfer
                                </li>
                                <li className={`${allowable[2] === 4 ?  '': 'text-muted'}`}>
                                    iOS and Android App
                                </li>
                                <li className={`${allowable[3] === 5 ?  '': 'text-muted'}`}>
                                    Unlimited Storage & Bandwidth
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="stack-btn-card">
                        Subscribe
                    </button>
                    <div className="overlay"></div>
                </div>
            </Fragment>
        )
    }
}

export default CardPricing
