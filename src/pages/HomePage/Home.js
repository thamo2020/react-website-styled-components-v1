import React from 'react'
import{homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import {InfoSection,Pricing }from '../../components';

const Home = () => {
    return (
        <>
        <h1>Kasun Hasanga</h1>
            <InfoSection{...homeObjOne}/>   
            <InfoSection{...homeObjTwo}/>   
            <InfoSection{...homeObjThree}/>  
            <Pricing /> 
            <InfoSection{...homeObjFour}/>   
        </>
    )
}

export default Home
