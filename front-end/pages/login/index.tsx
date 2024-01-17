import Header from '@components/header'
import UserLoginForm from '@components/users/UserLoginForm'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

export default function index() {
  return (
    <div>
      <Header/>
      <UserLoginForm/>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  }
}