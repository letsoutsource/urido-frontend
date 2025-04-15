import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "uRido | Let's Ride - Your Taxi In Pocket",
  icons: {
    icon: "/logo.png",
  },
  metadata: {
    name: "uRido",
    description:
      "Reliable and affordable airport taxi transfers from Luton, Peterborough, and more. Book your taxi with Urido now!",
    keywords: `
    peterborough taxi service, luton heathrow taxi, gatwick private taxi, luton airport cab,
    east midlands airport taxi, birmingham airport transfers, taxi peterborough, luton airport taxi,
    taxi from luton airport, luton airport transfers, peterborough cab, cab to luton airport,
    taxi in luton, taxi in peterborough, luton airport taxi service, airport transfers luton,
    london luton airport transfer, luton cabs, london luton taxi, peterborough taxi numbers,
    luton taxi heathrow to luton, heathrow to luton taxi, luton airport minibus, peterborough taxi transfers,
    taxi near me, taxi near luton, luton taxi service, taxi from london to luton, airport transfer luton airport,
    taxi luton london, taxi to luton airport, heathrow taxi near me, cabs from luton airport,
    taxi in peterborough uk, taxi company peterborough, peterborough taxi cars, taxi firms in peterborough,
    luton taxi transfer, luton airport cabs and transfers, peterborough taxi company, peterborough cab service,
    london luton taxi service, luton airport taxi transfer, cab from luton airport, luton airport to heathrow,
    london luton airport taxi service, taxi near luton airport, minicab luton, cab taxi service,
    taxi cabs to luton, airport taxis peterborough, taxi near peterborough, airport service luton,
    airport taxi service luton, peterborough taxi service peterborough, cab from luton, cabs london to luton,
    cabs luton, cheap taxi to peterborough, cheap taxi peterborough, cheap cab peterborough,
    city cars peterborough taxi, city taxi peterborough, east midlands to luton airport taxi,
    luton airport cabs, london luton cabs, luton airport cab service, luton airport mini cab,
    luton airport taxi drop off, luton airport transfer service, luton cab company, luton cabs near me,
    luton minicab, mini cab in luton, mini cab luton airport, mini cab taxi, mini cab to luton airport,
    mini cabs peterborough, peterborough airport taxi, peterborough cab, peterborough cab phone number,
    peterborough cab service, peterborough cars taxi number, peterborough car taxi, peterborough city cars taxi,
    peterborough city taxi, peterborough citi cars, peterborough luton taxi, peterborough taxi quote,
    peterborough taxis, taxi cabs in peterborough, taxi from london luton, taxi from luton to luton airport,
    taxiluton peterborough, taxi luton to luton, taxi peterborough 24, taxi price peterborough,
    taxi to luton airport near me, taxi to peterborough station, affordable taxi service,
    affordable luton cab, cheap mini cab, minicab car service, cab service, premium airport transfers,
    affordable cab, cab driver, luton, taxi services luton near me, affordable taxi,
    taxi luton uk, urgent taxi, the driver taxi, affordable taxi service near me,
    affordable cab service, affordable cabs near me, cab services, taxi cab runner, taxi cabs runner
  `,
    author: "uRido",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  },
  description:
    "Reliable and affordable airport taxi transfers from Luton, Peterborough, and more. Book your taxi with Urido now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PTGEHEZ81"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PTGEHEZ81');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppButton />
        {children}
        <ToastContainer position="bottom-left" />
        <Footer />
      </body>
    </html>
  );
}
