import React, { useCallback} from 'react'
import { LoadProductAction, searchProductAction} from '../reducers/product';
import { useDispatch, useSelector} from 'react-redux';
import { UnorderedListOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input, Menu} from 'antd'

import Link from 'next/link';

const { Search } = Input;
const { SubMenu } = Menu;

const ProductMenu = () => {
    
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

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

    return (
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
                    <Menu.Item key="3"><div onClick ={() =>LoadProduct('')}>All</div></Menu.Item>
                    <Menu.Item key="4"><div onClick ={() =>sortProduct(`men's clothing`)}>Mens</div></Menu.Item>
                    <Menu.Item key="5"><div onClick ={() =>sortProduct(`women's clothing`)}>Womens</div></Menu.Item>
                    <Menu.Item key="6"><div onClick ={() =>sortProduct('jewelery')} >jewelery</div></Menu.Item>
                    <Menu.Item key="7"><div onClick ={() =>sortProduct('electronics')} >electronics</div></Menu.Item>
                </SubMenu>
                {me &&
                <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                  <Link href ="/cart">My Cart</Link>
                </Menu.Item>
                } 
        </Menu>
    )
}

export default ProductMenu
