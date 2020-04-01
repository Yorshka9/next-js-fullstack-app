
/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../../components/layouts/DefaultLayout";

/* components */
import Navbar from '../../components/NavBar/NavBar';
import PostTeaser from '../../components/modules/PostTeaser';


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
          <div className="wrapper">
            {postTeaserData.Group.map(teaser => {
            return  <PostTeaser title={teaser.Title} posttitle={teaser.Headline} intro={teaser.Intro} link={teaser.Link} /> 
            })}
          </div>
          <style jsx>{`

          `}</style>
		</DefaultLayout>
  );

};


export const getServerSideProps = async () => {
    const data = await fetchUrl(`https://next-blog.yorshka9.now.sh/api/page/index`);
  return { props: { data } }
}

export default Home
