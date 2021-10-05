import OrderList from '../components/OrderList'
import MenuLayout from '../components/MenuLayout'
import { useSelector } from 'react-redux';

const cart = () => {
 
   const {me}  =  useSelector((state) => state.user);

     return(
        <MenuLayout>
           {me ?  <OrderList/>:<div>로그인 후 이용해주세요.</div>}
        </MenuLayout>
     )
}

export default cart
