import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "../styles/globals.css";
import Layout from '../components/layout'
import "@fontsource/architects-daughter"

const theme = extendTheme({
  fonts: {
    heading: `'Architects Daughter', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
