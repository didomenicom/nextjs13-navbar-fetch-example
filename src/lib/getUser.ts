export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export async function getUser(userID: string): Promise<User | undefined> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
	if (!res.ok) return undefined;
	return res.json();
}
