import React from 'react'
import {Table} from "react-bootstrap" 
import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css'
 
const TransactionHistory = ({items}) => {
    return ( <Table striped bordered hover>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {
            items.map(item => (
                <tr key={item.id} >
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))
        }

    </tbody>
  </Table> );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
  }).isRequired)
}

export default TransactionHistory;