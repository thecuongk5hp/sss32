import React, { useState } from 'react';

function AddProductForm() {
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product = {
      productCode,
      productName,
      price: price, 
      quantity: quantity
    };
    console.log(product);
  };

  return (
    <div>
      <h2>Thêm Mới Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mã sản phẩm:
          <input 
            type="text" 
            value={productCode} 
            onChange={e => setProductCode(e.target.value)} 
          />
        </label>
        <label>
          Tên sản phẩm:
          <input 
            type="text" 
            value={productName} 
            onChange={e => setProductName(e.target.value)} 
          />
        </label>
        <label>
          Giá:
          <input 
            type="number" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
          />
        </label>
        <label>
          Số lượng:
          <input 
            type="number" 
            value={quantity} 
            onChange={e => setQuantity(e.target.value)} 
          />
        </label>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default AddProductForm;