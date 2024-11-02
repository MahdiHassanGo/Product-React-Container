import './CardContainer.css'

const CardContainer = ({ isActive, handleIsActiveState }) => {
  return (
    <div>
      <h1>Card Container</h1>
      <div className="flex">
        {/* Use isActive.cart to conditionally apply classes */}
        <div onClick={() => handleIsActiveState('cart')} className={`${isActive.cart ? "btn active" : "btn"}`}>Cart</div>
        <div onClick={() => handleIsActiveState('about')} className={`${!isActive.cart ? "btn active" : "btn"}`}>About</div>
      </div>
    </div>
  )
}

export default CardContainer
