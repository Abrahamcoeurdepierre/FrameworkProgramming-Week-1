import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (
            <div>
                <img src={ this.props.linkGambar } alt="Food" width='500' />
            </div>
        )
    }
}

export default Image;
