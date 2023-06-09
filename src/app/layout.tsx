import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="w-full items-center justify-center lg:flex">
					<div className="w-full max-w-6xl items-center justify-center text-sm lg:flex lg:pt-10">{children}</div>
				</main>
			</body>
		</html>
	);
}
