/* styles */
import style from './aboutContent.scss';

const BlogPost = ({ title, body, img }) => {
	return (
		<div className={style.root}>
			<h2>{title}</h2>
			<p>{body}</p>

			<div className="image-wrapper">
			<img src={img}/>
			</div>
		</div>
	);
};

export default BlogPost;
