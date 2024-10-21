import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Eundong's PortFolio",
    description: "Eundong's PortFolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header className="header-nav">
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/prject">Project</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
        {children}
        {/*<footer>*/}
        {/*    <p>&copy; 2024 My Portfolio</p>*/}
        {/*</footer>*/}
        </body>
        </html>
    );
};
