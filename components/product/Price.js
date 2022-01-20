const Price = ({price, size=1}) => {
  return (
    <div className="Price_body">
      <span className="Price_currency">$</span>
      <span className="Price_main" style={{fontSize: `${size*2}em`}}>{price}</span>
      <span className="Price_sub">00</span>
      <style jsx>{`
        .Price_body{
            display: flex;
            align-items: flex-start;
        }
        
        .Price_body span{
            color: #dadada;
            font-weight: 400;
            margin-right: 0.2rem;
        }
        
        .Price_main{
            font-size: ${size*2}em;
        }
        
        .Price_currency,
        .Price_sub{
            margin-top: ${size*0.35}em;
        }
      `}</style>
    </div>
  );
};

export default Price;
