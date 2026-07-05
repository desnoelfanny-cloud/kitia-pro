import "./globals.css";

export const metadata = {
  title: "KitIA Pro",
  description: "Assistants IA pour professionnels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
