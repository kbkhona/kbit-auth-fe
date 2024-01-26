import AuthGuard from '@/components/AuthGuard'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthGuard>
      <Component {...pageProps} />
    </AuthGuard>
  )
}
