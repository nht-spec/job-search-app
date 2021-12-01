import React from 'react';
import { useState, useEffect } from 'react';
import categoryList from '../../../constant/categoryList';
import './style.scss';
function CategoryFilter({ category }) {
	const [categoryChoose, setCategoryChoose] = useState([]);
	const [mode, setMode] = useState(true);

	const handleChange = (evt) => {
		const checked = evt.target.checked;
		const values = evt.target.value;

		checked &&
			setCategoryChoose((preventDefault) => [
				...preventDefault,
				{ category: values },
			]);

		!checked &&
			setCategoryChoose(
				categoryChoose.filter((item) => item.category !== values)
			);
	};

	useEffect(() => {
		category && category(categoryChoose);
	}, [category, categoryChoose]);

	return (
		<div className='category-control filter'>
			<p className='title f-size-14 c-silver'>category</p>
			<div
				className='c-darkslateblue cursor jst-content category-title br-while box-shadow br-radius-4 align-center d-flex'
				onClick={() => setMode(!mode)}
			>
				<p>The job category to get</p>
				{mode ? '+ show' : '- hide'}
			</div>
			<div className='d-flex category-list br-while box-shadow br-radius-4'>
				{categoryList.map((data, idx) => (
					<div
						className='item-category d-flex align-center'
						style={!mode ? {} : { display: 'none' }}
						key={idx}
					>
						<input
							className='input-checkbox'
							id={idx}
							value={data.category}
							onChange={handleChange}
							type='checkbox'
						/>
						<p>{data.category}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default CategoryFilter;
