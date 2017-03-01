import React, { Component } from 'react';
import { Row, Col, Card, Badge, Icon, Table, Button } from 'antd';

class Overview extends Component {
    serviceStatus(props) {
        return (
            <Row gutter={16}
                 className="status-cards"
                 type="flex"
                 justify="space-around">
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="play-circle"/>
                        <div className="service-info">
                            <h2>Task Runner</h2>
                            <Badge status="success" text="Running" />
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="cloud-download"/>
                        <div className="service-info">
                            <h2>Web Server</h2>
                            <Badge status="success" text="Running" />
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="code-o"/>
                        <div className="service-info">
                            <h2>PHP Runtime</h2>
                            <Badge status="success" text="Running" />
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="hdd"/>
                        <div className="service-info">
                            <h2>MySQL Server</h2>
                            <Badge status="success" text="Running" />
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="lock"/>
                        <div className="service-info">
                            <h2>Local SSL</h2>
                            <Badge status="default" text="Not Configured" />
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <Card className="status-card">
                        <Icon className="service-icon" type="mail"/>
                        <div className="service-info">
                            <h2>Local Inbox</h2>
                            <Badge status="success" text="Listening" />
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }

    overviewTable(props) {

        const overviewTopics = [
            {
                key: '1',
                text: 'Project Name',
                disp: 'ServerChef Website',
            },
            {
                key: '2',
                text: 'Website Address',
                action: 'link',
                href: '//serverchef.dev',
                prompt: 'Open Website'
            },
            {
                key: '3',
                text: 'Admin Interface',
                action: 'link',
                href: '//serverchef.dev/admin',
                prompt: 'Open Admin'
            },
            {
                key: '4',
                text: 'Project Location',
                disp: '~/websites/serverchef'
            },
            {
                key: '5',
                text: 'Runtime Environment',
                action: 'link',
                href: '#',
                prompt: 'View Details'
            }
        ];

        const columns = [
            {
                title: 'Topic',
                dataIndex: 'text',
                key: 'text'
            },
            {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: (_, record) => {
                    if ( record.action === 'link') {
                        return (
                            <a href={record.href}>
                                <Button> {record.prompt} </Button>
                            </a>
                        );
                    } else {
                        return <div>{record.disp}</div>;
                    }
                }
            }
        ];
        return (
            <Table
                pagination={false}
                bordered={false}
                showHeader={false}
                dataSource={overviewTopics}
                columns={columns} />

        );
    }

    render() {
        return (
                <div>
                    <h1>Overview</h1>
                    <hr/>
                    { this.serviceStatus() }
                    { this.overviewTable() }
                </div>
        );
    }
}

export default Overview;
