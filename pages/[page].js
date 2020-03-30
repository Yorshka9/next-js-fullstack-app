/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */

import BlogPost from '../components/modules/BlogPost';
import Navbar from '../components/NavBar';

function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}


const Page = ({ data }) => {
  const { content } = data;
  const blogpostData = content.components.find((item) => item.component === 'Blogpost Module');
	console.log(blogpostData);



  return (
    <DefaultLayout>
      <Navbar/>
      <h1>Slug page</h1>
      {blogpostData? <BlogPost title={blogpostData.Title} intro={blogpostData.Intro} body={blogpostData.Body} /> : null}
      
    </DefaultLayout>
  );
};


Page.getInitialProps = async ({ query }) => {
  const { page } = query;
  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  return { data }; 
};

export default Page;
