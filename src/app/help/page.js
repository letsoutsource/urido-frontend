'use client'
import dynamic from 'next/dynamic'

const HelplineFormSection = dynamic(
  () => import('../components/helplinePageComponents/helplineFormSection/HelplineFormSection'),
  { ssr: false, loading: () => <p>Loading form...</p> }
)
const HelplineMap = dynamic(
  () => import('../components/helplinePageComponents/helplineMap/HelplineMap'),
  { ssr: false, loading: () => <p>Loading map...</p> }
)
const metadata = {
  title: "24/7 Taxi Support | Peterborough & Luton Airport Cab Helpline",
  description:
    "Need help with taxi bookings? Contact our 24/7 helpline for Peterborough cabs, Luton Airport transfers, and nationwide minicab services. Fast response!",
  keywords: [
    "peterborough taxi helpline",
    "luton airport taxi contact",
    "24/7 cab support",
    "taxi customer service peterborough",
    "luton airport transfers help",
    "emergency taxi number",
    "gatwick taxi support",
    "heathrow cab assistance",
  ],
  openGraph: {
    title: "24/7 Taxi Helpline | Instant Support for Airport Transfers",
    description:
      "Get immediate help for Peterborough taxis, Luton Airport cabs, and nationwide minicab services.",
  },
};

const HelpLine = () => {
  return (
    <div className="helpline-page">
      <HelplineFormSection />
      <HelplineMap />
    </div>
  );
};

export default HelpLine;
