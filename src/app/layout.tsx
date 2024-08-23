
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";
// import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "Todo Application",
  description: "A todo app for learning purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont text-gray-300">
     <Layout>
     {children}
       <Toaster position="bottom-right" toastOptions={{
        duration:3000,
        style:{
          background:'#000000',
          color:'#FFFFFF',
        }
       }} />
     </Layout>
        </body>
    </html>
  );
}
