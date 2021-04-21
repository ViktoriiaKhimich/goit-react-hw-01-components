import React from 'react'
import styles from './FriendListItem.module.css'
import PropTypes from 'prop-types'

const FriendListItem = ({isOnline, avatar, name}) => {
    return ( 
    <li className={styles.item}>
      <span className={isOnline ? styles.active : styles.inActive}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="65" />
      <p className={styles.name}>{name}</p>
    </li> );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default FriendListItem;