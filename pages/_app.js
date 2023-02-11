import AuthProvider from '@/components/AuthProvider/AuthProvider'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
    </AuthProvider>
  )
}
