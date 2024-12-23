import "./globals.css";

export const metadata = {
  title: "LIVEINLUXURY",
  description: "Real Estate Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
