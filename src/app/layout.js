
import NavBar from './NavBar';
import './globals.css';

export const metadata = {
  title: "Lin's store",
  description: "Welcome to my store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
