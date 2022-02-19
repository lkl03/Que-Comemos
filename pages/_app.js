import { Router } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => nProgress.start()
    const end = () => nProgress.done()

    Router.events.on("routeChangeComplete", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return () => {
      Router.events.off("routeChangeComplete", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  })
  return <Component {...pageProps} />
}

export default MyApp
