import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import { defineStyleConfig } from '@chakra-ui/react';
import '../global.css';
import '@raber/react/src/index.css';
import { initializeApp } from '@raber/react';
import '../comps';


initializeApp({
	publicKey: 'ZXrA6EruQkdOmZXryEymXDihtSR2'
})

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'slate.500',
      color: 'slate.500',
      fontWeight: '400',
      textDecoration: 'none',
      _hover: {
        bg: 'hover',
        boxShadow: 'var(--eth-shadows-primary)',
        color: 'var(--eth-colors-primary)',
        borderColor: 'var(--eth-colors-primary)'
      }
    },
    solid: {
      textDecoration: 'none',
      bg: 'var(--eth-colors-primary)',
      _hover: {
        opacity: '0.8',
        textDecoration: 'none',
        bg: 'var(--eth-colors-primary)',
        boxShadow: 'var(--eth-shadows-primary)'
      },
      color: 'white',
      fontWeight: '400',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

const theme = extendTheme({
  colors: {
    primary: {
      default: '#1c1cff',
      100: "#1c1cff",
      200: "",
    },
  },
  components: {
    Button,
  },
})



// @ts-ignore
export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Head>
        <title>Raber Showcases</title>

        <meta name="description" content="Make Your React App Visually Editable." />
      </Head>
      <Component {...pageProps} />
      </ChakraProvider>
      </>
  )
}
