// import React from 'react';
import AddSider from './components/Sider.jsx';
import AddForm from './components/Form.jsx';
import AddNav from './components/Nav.jsx';
import AddYoutube from './components/MainYoutube.jsx';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '50px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '30px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <AddNav />
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: '#108ee9'}}>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <AddSider />
        </Sider>
        <Content style={contentStyle}>
          <AddYoutube />
        </Content>
        <Sider style={siderStyle}>
          <AddForm />
        </Sider>
      </Layout>
      </Content>
      <Footer style={footerStyle}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  </Space>
);
export default App;