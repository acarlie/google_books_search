import React, { Component } from 'react';
import Results from './../components/Results';
import { Row, Col, Input, Card, Alert } from 'antd';
import API from "../utils/API";

const { Search } = Input;


class Home extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            books: []
        }
    }

    searchBooks = (val) => {
        API.findGoogleBooks(val)
            .then((res) => {
                let data = res.data.items
                const books = data.map((obj) => {
                    const { title, authors, description, previewLink, imageLinks } = obj.volumeInfo;
                    const thumbnail = imageLinks ? imageLinks.thumbnail : '/images/default_book.jpg';
                    return { 
                        title, 
                        authors, 
                        description, 
                        link: previewLink, 
                        image: thumbnail
                    };
                })
                this.setState({
                    books
                })
            })
    }

  
    render(){
        return(
            <Row gutter={[{}, 16]}>
                <Col span={14} offset={5}>
                    <Card>
                        <h2>Search Google Books</h2>
                        <Search
                            placeholder="input search text"
                            onSearch={value => this.searchBooks(value)}
                        />
                    </Card>
                </Col>
                <Col span={14} offset={5}>
                    { this.state.books.length > 0 && <Results books={this.state.books} /> }
                    { this.state.books.length === 0 && <Alert message="Search above to see book results." type="info" showIcon/> }
                </Col>
            </Row>
        )
    }
}

export default Home;