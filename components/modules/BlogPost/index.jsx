/* styles */
import style from './index.scss';

const BlogPost = ({ title, intro, body }) => {
	return (
		<div className={style.root}>
			<h1>{title}</h1>
            <p>{intro}</p>
			<p>{body}</p>
		</div>
	);
};

export default BlogPost;
