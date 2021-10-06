import React from 'react';

import styled from "styled-components";

const BlurMe = styled.span`
    text-decoration: none;
    color: #000;
    position: relative;

    &::before, &::after{
        content: "${props => (props.before ? props.before : `0`)}";
        width: 100%;
        height: 100%;
        position: absolute;
        right: -5px;
        top: 11px;
        border: none;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        color: transparent;
        text-shadow: 0 0 2px rgb(0 0 0 / 80%);
        font-size: 36px;
    }
    
    &::after{
        top: 3px;
        text-shadow: 0 0 2px rgb(0 0 0 / 20%);
    }
`;

const Blur = ({ text, className }) => {
    return (
        <>
            <BlurMe before={text} className={className}>
                {text}
            </BlurMe>
        </>
    );
};

export default Blur;