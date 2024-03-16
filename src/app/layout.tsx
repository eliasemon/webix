import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@root/components/navbar';
import Footer from '@root/components/footer/Footer';
import ContextSetup from './ContextSetup';

const roboto = Inter({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Webinar',
    description: 'The largest webinar platform',
};
interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ContextSetup>
                    <Navbar />
                    {children}
                    <Footer />
                </ContextSetup>
            </body>
        </html>
    );
}
