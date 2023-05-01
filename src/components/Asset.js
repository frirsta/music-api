import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';


const Asset = ({spinner, notFound}) => {
  return (
    <div>
      {spinner && <CircularProgress color="info" size="md" />}
      {notFound && <i className="fa-solid fa-magnifying-glass"/>}

    </div>
  )
}

export default Asset
