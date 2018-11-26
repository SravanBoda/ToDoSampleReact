import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

class Home extends Component {
    render() {
        return (
            <Row type='flex' justify='center' align='middle'>
                <Col>
                    <Card
                        hoverable
                        style={{ width: 300, height: 300 }}
                        cover={<img alt="to do" src='http://www.cms2cms.com/wp-content/uploads/2013/08/Alinof_ToDoList.png' />}
                    >
                        <Meta title="An app to make you organized" description="Use it wisely to make your day...!!!">
                        </Meta>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Home;