import React,{useRef, useState,useMemo} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

import { Layout, Menu, PageHeader, Button} from 'antd';
import { UnorderedListOutlined, HomeOutlined, ShoppingCartOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import MenuHeader from './MenuHeader';
import LoginFrom from './LoginForm';
import Link from 'next/link';


const MenuLayout = ({ children }) => {

  const {me}  =  useSelector((state) => state.user);

  return (
        <Layout>
           <PageHeader
            ghost={false}
            title={<Button size='large' shape="round"><Link href ="/">FAKE-SHOP</Link></Button>} 
            subTitle="by devCoderian"
            extra={me?<MenuHeader/>:<LoginFrom/>}
            ></PageHeader>
        <Layout>
      
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: '100vh',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

MenuLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MenuLayout;
