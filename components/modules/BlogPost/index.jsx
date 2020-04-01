/* styles */
import style from './blogpost.scss';

const BlogPost = ({ title, intro, body, img }) => {
	return (
		<div className={style.root}>
			<h2>{title}</h2>
            <h3>{intro}</h3>
			<p>{body}</p>

			<div className="image-wrapper">
			<img src={img}/>
			</div>
		</div>
	);
};

export default BlogPost;
