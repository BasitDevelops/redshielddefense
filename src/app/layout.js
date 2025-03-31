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
    default: "Home - RedShieldDefense",
    template: "%s - RedShieldDefense",
  },
  description:
    "Protect your business from cyber threats with expert cybersecurity consulting. We offer penetration testing, risk assessment, network security, compliance solutions, and 24/7 threat monitoring. Secure your data, prevent cyberattacks, and stay compliant with industry standards. Contact us today for a cybersecurity audit!",
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
