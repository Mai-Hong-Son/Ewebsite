import React, { Component } from 'react';
import _ from 'lodash';
import './GradeThree.css';
import 'antd/dist/antd.css';
import { Row, Col, Icon } from 'antd';
import ChildOfRow from './ChildOfRow';

class RowContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isShow: false,
            maxHeight: 0,
            colorL: '#00a651',
            colorM: '#81c769',
            colorR: '#6a8d5e',
        }
    }

    ShowRowDetail = id => {
        console.warn(id);
        this.setState({
            isShow: !this.state.isShow,
        }, () => {
            if(this.state.isShow)
                this.setState({
                    maxHeight: 468,
                    colorL: '#8560a8',
                    colorM: '#ffbd0c',
                    colorR: '#a18334',
                });
            else
                this.setState({
                    maxHeight: 0,
                    colorL: '#00a651',
                    colorM: '#81c769',
                    colorR: '#6a8d5e',
                });
        });
    }

    renderChildRow(item) {
        return(
            <div style={{ width: '100%', maxHeight: 500, marginBottom: 30, position: 'relative' }} onClick={this.ShowRowDetail.bind(this, item.id)} key={item.id}>
                <Row style={{ width: '95%', height: 72, margin: 'auto', cursor: 'pointer', position: 'relative' }}>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}
                    style={{ backgroundColor: this.state.colorL, height: '100%', color: '#ffffff', fontSize: 48 }}>{item.id}</Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18}
                    style={{ backgroundColor: this.state.colorM, height: '100%', color: '#ffffff', textAlign: 'left', paddingLeft: 20 }}>
                        <span style={{ display: 'block', fontSize: 26 }}>Unit {item.id}: {item.titleEn}</span>
                        <span style={{ display: 'block', fontSize: 16, color: 'black' }}>Bài {item.id}: {item.titleVn}</span>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}
                    style={{ backgroundColor: this.state.colorR, height: '100%', color: '#ffffff', textAlign: 'right', paddingRight: 20, fontSize: 30, paddingTop: 15 }}>
                        <Icon type="down" />
                    </Col>
                </Row>
                <ChildOfRow data={item} maxHeight={this.state.maxHeight}/>
            </div>
        );
    }

    render() {
        const lessonContent = _.map(this.props.rowData, item => this.renderChildRow(item));  

        return (
            <div>
                <div style={{ width: '100%', height: 50, marginBottom: 30, textAlign: 'center', position: 'relative' }}>
                    <div style={{ width: '35%', height: 1, backgroundColor: '#ff8eb2', verticalAlign: 'middle', display: 'inline-block', position: 'relative' }}></div>
                    <div
                    style={{
                        width: 329,
                        position: 'relative',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        color: 'white',
                        textTransform: 'uppercase',
                        fontSize: 22,
                        textAlign: 'center',
                        height: 35,
                        paddingTop: 5,
                        margin: '0px 10px',
                        backgroundImage: 'url("https://www.tienganh123.com/file/learn/child/pc/ta345_new/img/eh_frame.png")'
                        }}>
                        PHẦN {this.props.id}: {this.props.name}
                    </div>
                    <div style={{ width: '35%', height: 1, backgroundColor: '#ff8eb2', verticalAlign: 'middle', display: 'inline-block', position: 'relative' }}></div>
                </div>
                {lessonContent}
            </div>
        );
    }
}

export default RowContent;
