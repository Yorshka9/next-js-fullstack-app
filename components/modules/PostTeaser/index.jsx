/* styles */
import style from './index.scss';

const PostTeaser = ({ title, intro, link }) => {
	return (
		<div className={style.root}>
			<a href={link}><h2>{title}</h2></a>
			<p>{intro}</p>
		</div>
	);
};

export default PostTeaser;
