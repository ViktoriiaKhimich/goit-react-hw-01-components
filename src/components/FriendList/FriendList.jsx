import React from 'react'
import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css'
import PropTypes from 'prop-types'


const FriendList = ({friends}) => {

    const friensListElements = friends.map(({id, ...props}) => <FriendListItem key={id} {...props}/>);
    return (  
        <ul className={styles.friendList}>
            {friensListElements}
        </ul>
      );
}
 
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired)
}

export default FriendList;

