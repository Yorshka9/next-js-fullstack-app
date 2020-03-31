
/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../../components/layouts/DefaultLayout";

/* components */
import HeadlineModule from "../../components/modules/HeadlineModule";
import ParagraphModule from "../../components/modules/ParagraphModule";
import ImageModule from '../../components/modules/ImageModule';
import NavModule from '../../components/modules/NavModule';
import Navbar from '../../components/NavBar';
import PostTeaser from '../../components/modules/PostTeaser';
import BlogPost from '../../components/modules/BlogPost';

function fetchUrl(url) {
    return fetch(url).then(r => r.json());
  }

  const Home = ({ data }) => {
  const { content } = data;
  const postTeaserData = content.components.find((item) => item.component === 'Post Teaser Module');
  console.log(postTeaserData);


  
	return (
		<DefaultLayout>
			<Navbar/><br/>
            <h1>Blog list</h1>
            <div>
            {postTeaserData.Group.map(teaser => {
            return  <PostTeaser title={teaser.Headline} intro={teaser.Intro} link={teaser.Link} /> 
            })}

            </div>
		</DefaultLayout>
  );

};


export const getServerSideProps = async () => {
    const data = await fetchUrl(`http://localhost:3000/api/page/index`);
  return { props: { data } }
}

export default Home
