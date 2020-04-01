/* styles */
import style from './index.scss';

const PostTeaser = ({ title, intro, link }) => {
	return (
		<div className={style.root}>
			<div>
			<a href={link}><h2>{title}</h2>
			<p>{intro}</p></a>
			</div>
		</div>
	);
};

export default PostTeaser;
