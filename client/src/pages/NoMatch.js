import React from 'react';
import { Row, Col, Card } from 'antd';

function NoMatch () {
    return(
        <Row type='flex' justify='center' gutter={[{}, 16]}>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <Card>
                    <h2>404</h2>
                    <h4>Page Not Found T_T</h4>
                </Card>
            </Col>
        </Row>
    )
}

export default NoMatch;