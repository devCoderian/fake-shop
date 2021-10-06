import React from 'react'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const ConfirmModal =((title, okFunction) =>{   
    confirm({
        title,
        icon: <ExclamationCircleOutlined />,
        onOk() {
            okFunction();
        },
        onCancel() {
          console.log('Cancel');
        },
      });
});

export default ConfirmModal
