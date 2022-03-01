import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { title, description, imageurl, newsUrl, date, author,source} = this.props;
        return (
            <div>
                <div className="card" >

                    
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex:'1',left:'90%'}}>
                            {source}
                        </span>
                    <img src={!imageurl ? "https://media.npr.org/assets/img/2021/10/04/ap21277217610162_wide-286b7d041da062cc5fb22bbb6b7ead01807fa294.jpg?s=1400" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-footer">
                            <small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
                        </div>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark my-2">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}
