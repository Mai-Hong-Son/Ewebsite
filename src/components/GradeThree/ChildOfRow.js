import React, { Component } from 'react';
import _ from 'lodash';
import './GradeThree.css';
import 'antd/dist/antd.css';
import { Row, Col, Icon } from 'antd';

class ChildOfRow extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isShow: false,
            maxHeight: 0,
            openSectionIndex: -1,
            colorL: '#00a651',
            colorM: '#81c769',
            colorR: '#6a8d5e',
        }
    }

    toggleContent() {
        this.props.toggleOne(this.props.id);
    }

    getHeight() {
        if(this.props.open){
            return 500;
        } else {
            return 0;
        }
    }

    renderContentVoca( vocaburaly, index ) {
        const voca = _.map(vocaburaly.voca, item => <div style={{ display: 'inline-block' }}>{item.name + ','}</div>);

        return(
            <div className='ehmld_name'>
                <div className='ehmldn_icon'>

                </div>
                <div className='ehmldn_text'>
                    <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                        <div className="ehmldnt_up">{vocaburaly.name}</div>
                    </a>
                    {<div className="ehmldnt_down">(Từ vựng: {voca})</div>}
                </div>
            </div>
        );
    }

    renderContentLec( lecture, index ) {
        return(
            <div className='ehmld_name'>
                <div className='ehmldn_icon'>

                </div>
                <div className='ehmldn_text'>
                    <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                        <div className="ehmldnt_up">{lecture.name}</div>
                    </a>
                </div>
            </div>
        );
    }

    renderContentPhonics( phonics, index ) {
        return(
            <div className='ehmld_name'>
                <div className='ehmldn_icon'>

                </div>
                <div className='ehmldn_text'>
                    <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                        <div className="ehmldnt_up">Phát âm chữ "{phonics.name}"</div>
                    </a>
                </div>
            </div>
        );
    }

    render() {
        const { item } = this.props;
        const { content: { vocaburaly, lecture, phonics } } = item;
        const renderCtVoca = _.map(vocaburaly, this.renderContentVoca.bind(this));
        const renderCtLec = _.map(lecture, this.renderContentLec.bind(this));
        const renderCtPhonics = _.map(phonics, this.renderContentPhonics.bind(this));

        return (
            <div style={{ width: '100%', maxHeight: 539, marginBottom: 43, position: 'relative' }} onClick={this.toggleContent.bind(this)}>
                <Row style={{ width: '95%', height: 72, margin: 'auto', cursor: 'pointer', position: 'relative' }}>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}
                    style={{ backgroundColor: !this.props.open ? this.state.colorL : '#8560a8', height: '100%', color: '#ffffff', fontSize: 48 }}>{item.id}</Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18}
                    style={{ backgroundColor: !this.props.open ? this.state.colorM : '#ffbd0c', height: '100%', color: '#ffffff', textAlign: 'left', paddingLeft: 20 }}>
                        <span style={{ display: 'block', fontSize: 26 }}>Unit {item.id}: {item.titleEn}</span>
                        <span style={{ display: 'block', fontSize: 16, color: 'black' }}>Bài {item.id}: {item.titleVn}</span>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}
                    style={{ backgroundColor: !this.props.open ? this.state.colorR : '#a18334', height: '100%', color: '#ffffff', textAlign: 'right', paddingRight: 20, fontSize: 30, paddingTop: 15 }}>
                        <Icon type="down" />
                    </Col>
                </Row>
                <div className='ehmld_box' style={{ maxHeight: this.getHeight(), transition: 'all 0.5s linear' }}>
                    <div className='wrap_child_box'>
                        <div className='ehmld_icon'></div>
                        <div className='ehmld_arcontent'>
                            <div className='ehmld_tit'>
                                VOCABULARY - TỪ VỰNG
                            </div>
                            {renderCtVoca}
                        </div>
                    </div>
                    <div className='ehmld_area_lesson' style={{ paddingTop: 20, paddingBottom: 20 , textAlign: 'left', width: '100%' }}>
                        <div className='ehmld_icon'></div>
                        <div className='ehmld_arcontent'>
                            <div className='ehmld_tit'>
                                LECTURE - BÀI GIẢNG
                            </div>
                            {renderCtLec}
                            <div className='ehmld_name'>
                                <div className='ehmldn_icon ehmldn_icon_pen'>

                                </div>
                                <div className='ehmldn_text'>
                                <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                                    <div className="ehmldnt_up">Luyện tập tổng hợp bài giảng 1 & 2</div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ehmld_area_phonic' style={{ paddingTop: 20, textAlign: 'left', width: '100%', marginBottom: 25 }}>
                        <div className='ehmld_icon'></div>
                        <div className='ehmld_arcontent'>
                            <div className='ehmld_tit'>
                                PHONICS - HỌC VỀ ÂM
                            </div>
                            {renderCtPhonics}
                            <div className='ehmld_name'>
                                <div className='ehmldn_icon ehmldn_icon_pen'>

                                </div>
                                <div className='ehmldn_text'>
                                <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                                    <div className="ehmldnt_up">Bài tập phát âm chữ "b" và chữ "h"</div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ehml_verline' style={{ height: '90%', left: 63, backgroundColor: '#8560a8', width: 2 , position: 'absolute', top: -1 }}></div>
                </div>
            </div>
        );
  }
}

export default ChildOfRow;
