import "./globals.css";

export const metadata = {
  title: "StepTrack — Track Your Steps, Goals & Daily Progress",
  description:
    "StepTrack is a modern mobile fitness app designed to help you track your daily steps, goals, water intake and activity progress.",
  icons: {
    icon: "/icon/favicon.ico",
  },
  openGraph: {
    title: "StepTrack — Track Your Steps, Goals & Daily Progress",
    description:
      "StepTrack is a modern mobile fitness app designed to help you track your daily steps, goals, water intake and activity progress.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StepTrack — Track Your Steps, Goals & Daily Progress",
    description:
      "StepTrack is a modern mobile fitness app designed to help you track your daily steps, goals, water intake and activity progress.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
