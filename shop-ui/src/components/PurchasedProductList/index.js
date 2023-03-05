function PurchasedProductsList(props) {
    const { purchasedProducts } = props;
  
    return (
      <div>
        <h2>Purchased Products</h2>
        <ul>
          {purchasedProducts.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PurchasedProductsList;