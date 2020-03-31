/* styles */
import style from './index.scss';

const BlogPost = ({ title, intro, body }) => {
	return (
		<div className={style.root}>
			<h2>{title}</h2>
            <p>{intro}</p>
			<p>{body}</p>
		</div>
	);
};

export default BlogPost;
