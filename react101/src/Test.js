import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'

class Test extends Component {
    render() {

        return (

            <div className="col s2 m2">
                <div className="card">
                    <div className="card-image">
                        <img src={`https://loremflickr.com/200/200/${this.props.topic}`} alt="test" />
                        <span className="card-title">{this.props.topic}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.topic}</p>
                    </div>
                    <div className="card-action">
                        <a href="he">This is a link</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Test