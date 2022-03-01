import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }
}
