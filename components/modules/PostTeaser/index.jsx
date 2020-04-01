/* styles */
import style from './postteaser.scss';

const PostTeaser = ({ title, posttitle, intro, link }) => {
	return (
		<div className={style.root}>
			<h1>{title}</h1>
			<div>
			<a href={link}><h2>{posttitle}</h2>
			<p>{intro}</p></a>
			</div>
		</div>
	);
};

export default PostTeaser;
