"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/Header/Header";
import { Menu } from "@/Menu/Menu";
import { Footer } from "@/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";
import { appstore } from "@/routes/redux/appStore";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const menuItems = [
    {
      id:'home',
      path:'home',
      text:'Home'
    },
    {
      id:'about',
      path:'about',
      text:'About'
    },
    {
      id:'contact',
      path:'contact',
      text:'Contact'
    },
    {
      id:'count',
      path:'Count',
      text:'Count'
    },
    {
      id:'photos',
      path:'Photos',
      text:'Photos'
    }
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={appstore}>
        <Header/>
        <Menu menuItems={menuItems}/>
        {children}
        <Footer/>
      </Provider>
     </body>
    </html>
  );
}
