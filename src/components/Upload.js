import React, { Component } from 'react';
import {
    Col,
    Row,
    Button
} from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { File } from '../components';

export default class Upload extends Component {
    onDrop = (files) => {
        
    }

    render() {
        return(
            <Col xs={12} sm={{span: 6, offset: 3}} className="parent">
                <h3 className="text-center">File Upload</h3>
                <hr />
                <Row>
                    <Col xs={12} sm={5}>
                        <Row>
                            <Col xs={12} className="form-group">
                                <Dropzone onDrop={this.onDrop}>
                                    {({getRootProps, getInputProps}) => (
                                        <div {...getRootProps()}>
                                        <input {...getInputProps()} ref={c=>this.upload=c} />
                                            <div className="title text-center">
                                                <p><i className="fas fa-upload"></i></p>
                                                <p>Drag file to upload</p>
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
                            </Col>
                            <Col xs={12} className="text-center">
                                <Button variant="success" onClick={() => this.upload.click()}>Choose File</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Row>
                            <Col xs={12}>
                                <b>Uploading</b>
                            </Col>
                            <Col xs={12} className="file-container">
                                <File />
                                <File />
                                <File />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        )
    }
}