
/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */
import HeadlineModule from "../components/modules/HeadlineModule";
import ParagraphModule from "../components/modules/ParagraphModule";
import ImageModule from '../components/modules/ImageModule';
import NavModule from '../components/modules/NavModule';
import Navbar from '../components/NavBar';
import PostTeaser from '../components/modules/PostTeaser';

function fetchUrl(url) {
    return fetch(url).then(r => r.json());
  }

  const Home = ({ data }) => {
	const { content } = data;



	return (
		<DefaultLayout>
			<h1>Homasdasdas</h1>
			<Navbar/>

			

		</DefaultLayout>
	);
};

export const getServerSideProps = async () => {
    const data = await fetchUrl(`http://localhost:3000/api/page/home`);
  return { props: { data } }
}

export default Home
