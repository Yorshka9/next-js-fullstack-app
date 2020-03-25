import DefaultLayout from '../components/layouts/DefaultLayout';

import ImageModule from '../components/modules/ImageModule';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Homepage</h1>
			<a href="/blog">Blog</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			<p>This is the landing page</p>
			<ImageModule />
		</DefaultLayout>
	);
};

export default DefaultPage;
