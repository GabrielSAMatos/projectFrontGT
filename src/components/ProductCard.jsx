import React from 'react';

export const shoeProduct = {
  id: 1,
  promotion: '30% OFF',
  img: 'src/Images/products/shoe-kwiss.png',
  category: 'Tênis',
  product: 'K-Swiss V8 - Masculino',
  oldValue: '$200',
  currentValue: '$100'
};

export const shoeProductStyles = {
  promotion: {
    width: '99px',
    height: '32px',
    padding: '5px 15px',
    backgroundColor: '#E7FF86',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '0.75px',
    borderRadius: '29px',
    display: 'inline-block',
    margin: '20px 0px 0px 20px'
  },
  img: {
    bottom: '41.95px',
    right: '20.23px'
  },
  category: {
    width: '35px',
    height: '24px',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0.75px',
    textAlign: 'left',
    color: '#8F8F8F',
    marginTop: '18px'
  },
  product: {
    width: '283px',
    height: '38px',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '38px',
    letterSpacing: '0.75px'
  },
  oldValue: {
    width: '63px',
    height: '38px',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '38px',
    letterSpacing: '0.75px',
    textDecoration: 'line-through',
    color: '#8F8F8F',
    marginRight: '8px'
  },
  currentValue: {
    width: '63px',
    height: '38px',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0.75px',
    color: '#1F1F1F',
    
  },

  containerItems: {
    marginBottom: '40px'
  }
  
};

export const generateProductHTML = (QntdItems) => {
  const products = Array(QntdItems).fill(shoeProduct);

  return products.map((prod, index) => (
    <div key={index} style={shoeProductStyles.containerItems}>
      <a href={`/Products/${prod.id}`}>
        <div className="containerImgItems relative">
        
          {index < 2 && (
            <span style={shoeProductStyles.promotion}>{prod.promotion}</span>
          )}
          <img style={shoeProductStyles.img} src={prod.img} alt={prod.product} className="absolute" />
        </div>
      </a>
      <a href="#tenis">
        <p style={shoeProductStyles.category}>{prod.category}</p>
      </a>
      <a href={`/Products/${prod.id}`}>
        <h4 style={shoeProductStyles.product}>{prod.product}</h4>
      </a>
      <div>
        <a href={`/Products/${prod.id}`}>
          <span style={shoeProductStyles.oldValue}>{prod.oldValue}</span>
        </a>
        <a href={`/Products/${prod.id}`}>
          <span style={shoeProductStyles.currentValue}>{prod.currentValue}</span>
        </a>
      </div>
    </div>
  ));
};
