import React, { useCallback, useState, useEffect} from 'react'
import { List, Button, Space,  Row, Col, Input, Menu} from 'antd'
import { DollarCircleOutlined, HeartOutlined, HeartTwoTone, ShoppingCartOutlined , UnorderedListOutlined } from '@ant-design/icons';

import { useSelector, useDispatch, shallowEqual} from 'react-redux';
import { LoadProductAction, searchProductAction} from '../reducers/product';
import { addCartAction } from '../reducers/cart';
const { Search } = Input;
const { SubMenu } = Menu;
const ProductList = () => {
  
  const { Products, loadProductLoading }  = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const LoadProduct = useCallback(() =>{
    dispatch(LoadProductAction(''));
  },[]);

  const sortProduct = useCallback((val) =>{
    const categoryParam = `category/${val}`
    dispatch(LoadProductAction(categoryParam));
  },[]);

  const onSearch = useCallback((e) =>{
    if(e.target.value !== ''){
      dispatch(searchProductAction(e.target.value));
    }
  },[]);

  const addCart = useCallback((item) =>{
    dispatch(addCartAction(item));
  },[]);

  useEffect(() => {
    LoadProduct();
  }, []);

    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
 
    const style = { background: '#fff', padding: '8px 20px',marginBottom: '60px'};
    return (
      <>
        <Row gutter ={[48, 48]} justify="center">
        <Col span = {6}>
        <Menu
              mode="inline"
              defaultOpenKeys={['sub1']}
              style={{ borderRight: 0 }}
              selectable ={false}
            >
                <Menu.Item key="1">
                <Search placeholder="input search text"  onChange={(e) => onSearch(e)} onClick={(e) => onSearch(e)} enterButton />
                </Menu.Item>
              <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Product">
                    <Menu.Item key="3"><div onClick ={() =>LoadProduct()}>All</div></Menu.Item>
                    <Menu.Item key="4"><div onClick ={() =>sortProduct(`men's clothing`)}>Mens</div></Menu.Item>
                    <Menu.Item key="5"><div onClick ={() =>sortProduct(`women's clothing`)}>Womens</div></Menu.Item>
                    <Menu.Item key="6"><div onClick ={() =>sortProduct('jewelery')} >jewelery</div></Menu.Item>
                    <Menu.Item key="7"><div onClick ={() =>sortProduct('electronics')} >electronics</div></Menu.Item>
                </SubMenu>
              </Menu>
        </Col> 
       
        <Col span = {18}>
       
        <List   style={style}
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                loading = {loadProductLoading}
                dataSource={Products}
                renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[
                    <IconText icon={DollarCircleOutlined} text={item.price} key="list-vertical-star-o" />,
                    me&& <Button icon={<ShoppingCartOutlined />} onClick={() =>addCart(item)}>
                    </Button>,
                    ]}
                    extra={
                    <img
                        width={150}
                        height ={200}
                        alt="logo"
                        src={item.image}
                    />
                    }
                >
                    <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
          </Col>
        </Row>
        </>
    )
}
export default ProductList
