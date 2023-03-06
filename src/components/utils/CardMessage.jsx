import React, { Component, Fragment } from 'react'

export class CardMessage extends Component {
    render() {
        const {classNames, message, message2 } = this.props;
        return (
            <Fragment>
                <div className={classNames}>
                    <p className="message-content">
                        {message}
                    </p>
                    <p className="message-content">
                        {message2}
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default CardMessage
