import "./globals.css";
import Link from "next/link";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Addis Eats | Ethiopian Favorites and More", template: "%s | Addis Eats" },
  description: "Explore Ethiopian favorites and comforting international dishes at Addis Eats.",
  openGraph: { type: "website", siteName: "Addis Eats", title: "Addis Eats | Ethiopian Favorites and More", description: "Explore Ethiopian favorites and comforting international dishes at Addis Eats.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Addis Eats restaurant" }] },
  twitter: { card: "summary_large_image", title: "Addis Eats | Ethiopian Favorites and More", description: "Explore Ethiopian favorites and comforting international dishes at Addis Eats.", images: ["/opengraph-image"] }
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><header className="site-header"><Link className="brand" href="/">Addis Eats</Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/menu">Menu</Link><Link href="/cart">Cart</Link><Link href="/checkout">Checkout</Link></nav></header>{children}<footer className="site-footer">© {new Date().getFullYear()} Addis Eats · Made with care</footer></body></html>;
}
