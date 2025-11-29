
const Price = ({currency,price}) => {
    
    return (
        
           <div className="bg-purple-200 w-11 px-1 rounded-sm">
              {currency}
              <span className="pl-1">{price}</span>
            </div>
        
    )
}

export default Price;