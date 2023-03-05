import React from 'react';
import PurchasedProductsList from  '.products-list';
function Purchased() {
  const purchasedProducts = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <PurchasedProductsList purchasedProducts={purchasedProducts} />
    </div>
  );
  }
export default Purchased;
