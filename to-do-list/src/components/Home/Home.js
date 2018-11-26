import React, { Component } from 'react';
import {Card} from 'antd';

const {Meta} = Card;

class Home extends Component {
    render() {
        return (
            <div style={{paddingTop:100, paddingLeft:700}}>
                <Card
                    hoverable
                    style={{ width: 300, height:300 }}
                    cover={<img src='http://www.cms2cms.com/wp-content/uploads/2013/08/Alinof_ToDoList.png' />}
                >
                    <Meta title="An app to make you organized" description="Use it wisely to make your day...!!!">

                    </Meta>
                </Card>
                    
            </div>
        );
    }
}

export default Home;