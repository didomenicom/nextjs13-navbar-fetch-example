import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUser } from '@/lib/getUser';

type Params = {
	params: {
		userID: string;
	};
};

export async function generateMetadata({ params: { userID } }: Params): Promise<Metadata> {
	const userPromise = getUser(userID);

	const user = await userPromise;

	if (user?.id == null) {
		return {
			title: 'Could not find user',
		};
	}

	return {
		title: `${user.name} | User Profile`,
	};
}

export default async function UserProfilePage({ params: { userID } }: Params) {
	const userPromise = getUser(userID);

	const user = await userPromise;

	if (user?.id == null) {
		return notFound();
	}

	return (
		<div className="w-full">
			<Suspense fallback={<h2>Loading...</h2>}>
				<div>
					<h1>Welcome, {user.name}</h1>
				</div>
			</Suspense>
		</div>
	);
}
