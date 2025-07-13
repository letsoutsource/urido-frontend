'use client'
import dynamic from 'next/dynamic'
import HomePage from './components/homePageComponents/homeSection/Home'
const WhatSpecialAboutUs = dynamic(
  () => import('./components/homePageComponents/whatSpecialAboutUsSection/WhatSpecialAboutUs'),
  { ssr: false, loading: () => <p>Loading...</p> }
)
const CustomerReviewsSection = dynamic(
  () => import('./components/homePageComponents/customerReviewsSection/CustomerReviewsSection'),
  { ssr: false, loading: () => <p>Loading...</p> }
)
const HowDoesItWork = dynamic(
  () => import('./components/homePageComponents/howDoesItWorkSection/HowDoesItWork'),
  { ssr: false, loading: () => <p>Loading...</p> }
)
const VehicleListSection = dynamic(
  () => import('./components/homePageComponents/vehiclesListSection/VehicleListSection'),
  { ssr: false, loading: () => <p>Loading...</p> }
)
const HoldUpSection = dynamic(
  () => import('./components/homePageComponents/holdUpSection/HoldUpSection'),
  { ssr: false, loading: () => <p>Loading...</p> }
)

export default function Home() {
  return (
    <>
      <HomePage />
      <WhatSpecialAboutUs />
      <CustomerReviewsSection />
      <HowDoesItWork />
      <VehicleListSection />
      <HoldUpSection />
    </>
  )
}
