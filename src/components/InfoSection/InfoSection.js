import React from 'react';
import {Link} from 'react-router-dom'
import { Container,Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const fadeLeft={
    hidden:{opacity:0, x:-100},
    visible :{opacity:1,x:0}
};

const fadeBottom={
    hidden:{opacity:0, y:-100},
    visible :{opacity:1,y:0}
};
const fadeRight={
    hidden:{opacity:0, x:100},
    visible :{opacity:1,x:0}
};



function InfoSection ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    lightText,
    topLine,
    img,
    alt,
    start,
})  {
    return (
        <>

        <InfoSec lightBg={lightBg} >
            <Container>
                <InfoRow imgStart = {imgStart}>
                    <InfoColumn>
                        <TextWrapper
                        variants = {fadeRight}
                        initial='hidden'
                        animate='visible'
                        transition={{duration:1}}
                        >
                                <TopLine lightTopLine={lightTopLine}
                                
                                >  {topLine}  </TopLine>
                                <Heading lightText={lightText}>  {headline}  </Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>  {description}  </Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img
                            
                            src={img} alt={alt}
                            variants = {fadeBottom}
                            initial='hidden'
                            animate='visible'
                            transition={{duration:1}}
                             />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
            
        </>
    ); 
}

export default InfoSection
