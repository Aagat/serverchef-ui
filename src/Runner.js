import React, { Component } from 'react';
import { Row, Col, Button, Table } from 'antd';

class Runner extends Component {

    tasksList(props){

        const tasks = [
            {
                key: '1',
                name: 'scss',
                collection: false
            },
            {
                key: '2',
                name: 'minify',
                collection: false
            },
            {
                key: '3',
                name: 'concat',
                collection: false
            },
            {
                key: '4',
                name: 'optimize',
                collection: true
            },
            {
                key: '5',
                name: 'watch',
                collection: true
            }
        ];

        const columns = [
            {
                title: 'Tasks',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: (_,record) => {
                    if (record.collection) {
                        return (
                            <Button>Run All</Button>
                        )
                    } else {
                        return (
                            <Button>Run</Button>
                        )
                    }
                }
            }
        ];

        return (
            <Table
                pagination={false}
                size='small'
                bordered={false}
                showHeader={false}
                dataSource={tasks}
                columns={columns} />
        )

    }

    render() {
        return (
                <div>
                    <h1>Runner</h1>
                    <hr/>
                    <Row gutter={16}
                         className="runner-tasks"
                         type="flex"
                         justify="space-around">
                        <Col span={6}>
                            { this.tasksList() }
                        </Col>
                        <Col span={18}>
                            Task status here
                        </Col>
                    </Row>
                </div>
        );
    }
}

export default Runner;
