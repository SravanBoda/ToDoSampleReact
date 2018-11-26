import React, { Component } from 'react';
import {Row, Col} from 'antd';

class TodoListPage extends Component {
    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={15}>To Do List</Col>
                    <Col span={7}>To Do Item Preview</Col>
                </Row>
            </div>
        );
    }
}

export default TodoListPage;