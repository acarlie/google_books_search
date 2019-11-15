import React, { Component } from 'react';
// import Button from 'antd/es/button';
import Results from './../components/Results';

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
        API.findGoogleBooks('catching fire')
            .then((res) => {
                let data = res.data.items
                const books = data.map((obj) => {
                    const { title, authors, description, previewLink, imageLinks } = obj.volumeInfo;
                    const { thumbnail } = imageLinks;
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
            <div>
                <Results books={this.state.books} />
            </div>
        )
    }
}

export default Home;