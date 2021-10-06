import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import {useSpring, animated} from 'react-spring';

import Expand from "./Expand";
import Expanding from "./Expanding";

const AJob = styled.div`
    color: #000;
    width: 100%;
    padding: 40px 0;
    border: none;
    transition: .3s ease;
    margin: 20px 0 0 0;
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 40px 0 0 0;
    }
`;

const WorkImg = styled.img`
    margin: 0 auto;
    display: block;
    max-height: 450px;
    object-fit: contain;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        box-shadow: 4px 3px 10px #00000026;
    }
`;

const MetaHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Meta = styled.p`
    font-size: 12px;
    margin: 0;
    padding: 0;
`;

const SingleBlock = styled(animated.div)`
    margin: 0;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        max-width: 50%;
    }
`;

const Work = ({ item }) => {

    const [isVisible, setVisible] = useState(true);

    return (
            <AJob>
                <SingleBlock>
                    <MetaHolder>
                        <Meta>{item.title.text ? item.title.text : "Untitled"}</Meta>
                        <Meta>{item.date.text ? item.date.text : ""}</Meta>
                    </MetaHolder>
                <WorkImg src={item.cover.url} alt={item.title.text}/>
                </SingleBlock>
                <Expand isVisible={isVisible} setVisible={setVisible} />
                <Expanding isVisible={isVisible} live={item.live_link.text} repo={item.repo_link.text} content={item.brood_text} />
          </AJob> 
    );
};

export default Work;