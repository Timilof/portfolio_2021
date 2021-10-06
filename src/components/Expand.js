import React from 'react';

import styled from 'styled-components';

const Switch = styled.button`
    font-size: 16px;
    text-decoration: underline;
    color: #000;
    background: transparent;
    border: none;

    @media (${({ theme }) => theme.respondTo.tablet}) {
        position: absolute;
        top: 20%;
        left: 20%;
        color: #fff;
        background: #000;
        padding: 4px 8px;
        border-radius: 8px;
        text-align: center;
      }
`;

const Expanding = ({ isVisible, setVisible }) => {

    function switchWrapper(){
        setVisible(!isVisible)
        console.log(isVisible)
    }

    return (
        <Switch onClick={e => switchWrapper()}>
            {isVisible ? 'Show more' : 'Collapse'}
        </Switch>
    );
};

export default Expanding;