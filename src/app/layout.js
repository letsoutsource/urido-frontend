import "./globals.css";
import ClientProvider from "./ClientProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";

export const metadata = {
  title: "Urido | Let's Ride - Your Taxi In Pocket",
  icons: {
    icon: "/logo.png",
  },
  metadata: {
    name: "Urido",
    description: "Urido Airport Transfers & Executive Car Services",
    keywords:
      "Airport transfers, Executive cab services, petersborough, peterborough, england, uk",
    author: "Urido",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  },
  description:
    "Seamless Airport Transfers and Executive Car Services: Your Journey, Urido's Priority.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Navbar />
          <WhatsAppButton />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
