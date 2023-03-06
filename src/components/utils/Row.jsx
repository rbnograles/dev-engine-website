import React, { Component } from 'react'

export class Row extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="row">
                {children}
            </div>
        )
    }
}

export default Row
