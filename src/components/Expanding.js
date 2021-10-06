import React from 'react';
import {useSpring, animated} from 'react-spring';

import styled from 'styled-components';

import TlBWrapper from "../components/TLBWrapper";

const Links = styled.a`
    color: #000;
    text-decoration: underline;
    display: block;
    font-size: 16px;

    :first-of-type{
        margin: 10px 0 0 0;
    }
`; 

const MovingWrapper = styled(animated.div)`
    margin: 10px 0 0 0;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        margin: 10px 0px 0 30px;
        max-width: 50%;
    }
`;

const Expanding = ({ live, repo, content, isVisible }) => {

    const hidden = useSpring({config:{duration: 350},
        opacity: isVisible ? '0' : '1',
        pointerEvents: isVisible ? 'none' : 'all',
        display: isVisible ? 'none' : 'block',
    })


    return (
            <MovingWrapper style={hidden}>
                <TlBWrapper content={content} />
                {live.length > 1 ? <Links target="_blank" href={live}>link to project</Links> : ""}
                {repo.length > 1 ? <Links target="_blank" href={repo}>link to github repo</Links> : <></>}
            </MovingWrapper>
    );
};

export default Expanding;