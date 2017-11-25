import React, { Component } from 'react';
import _ from 'lodash';
import './GradeThree.css';
import 'antd/dist/antd.css';
import ChildOfRow from './ChildOfRow';

class RowContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openSectionIndex: -1,
        }
    }

    buildSections(sectionList) {
        const sections = _.map(sectionList, this.buildSection.bind(this));
        return sections;
    }

    buildSection(section, index) {
        const openStatus = (index === this.state.openSectionIndex);
        return <ChildOfRow id={index} item={section} toggleOne={this.toggleOne.bind(this)} open={openStatus} />
    }

    toggleOne(id) {
        if(this.state.openSectionIndex === id){
            this.setState({openSectionIndex: -1});
        } else {
            this.setState({openSectionIndex: id});
        }
    }

    render() {
        const sections = this.buildSections(this.props.rowData);

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
                {sections}
            </div>
        );
    }
}

export default RowContent;
