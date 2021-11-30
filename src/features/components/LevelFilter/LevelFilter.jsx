import React, { useEffect, useState } from 'react';
import levelList from '../../../constant/levelList';
import './style.scss';
function LevelFilter({ level }) {
	const [levelChoose, setLevelChoose] = useState([]);
	const [mode, setMode] = useState(true);

	const handleChange = (evt) => {
		const checked = evt.target.checked;
		const values = evt.target.value;

		checked &&
			setLevelChoose((preventDefault) => [
				...preventDefault,
				{ level: values },
			]);

		!checked &&
			setLevelChoose(levelChoose.filter((item) => item.level !== values));
	};

	useEffect(() => {
		level && level(levelChoose);
	}, [level, levelChoose]);

	return (
		<div className='level-control'>
			<p className='title f-size-14 c-silver'>level</p>
			<div
				className='c-darkslateblue cursor jst-content level-title br-while box-shadow br-radius-4 align-center d-flex'
				onClick={() => setMode(!mode)}
			>
				<p>The job level to get</p>
				{mode ? '+ show' : '- hide'}
			</div>
			<div className='d-flex level-list'>
				{levelList.map((data, idx) => (
					<div
						className='item-level d-flex align-center'
						style={!mode ? {} : { display: 'none' }}
						key={idx}
					>
						<input
							className='input-checkbox'
							id={idx}
							value={data.level}
							onChange={handleChange}
							type='checkbox'
						/>
						<p>{data.level}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default LevelFilter;
