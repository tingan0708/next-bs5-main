import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import NavbarLogin from './navbar-login'
import Footer from './footer'
import { useAuth } from '@/hooks/use-auth'
import { useLoader } from '@/hooks/use-loader'
import NextBreadCrumb from '@/components/common/next-breadcrumb'
import NavbarMotion from './navbar-motion'

export default function MudanlowLayout({ title = 'Mudanlow', children }) {
  const { auth } = useAuth()
  const { loader } = useLoader()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {auth.isAuth ? <NavbarLogin /> : <Navbar />}
      <main className="flex-shrink-0 mt-3">
        <div className="container">
          <NextBreadCrumb isHomeIcon isChevron bgClass="" />
          <NavbarMotion />
          {children}
        </div>
        {/* 全域的載入動畫指示器 */}
        {loader()}
      </main>
      <Footer />
    </>
  )
}
