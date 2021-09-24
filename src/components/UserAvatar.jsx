import styled from 'styled-components';

import React from 'react'

const UserAvatar = () => {
  return (
      <Avatar src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'/>
  )
}

const Avatar = styled.img`
  max-width: 7.5vw;
  height: auto;
  z-index: 100;
`;


export default UserAvatar
