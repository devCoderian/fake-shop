import React, { useCallback, useEffect} from 'react'
import { List, Button, Space,  Row, Col} from 'antd'
import { DollarCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch} from 'react-redux';
import { LoadProductAction} from '../reducers/product';
import { addCartAction } from '../reducers/cart';
import ProductMenu from './ProductMenu';

const ProductList = () => {

  const { me } = useSelector(state => state.user);
  const { Products, loadProductLoading }  = useSelector(state => state.product);

  const dispatch = useDispatch();

  const LoadProduct = useCallback(() =>{
    dispatch(LoadProductAction(''));
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
          <ProductMenu />
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
