import React, {useCallback, useMemo} from 'react'
import { List, Divider, Row, Col, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllCartAction, removeCartAction} from '../reducers/cart';
import styled from 'styled-components';
// const { confirm } = Modal;
import ConfirmModal from './ConfirmModal'
const OrderList = () => {
    const { me } = useSelector((state) => state.user)
    const { Order }  = useSelector(state => state.cart);
 
    const dispatch = useDispatch();
   
    const ButtonWrapper = styled(Button)`
        margin: 10px;
    `;

    const cal = useMemo(() =>{
        let total =  Order.map ((order) =>{
            return order.quantity*order.price;
        }).reduce((l, r)=> l+r, 0);
        return total.toFixed(2);
    },[Order]);

    const removeCart = useCallback((item) =>{
        dispatch(removeCartAction(item));
    },[Order]);
    
    const removeAllCart = useCallback(() =>{   
        console.log('remove_all');
        dispatch(removeAllCartAction());
    },[Order]);

    const showOrderConfirm =(() =>{   
        ConfirmModal('주문하시겠습니까?',removeAllCart);
    });
    const showDeleteConfirm =(() =>{   
        ConfirmModal('장바구니를 비우시겠습니까?',removeAllCart);
    });

    const orderListFooter = () =>{
        return(
            Order.length>0&&
            <>
                <Divider></Divider>
                <Row justify="space-between">
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 4 }}>
                    총 금액: $ {cal}
                    </Col>
                    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 4}}>
                    <ButtonWrapper onClick ={() => showOrderConfirm() }>주문하기</ButtonWrapper>
                    <ButtonWrapper onClick ={() => showDeleteConfirm() }>전체 비우기</ButtonWrapper>
                    </Col>
                 
                </Row>
            </>
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
