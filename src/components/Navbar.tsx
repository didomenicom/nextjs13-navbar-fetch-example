import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarUser from './NavbarUser';

export default function Navbar() {
	return (
		<nav className="bg-gray-300 z-10 w-full items-center justify-center lg:flex">
			<div className="w-full max-w-6xl items-center justify-between text-sm lg:flex lg:py-3">
				<Link href="/" aria-label="Home">
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
				</Link>
				{/* @ts-expect-error Server Component */}
				<NavbarUser />
			</div>
		</nav>
	);
}
