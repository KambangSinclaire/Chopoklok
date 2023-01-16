
import './Orders.css';

function Orders() {
  return (
    <>
      <div className="container">
        <div className='divP 1'>
          <img className='pic 1' src='./logo192.png' alt='not found' />
          <div className='desc 1' >Goods description</div>
          <div className='amount 1' >Amount</div>
        </div>
        <div className='divP 2'>
          <img className='pic 2' src='./logo192.png' alt='not found' />
          <div className='desc 2' >Goods description</div>
          <div className='amount 2' >Amount</div>
        </div>
        <div className='divP 3'>
          <img className='pic 3' src='./logo192.png' alt='not found' />
          <div className='desc 3' >Goods description</div>
          <div className='amount 3' >Amount</div>
        </div>
      </div>
      Payment Methods
      <br/>
      <select >
        <option>Select an option</option>
        <option>MTN Money</option>
        <option>Orange Money</option>
        <option>Paypal</option>
        <option>Credit Card</option>
        <option>Visa</option>
      </select>
    </>
  )
}

export default Orders;
