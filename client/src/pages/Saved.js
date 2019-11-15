import React, { Component } from 'react';
import API from '../utils/API';
import { Row, Col, Alert } from 'antd';
import Results from '../components/Results';

class Saved extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            saved: []
        }
    }

    componentDidMount () {
        API
            .getBooks()
            .then(books => {
                this.setState({
                    saved: books.data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <Row>
                <Col span={14} offset={5}>
                    { this.state.saved.length > 0 && <Results books={this.state.saved} /> }
                    { this.state.saved.length === 0 && <Alert message="No saved books found" type="error" showIcon/> }
                </Col>
            </Row>
        )
    }
}

export default Saved;