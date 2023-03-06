import React, { Component, Fragment } from 'react'

export class Card extends Component {
    render() {
        const { status, cardContentSub, classNames, aosDelay, cardTitle, cardContent, aosclasses } = this.props;
        return (
            <Fragment>
                <div data-aos={aosclasses} data-aos-delay={aosDelay} data-aos-easing="ease-in-out" className={classNames}>
                    <span className="time-content">{status}</span>
                    <div className="content-body">
                        <h2>{cardTitle}</h2>
                        <p className="content-paragraph">{cardContent}</p>
                        <p className="content-paragraph-sub">{cardContentSub}</p>
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

export default Card
