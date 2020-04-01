
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
import Navbar from '../../components/NavBar/NavBar';

function fetchUrl(url) {
    return fetch(url).then(r => r.json());
  }

  const About = ({ data }) => {
    const { content } = data;
    const imageModuleData = content.components.find((item) => item.component === 'Image Module');
    const headlineModuleData = content.components.find((item) => item.component === 'Headline Module');
    const navModuleData = content.components.find((item) => item.component === 'Nav Module');
    const blogpostData = content.components.find((item) => item.component === 'Blogpost Module');
    console.log(blogpostData);

  return (
    <DefaultLayout>
    <Navbar/>
    {headlineModuleData ? <HeadlineModule title={headlineModuleData.Title} /> : null}

    {imageModuleData ? <ImageModule image={imageModuleData.Image} copy={imageModuleData.Copy} /> : null}
    </DefaultLayout>
  );
}
export const getServerSideProps = async () => {
    const data = await fetchUrl(`http://localhost:3000/api/page/about`);
  return { props: { data } }
}

export default About