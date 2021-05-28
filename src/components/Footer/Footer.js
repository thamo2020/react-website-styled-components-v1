import React from 'react' ;
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './Footer.elements' ; 
//form-input contains self closing tag
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText> 
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" /> 
                        <Button fontBig>
                            Subscribe
                        </Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                      <FooterLinksItem>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to ='/sign-up'>How it works</FooterLink>
                          <FooterLink to ='/'>Testimonials</FooterLink>
                          <FooterLink to ='/'>Careers</FooterLink>
                          <FooterLink to ='/'>Investors</FooterLink>
                          <FooterLink to ='/'>Terms of Service</FooterLink>
                      </FooterLinksItem>
                      <FooterLinksItem>
                          <FooterLinkTitle>Contact Us</FooterLinkTitle>
                          <FooterLink to ='/sign-up'>How it works</FooterLink>
                          <FooterLink to ='/'>Testimonials</FooterLink>
                          <FooterLink to ='/'>Careers</FooterLink>
                          <FooterLink to ='/'>Investors</FooterLink>
                          <FooterLink to ='/'>Terms of Service</FooterLink>
                      </FooterLinksItem>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                    
                      <FooterLinksItem>
                          <FooterLinkTitle>Videos</FooterLinkTitle>
                          <FooterLink to ='/sign-up'>How it works</FooterLink>
                          <FooterLink to ='/'>Testimonials</FooterLink>
                          <FooterLink to ='/'>Careers</FooterLink>
                          <FooterLink to ='/'>Investors</FooterLink>
                          <FooterLink to ='/'>Terms of Service</FooterLink>
                      </FooterLinksItem>
                      <FooterLinksItem>
                      <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                      </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to ='/'>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>
                        ULTRA © 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                        <FaFacebook/>
                        </SocialIconLink>
                    
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                        <FaInstagram/>
                        </SocialIconLink>
                    
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                        <FaYoutube/>
                        </SocialIconLink>
                    
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Linkedin">
                        <FaLinkedin />
                        </SocialIconLink>
                    
                    </SocialIcons>
                   
                    </SocialMediaWrap>
            </SocialMedia>
         </FooterContainer>
         

    );
};

export default Footer
