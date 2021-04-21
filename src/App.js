import React from 'react';
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import user from './user.json'
import statisticalData from './statistical-data.json'
import friends from './friend-list.json'
import transactions from './transactions-history.json'

const App = () => {
  return ( <>
  <Profile {...user}/>
  <Statistics title="Upload stats" stats={statisticalData} />
  <FriendList friends={friends}/>
  <TransactionHistory items={transactions} />
  </> );
}
 
export default App;


