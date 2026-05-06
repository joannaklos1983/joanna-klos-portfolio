import "./globals.css";

export const metadata = {
  title: "Joanna Kłos | AI-Native Portfolio",
  description: "Marketing, strategia, AI workflows i web projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
