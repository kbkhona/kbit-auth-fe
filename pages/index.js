import Head from 'next/head'
import Image from 'next/image'
import AuthGuard from '@/components/AuthGuard'
import { Button } from 'antd'

export default function Home() {
  return (
    <>
      <Button type='primary'>Hello</Button>
      {/* <AuthGuard /> */}
    </>
  )
}
