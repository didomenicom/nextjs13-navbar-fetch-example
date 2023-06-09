'use client';
import { User, getUser } from '@/lib/getUser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {};

export default async function NavbarUser({}: Props) {
	const searchParams = usePathname();
	const pathParts = searchParams.split('/');

	let user: User | undefined;
	if (pathParts.length > 2 && pathParts[pathParts.length - 2] === 'user' && pathParts[pathParts.length - 1] != null) {
		user = await getUser(pathParts[pathParts.length - 1]);
	}

	if (user == null) {
		return <Link href="/user/2">My Profile</Link>;
	}

	return <Link href={`/user/${user?.id}`}>{user.name}</Link>;
}
