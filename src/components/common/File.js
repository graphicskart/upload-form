import React, { Component } from 'react';
import {
    Col,
    Row,
    ProgressBar
} from 'react-bootstrap';

export default class File extends Component {
    render() {
        return(
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={2}><i className="far fa-image"></i></Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={12} className="details">
                                    <span>Photo.png</span>
                                    <span className="size">7.5mb</span>
                                    <i className="fas fa-times pull-right"></i>
                                </Col>
                                <Col xs={12}>
                                    <ProgressBar now={70} style={{ height: 5 }} />
                                </Col>
                                <Col xs={12} className="details">
                                    <span>70% done</span>
                                    <span className="pull-right">90KB/sec</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <hr />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}