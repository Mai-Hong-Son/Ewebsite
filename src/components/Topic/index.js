import React, { Component } from 'react';
// import _ from 'lodash';
import '../GradeThree/GradeThree.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Vocaburaly from './Vocabulary';

// const data = require('../../dataFake/dataFake');

const { Header, Content, Footer } = Layout;

class Topic extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['3']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Grade 1</Menu.Item>
            <Menu.Item key="2">Grade 2</Menu.Item>
            <Menu.Item key="3">Grade 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Grade 3</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, textAlign: 'center' }}>
            <img src="https://www.tienganh123.com/file/learn/child/pc/ta345_new/img/eh_banner.png"
            alt="banner"
            style={{ width: '100%', height: '100%' , marginBottom: 27 }}/>
            <Vocaburaly />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Elnino Design ©2017 Created by Elnino
        </Footer>
      </Layout>
    );
  }
}

export default Topic;
