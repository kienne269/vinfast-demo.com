import React from 'react';

import { TabTitle } from '../../../assets/setTitle'
const TransactionHistory = () => {

    TabTitle("Giỏ hàng của tôi VinFast Online")
    return <div className='l-9 my__account'>
      <div className='my__account__info'>
        <h1>Lịch sử giao dịch</h1>
      </div>
      <div className="my__account__body">
        <div className="container">
            <div className="row">
              <div className="l-2">Mật khẩu</div>
              <div className="l-4">
                <div className='btn-edit'>Đổi mật khẩu</div>
              </div>
              <div className="l-4">
                <div className='btn-edit'>Đổi mật khẩu</div>
              </div>
              <div className="l-2">
                <div className='btn-edit'>Đổi mật khẩu</div>
              </div>
          </div>
        </div>
      </div>
  </div>;
};

export default TransactionHistory;
