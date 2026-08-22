import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react"
import { FaInstagram, FaLine } from "react-icons/fa"
import { ThemeInit } from '../.flowbite-react/init'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "福島高校文化祭 梅苑祭2026 公式サイト",
  description: "福島高校文化祭 梅苑祭2026「Sparkling!!!」の公式サイト",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-[#FCFCFC]`}
      >
        <ThemeInit />

        <Navbar fluid rounded className="sticky top-0 z-50 !bg-[#FFFFFF]">
          <NavbarBrand as={Link} href="/">
            <img
              src="logo.svg"
              className="ml-2 h-7 sm:h-11 my-1"
              alt="baiensai Logo"
            />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="projects">企画</NavbarLink>
            <NavbarLink href="info">案内</NavbarLink>
            <NavbarLink href="timetable">スケジュール</NavbarLink>
            <NavbarLink href="map">マップ</NavbarLink>
            <NavbarLink href="arch">アーチ紹介</NavbarLink>
          </NavbarCollapse>
        </Navbar>

        {children}

        <Footer container className="bg-rose-50 !rounded-none">
          <div className="w-full text-center">
            <div className="w-full justify-between flex items-center">
              <FooterBrand
                href="/"
                src="logo.svg"
                alt="baiensai Logo"
              />

              <div className="flex mt-4 sm:mt-0 sm:ml-6 gap-4">
                <a
                  href="https://www.instagram.com/baijitsu__2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-pink-600 text-2xl"
                >
                  <FaInstagram className="w-10 h-10" />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-500 text-2xl"
                >
                  <FaLine className="w-10 h-10" />
                </a> */}
              </div>
            </div>
            <FooterDivider />
            <FooterCopyright href="https://github.com/Cosmic-rare" by="Soraki Yashiro" year={2025} />
            <FooterCopyright href="https://github.com/fukyoworks" by="Sora Iida" year={2026} />
          </div>
        </Footer>
      </body>
    </html>
  )
}
