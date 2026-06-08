import './globals.css';

export const metadata = {
  title: 'Signature Slam Academy | Grow Your Game With The Professionals',
  description:
    'SSA Hunter Valley – The first venue in the world to have 60 multi surface courts at one location. Adopt. Nurture. Deliver.',
  keywords: 'tennis academy, SSA, Signature Slam Academy, Hunter Valley, tennis coaching, tennis programs',
  openGraph: {
    title: 'Signature Slam Academy',
    description: 'First one-stop tennis academy in the Asia Pacific producing grand slam champions.',
    url: 'https://www.signatureslamacademy.com',
    siteName: 'Signature Slam Academy',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}
