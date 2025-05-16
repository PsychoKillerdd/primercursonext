import HeaderLanding from '@/components/landing/HeaderLanding'
import Topbanner from '@/components/landing/Topbanner'
import PrincipalContent from '@/components/landing/PrincipalContent'
import React from 'react'
import QuickTour from '@/components/landing/QuickTour'
//principal #03363e
//secundario #17494c
//terciario e4f0d3
export default function page() {
  return (
    <>
            <Topbanner />
            <HeaderLanding />
            <PrincipalContent />
            <QuickTour />
    </>

  )
}
