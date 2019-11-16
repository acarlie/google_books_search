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

    handleDelete = (event) => {
        const id = event.target.value;
        API
            .deleteBook(id)
            .then(res => {
                const saved = this.state.saved.filter(el => el._id !== id);
                this.setState({
                    saved
                })
            })
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
            <Row type='flex' justify='center' gutter={[{}, 16]}>
                 <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    { this.state.saved.length > 0 && <Results books={this.state.saved} handleDelete={this.handleDelete} /> }
                    { this.state.saved.length === 0 && <Alert message="No saved books found" type="error" showIcon/> }
                </Col>
            </Row>
        )
    }
}

export default Saved;