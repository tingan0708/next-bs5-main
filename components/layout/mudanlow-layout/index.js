import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import NextBreadCrumb from '@/components/common/next-breadcrumb'
import { useLoader } from '@/hooks/use-loader'

export default function MudanlowLayout({ title = 'Mudanlow', children }) {
  const { loader } = useLoader()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <main className="flex-shrink-0 mt-3">
        <div className="container">{children}</div>
        {/* 全域的載入動畫指示器 */}
        {loader()}
      </main>
      <Footer />
    </>
  )
}
