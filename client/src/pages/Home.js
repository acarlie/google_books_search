import React, { Component } from 'react';
// import Button from 'antd/es/button';
import Results from './../components/Results';
import { Row, Col } from 'antd';

import API from "../utils/API";


class Home extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            books: []
        }
    }

    componentDidMount () {
        this.searchBooks();
    }

    searchBooks = () => {
        API.findGoogleBooks('A Game of Thrones')
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
            <Row>
                <Col span={14} offset={5}>
                    <Results books={this.state.books} />
                </Col>
            </Row>
        )
    }
}

export default Home;