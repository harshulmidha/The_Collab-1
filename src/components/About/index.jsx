import React, {useState} from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements'
import {ButtonG} from "../ButtonElements";
import {ServicesCard} from "../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../Hero/HeroElements";

const About = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonG to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                        Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </ButtonG>
                                </BtnWrap>
                            </TextWrapper>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
