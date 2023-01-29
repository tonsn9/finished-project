import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { FipeProvider } from '../constexts/fipe.context'
import { GlobalStyle } from '../styles/global/global'

import { defaultTheme } from '../styles/global/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FipeProvider>
        <Component {...pageProps} />
      </FipeProvider>
    </ThemeProvider>
  )
}

export default MyApp
