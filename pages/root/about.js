
/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../../components/layouts/DefaultLayout";

/* components */
import Navbar from '../../components/NavBar/NavBar';
import AboutContent from '../../components/modules/aboutContent/aboutContent'

function fetchUrl(url) {
    return fetch(url).then(r => r.json());
  }

  const About = ({ data }) => {
    const { content } = data;
    const aboutContentData = content.components.find((item) => item.component === 'Content');

  return (
    <DefaultLayout>
    <Navbar/>
    {aboutContentData.Group.map(data => {
      return  <AboutContent img={data.Image} title={data.Title}  body={data.Text} />
      })}     
    </DefaultLayout>
  );
}
export const getServerSideProps = async () => {
    const data = await fetchUrl(`https://next-blog-phi.now.sh/api/page/about`);
  return { props: { data } }
}

export default About