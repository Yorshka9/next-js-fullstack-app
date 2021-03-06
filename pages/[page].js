/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */

import BlogPost from '../components/modules/BlogPost';
import Navbar from '../components/NavBar/NavBar';

function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}


const Page = ({ data }) => {
  const { content } = data;

  // Defining blogContentData as Content component in storyblok

  const blogContentData = content.components.find((item) => item.component === 'Content');
	console.log(blogContentData);

  // Map out the group component inside Content and return every component inside from top to bottom

  return (
    <DefaultLayout>
      <Navbar/>

      {blogContentData.Group.map(data => {
      return  <BlogPost img={data.Image} title={data.Title}  body={data.Text} intro={data.Intro} />
      })}         
    </DefaultLayout>
  );
};


Page.getInitialProps = async ({ query }) => {
  const { page } = query;
  const data = await fetchUrl(`https://next-blog-phi.now.sh/api/page/${page}`);
  return { data }; 
};

export default Page;
