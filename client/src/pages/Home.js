import React, { Component } from 'react';
import Button from 'antd/es/button';

import API from "../utils/API";


class Home extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            books: []
        }
    }

    componentDidMount () {
        this.getBooks();
    }

    getBooks = () => {
        API.findBooks('catching fire')
            .then((res) => {
                let data = res.data.items
                const books = data.map((obj) => {
                    const vol = obj.volumeInfo;
                    return {
                        title: vol.title,
                        author: vol.authors,
                        desc: vol.description || 'No Description Provided'
                    }
                })
                this.setState({
                    books
                })
            })
    }

  
    render(){
        return(
            <div>
                Home
                {
                    this.state.books.map((x, i) => {
                        return <div key={i}>{x.title}, {x.author}</div>
                    })
                }
                <Button> Hello </Button>
            </div>
        )
    }
}

export default Home;