

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */
import Navbar from '../components/NavBar/NavBar';
import PostTeaser from '../components/modules/PostTeaser';


function fetchUrl(url) {
    return fetch(url).then(r => r.json());
  }

  
  const defaultPage = ({ data }) => {
  const { content } = data;

  // Defining postTeaserData as Post Teaser Module component in storyblok

  const postTeaserData = content.components.find((item) => item.component === 'Post Teaser Module');
  console.log(postTeaserData);


  // Map out the group component inside post teaser module and return every component inside from top to bottom
	return (
		<DefaultLayout>
			<Navbar/><br/>
          <div className="wrapper">
            {postTeaserData.Group.map(teaser => {
            return  <PostTeaser title={teaser.Title} posttitle={teaser.Headline} intro={teaser.Intro} link={teaser.Link} /> 
            })}
          </div>
         
		</DefaultLayout>
  );

};


export const getServerSideProps = async () => {
    const data = await fetchUrl(`https://next-blog-phi.now.sh/api/page/index`);
  return { props: { data } }
}

export default defaultPage
