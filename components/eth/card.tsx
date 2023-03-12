import styled from '@emotion/styled';
import { Box, Comp } from '@raber/react';
import React from 'react';


const Div = styled.div`
    box-shadow: var(--eth-shadows-primary);
    width: 100%;
    height: 100%;
    &:hover {
        text-decoration: none;
        box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    }
    @media screen and (min-width: 62em) {
        min-width: 480px;
    }
    border-radius: var(--eth-radii-sm);
    border: var(--eth-borders-1px);
    border-color: var(--eth-colors-text);
`

export const EthereumCard = Comp(() => {
    return (
        <Div>
        <>
            <div style={{
                background: 'radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%)',
                boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.1)',
                minHeight: 260,
            }}>
                <Box name="image" key="image"/>
            </div>
            <div style={{
                padding: '1.5rem',
            }}>
                <Box name="content" key="content"/>
            </div>
            </>
        </Div >
    );
}, {
    category: 'Etherum',
    name: 'Card',
    description: 'A simple card',
});