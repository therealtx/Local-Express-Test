import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import styles from './index.module.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface IPublicLayoutProps {
  children: React.ReactElement
}

const PublicLayout = ({ children }: IPublicLayoutProps) => {
  return (
    <Layout>
      <Header className="header">
        <div className={styles.logo}/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/second-page">Second Page</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout className={styles.fullHeight}>
        <Sider width={200} className={styles["site-layout-background"]}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 16,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PublicLayout;
