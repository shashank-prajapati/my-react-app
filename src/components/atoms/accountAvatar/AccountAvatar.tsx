import React from 'react';
import Avatar from '@mui/material/Avatar';
type Props = {
  initials?:string;
};
function AccountAvatar(props:Props) {
  const {initials} = props;
  return <div>
      <Avatar sx={{bgcolor:'#69A6E3'}}>{initials && initials[0].toUpperCase()}</Avatar>
  </div>;
}
export default AccountAvatar;
