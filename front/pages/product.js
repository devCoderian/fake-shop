import MenuLayout from '../components/MenuLayout'
import ProductList from '../components/ProductList'
import { Divider } from 'antd';

const product = () => {
  return (
      <MenuLayout>
           <Divider orientation="left" style={{marginBottom: '60px'}}>상품 리스트</Divider>
        <ProductList />
      </MenuLayout>
  )
}

export default product
