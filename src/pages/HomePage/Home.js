import React from 'react'
import{homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import InfoSection from '../../components/InfoSection/InfoSection'

const Home = () => {
    return (
        <>
            <InfoSection{...homeObjOne}/>   
            <InfoSection{...homeObjTwo}/>   
            <InfoSection{...homeObjThree}/>   
            <InfoSection{...homeObjFour}/>   
        </>
    )
}

export default Home
