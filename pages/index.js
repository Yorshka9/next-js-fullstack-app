import DefaultLayout from '../components/layouts/DefaultLayout';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Default Page</h1>
			<a href="/welcome">->Visit a Slug Page</a>
			<p>This is the landing page</p>
		</DefaultLayout>
	);
};

export default DefaultPage;
