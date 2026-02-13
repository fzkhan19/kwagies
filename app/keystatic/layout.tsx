
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystatic Admin',
  description: 'Admin UI for Kwagies Content',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
