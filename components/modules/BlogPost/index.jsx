/* styles */
import style from './index.scss';

const BlogPost = ({ title, intro, body, img }) => {
	return (
		<div className={style.root}>
			<h2>{title}</h2>
            <p>{intro}</p>
			<p>{body}</p>

			<div className="image-wrapper">
			<img src={img}/>
			</div>
		</div>
	);
};

export default BlogPost;
