import "./globals.css";

export const metadata = {
  title: "Modos de renderizado",
  description: "Modos de renderizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
