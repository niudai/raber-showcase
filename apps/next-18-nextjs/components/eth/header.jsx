import { Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import Link from 'next/link';

// 在 CSS 样式对象中定义样式
const RightDiv = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    height: 43px;
    @media screen and (max-width: 30em) {
        display: none;
    }
`;

const MenuDiv = styled.span`
    @media screen and (max-width: 30em) {
        display: none;
    }
`

export const Header = () => {


    return (
        <>
            {
                (
                    <div className="h-20 border-b" style={{
                        position: 'sticky',
                        top: 0,
                        height: '4.75rem',
                        padding: '1rem 2rem',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    }}>
                        <div style={{
                            gap: '24px',
                            display: 'flex',
                            height: '40px'
                        }}>
                            <svg viewBox="0 0 115 182" className="" style={{
                                padding: '3px'
                            }}><path d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z" fill="#F0CDC2" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z" fill="#C9B3F5" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z" fill="#88AAF1" stroke="#1616B4" stroke-linejoin="round"></path><path d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z" fill="#C9B3F5" stroke="#1616B4" stroke-linejoin="round"></path><path d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z" fill="#F0CDC2" stroke="#1616B4" stroke-linejoin="round"></path><path d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z" fill="#B8FAF6" stroke="#1616B4" stroke-linejoin="round"></path></svg>
                            {/* <MenuDiv> */}
                            {
                                [
                                    {
                                        text: 'Use Ethereum',
                                        list: [
                                            'Find wallet',
                                            'Get ETH',
                                            'Decentralized Finance',
                                            'NFTs',
                                            'Use Cases',
                                            'Layer 2',
                                            'Non-Fungible Tokens',
                                        ],
                                    },
                                    {
                                        text: 'Learn',
                                        list: [
                                            'What is Ethereum',
                                            'What is Ether',
                                            'What is a Dapp',
                                            'What is a Wallet',
                                            'What is a Node',
                                        ]
                                    },
                                    {
                                        text: 'Developers',
                                        list: [
                                            `Developers' home`,
                                            'Build with Ethereum',
                                            'Tutorials',
                                            'Learn by coding',
                                        ]
                                    },
                                    {
                                        text: 'Enterprise',
                                        list: [
                                            'Mainnet Ethereum',
                                            'Private Ethereum',
                                        ]
                                    }
                                ].map((item, index) => (
                                        <Menu className="eth-menu" key={index}>
                                            <MenuButton _hover={
                                                {
                                                    color: 'var(--eth-colors-primary)',
                                                }
                                            } rightIcon={<ChevronDownIcon boxSize={6} />} >
                                                {item.text}
                                                <ChevronDownIcon boxSize={6} color={'#666666'} />
                                            </MenuButton>
                                            <MenuList>
                                                {
                                                    item.list.map((item, index) => (
                                                        <MenuItem
                                                            color='#666666'
                                                            _hover={
                                                                {
                                                                    color: 'var(--eth-colors-primary)',
                                                                }
                                                            }
                                                            key={index}>{item}</MenuItem>
                                                    ))
                                                }
                                            </MenuList>
                                        </Menu>

                                ))
                            }
                            {/* </MenuDiv> */}

                        </div>

                        {
                            <RightDiv>
                                <Box style={{
                                    padding: '0 8px',
                                    height: '100%',
                                    borderRadius: '0.25em',
                                    display: 'flex',
                                    color: '#666666',
                                    gap: '4px',
                                    alignItems: 'center',
                                }}
                                    border="1px solid #7f7f7f"
                                    _hover={{
                                        border: '2px solid var(--eth-colors-primary)',
                                    }}
                                >
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="css-vw4xmf ebbqnls1" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                    <input type="text"
                                        style={{
                                            outline: 'none'
                                        }}
                                        placeholder="Search" aria-label="Search" class="css-1w9oosq ebbqnls2" value="" />
                                </Box>
                                <svg style={{
                                    height: '24px',
                                    width: '24px'
                                }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>
                                <Link style={{
                                    display: 'flex',
                                    height: '24px',
                                    alignItems: 'center',
                                    gap: '4px'
                                }} dir="ltr" href="/en/languages/">
                                    <svg
                                        style={{
                                            height: '24px',
                                            width: '24px'
                                        }}
                                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg><span class="chakra-text css-35yjgo"><span>Languages</span></span></Link>
                            </RightDiv>
                        }


                    </div>
                )
            }
        </>
    )
}