import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';
import { useEffect } from 'react';
const Maincontainer = () => {
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(openMenu());
    }, []);
  return (
    <div className=''>
    <ButtonList/>
    <VideoContainer/>
    </div>
  )
}

export default Maincontainer


