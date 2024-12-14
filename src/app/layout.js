import "./globals.css";
import { Montserrat } from '@next/font/google';

export const metadata = {
  title: "Sameeha Mubeen",
  description: "Sameeha's portfolio",
};

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: 'variable' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
