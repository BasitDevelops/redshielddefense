import Wrapper from "@/layout/wrapper";
import "../styles/index.css";
import Footer from "@/layout/footers/footer";
import { Inter, Cuprum } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cuprum = Cuprum({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cuprum",
});

export const metadata = {
  title: {
    default:
      "Trusted Cybersecurity Solutions to Protect Your Business | RedShieldDefense",
    template: "%s | RedShieldDefense",
  },
  description:
    "Shield your business with RedShieldDefense’s data-centric security solutions, featuring AI-driven defense, penetration testing, and 24/7 threat monitoring.",
  keywords: [
    "Cybersecurity solutions",
    "Data-centric security",
    "Software security testing services",
    "Cybersecurity solutions for businesses",
    "Cybersecurity posture",
    "managed phishing simulation services",
    "cybersecurity asset management solutions",
    "Identity and access management solutions",
    "Pentest services",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RedShieldDefense</title>
        <link
          rel="icon"
          href="../../public/assets/img/logo/logo.png"
          type="image/png"
        />
        <meta
          name="google-site-verification"
          content="1UU3PZ_gdBinjxxqyQbijJt720JszWe57VlNR088VcE"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${cuprum.variable}`}
      >
        <Wrapper>
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
