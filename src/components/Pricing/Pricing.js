import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { FcUpload } from "react-icons/fc";
import { FcDataProtection } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
//import {img} from '../../images/1.svg';
function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>How it works</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <FcUpload />
                </PricingCardIcon>
                <PricingCardPlan>Upload</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>Snap a clear photo and Upload with Certificate Information</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary></Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcDataProtection />
                </PricingCardIcon>
                <PricingCardPlan>Verify</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>Verify yours a true copy by your certificate provider by a Single Click</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary></Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcShare />
                </PricingCardIcon>
                <PricingCardPlan>Share</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>Share your certificates to your dream company in smarter and convinient way</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary></Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

          <PricingContainer>
           
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcDataProtection />
                </PricingCardIcon>
                <PricingCardPlan>Verify</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>Verify yours a true copy by your certificate provider by a Single Click</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary></Button>
              </PricingCardInfo>
            </PricingCard>
          
          </PricingContainer>

          <PricingContainer>
            
          <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcShare />
                </PricingCardIcon>
                <PricingCardPlan>Share</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>Share your certificates to your dream company in smarter and convinient way</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary></Button>
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>


        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
