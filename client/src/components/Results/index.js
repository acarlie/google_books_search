import React, { Component } from 'react';
import { Card, Button } from 'antd';
const ButtonGroup = Button.Group;

class Results extends Component {
    render(){
        const { books } = this.props;
        return(
            <div>
                {
                    books.map((x, i) => {
                        const { title, authors, description, image, link } = x;
                        return (
                            <Card 
                                key={i} 
                                title={title} 
                                extra={
                                    <ButtonGroup>
                                        <Button>View</Button>
                                        <Button>Save</Button>
                                    </ButtonGroup>
                                }>
                                    <h4>Author(s): {authors.join()}</h4>
                                    <p>{description}</p>
                                    <img src={image} alt=""/>
                                    <a href={link}>Go to Google Books</a>
                            </Card>
                        ) 
                    })
                }
                
            </div>
        )
    }
}

export default Results;