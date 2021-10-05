import React, {useCallback, useMemo} from 'react'
import { List, Typography, Divider, Row, Col, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { LoadProductAction } from '../reducers/product';
import { removeAllCartAction, removeCartAction } from '../reducers/cart';
import styled from 'styled-components';
const OrderList = () => {
    const { me } = useSelector((state) => state.user)
    const { Order }  = useSelector(state => state.cart);
    console.log(Order);
    const dispatch = useDispatch();
   
    const ButtonWrapper = styled(Button)`
        margin: 10px;
    `;

    
    const cal = useMemo(() =>{
        let total =  Order.map ((order) =>{
            const { quantity } = order;
            console.log( quantity*order.price);
            return quantity*order.price;
        }).reduce((l, r)=> l+r, 0);
        return total.toFixed(2);

    },[Order]);


   

    const removeCart = useCallback((item) =>{
        // e.stopPropagation();
        dispatch(removeCartAction(item));
    },[Order]);
    
    const removeAllCart = useCallback(() =>{   
        console.log('remove_all');
        dispatch(removeAllCartAction());
    },[Order]);

    const orderListFooter = () =>{
    
        return(
            Order.length>0?
            <>
                <Divider></Divider>
                <Row justify="space-between">
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 4 }}>
                    총 금액: $ {cal}
                    </Col>
                    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 4}}>
                    <ButtonWrapper>주문하기</ButtonWrapper>
                    <ButtonWrapper onClick ={() => removeAllCart()}>전체 비우기</ButtonWrapper>
                    </Col>
                 
                </Row>
            </>
            :null
        )
    }

    return (
        <>
        <Divider orientation="middle">{me.userId}님의 주문서</Divider>
        <Row justify="center">
            <Col span = {18} >
                <List
                header={<div>주문서</div>}
                footer={orderListFooter()}
                bordered
                dataSource={Order}
                renderItem={item => (
                    <List.Item key={item.id}>
                    <Col span = {12} >
                    {item.title}
                    </Col>
                    <Col span = {2} >
                    X{item.quantity}
                    </Col>
                    <Col span = {2} >
                    ${item.price}
                    </Col>
                    <Col span = {2} >
                    <Button shape="circle" icon={<MinusCircleOutlined />} onClick = {() => removeCart(item.id)}/>
                    </Col>
                    </List.Item>
                )}
                />
        </Col>
         </Row>
        </>
    )
}

export default OrderList
