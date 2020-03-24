import DefaultLayout from '../components/layouts/DefaultLayout';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Homepage</h1>
			<a href="/blog">Blog</a>
			<a href="/contact">About</a>
			<a href="/contact">Contact</a>
			<p>This is the landing page</p>
		</DefaultLayout>
	);
};

export default DefaultPage;
