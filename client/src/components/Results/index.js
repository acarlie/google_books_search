import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'antd';
import API from '../../utils/API';
const ButtonGroup = Button.Group;

class Results extends Component {
    handleSave = (event) => {
        const book = JSON.parse(event.target.value);
        book.saved = true;
        API
            .saveBook(book)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render(){
        const { books } = this.props;
        return(
            <>
                {
                    books.map((x, i) => {
                        const { title, authors, description, image, link, _id } = x;
                        return (
                            <Row key={i} gutter={[{}, 16]}>
                                <Col span={24}>
                                    <Card 
                                        title={title} 
                                        extra={
                                            <ButtonGroup>
                                                <Button href={link} target='_blank'>View</Button>
                                                { !_id && <Button value={JSON.stringify(x)} onClick={this.handleSave}>Save</Button> }
                                                { _id && <Button value={_id} onClick={this.props.handleDelete}>Delete</Button> }
                                            </ButtonGroup>
                                        }>
                                            <Row gutter={12}>
                                                <Col span={6}>
                                                    <img src={image} alt="" style={{ width: '100%' }}/>
                                                </Col>
                                                <Col span={18}>
                                                    <h4>Author(s): {authors && authors.join()}</h4>
                                                    <p>
                                                        { description && `${description.substring(0, 255)}...` }
                                                        { !description && 'Description not found' }
                                                    </p>
                                                </Col>
                                            </Row>
                                    </Card>
                                </Col>
                            </Row>
                        ) 
                    })
                }
                
            </>
        )
    }
}

export default Results;