import React, { Component } from 'react';
import {Row, Col} from 'antd';
import TaskList from '../components/Tasks/TaskList';
import TaskDetail from '../components/Tasks/TaskDetail';

class TodoListPage extends Component {
    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={15}><TaskList></TaskList> </Col>
                    <Col span={7}><TaskDetail></TaskDetail></Col>
                </Row>
            </div>
        );
    }
}

export default TodoListPage;