import React from 'react';
import { useState, useEffect } from 'react';
import InputField from '../../../components/Form-Control/InputField/InputField';
import './style.scss';
function SearchLocation({
	searchlocation,
	handlesubmit,
	ischangesearchlocation,
}) {
	const [nameLocation, setNameLocation] = useState('');
	const [valueInput, setValueInput] = useState('');
	const [listLocation, setListLocation] = useState([]);
	const [isFocus, setIsFocus] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handlesubmit && handlesubmit(nameLocation);
	};

	useEffect(() => {
		let listLocation = {};
		let arrCompany = [];
		searchlocation?.forEach((data) => {
			listLocation[data?.locations[0]?.name]
				? (listLocation[data.locations[0]?.name] += 1)
				: (listLocation[data.locations[0]?.name] = 1);
		});
		Object.keys(listLocation).forEach((company) => {
			if (company.indexOf(valueInput) > -1) {
				arrCompany.push(company);
			}
		});
		setListLocation(arrCompany);
	}, [searchlocation, valueInput]);

	useEffect(() => {
		nameLocation && setIsFocus(false);

		if (valueInput && valueInput !== nameLocation) {
			ischangesearchlocation && ischangesearchlocation(true);
			setNameLocation('');
		}

		if (!valueInput) {
			ischangesearchlocation && ischangesearchlocation(true);
		}

		valueInput === nameLocation &&
			ischangesearchlocation &&
			ischangesearchlocation(false);

		if (valueInput && valueInput === nameLocation && isFocus) {
			setIsFocus(false);
		}
	}, [nameLocation, valueInput, ischangesearchlocation, isFocus]);

	useEffect(() => {
		!valueInput && setNameLocation('');
	}, [valueInput]);

	return (
		<div>
			<p className='title f-size-14 c-silver'>Location</p>
			<div className='search-control  br-while box-shadow  br-radius-4'>
				<span className='tooltiptext c-notfault'>Press enter to search !!</span>
				<form
					className='search-form-company d-flex c-silver align-center'
					onSubmit={handleSubmit}
				>
					<span className='material-icons-outlined'>public</span>

					<InputField
						placeholder='City, state, zip code or country'
						isfocus={setIsFocus}
						namelocation={nameLocation}
						valueinput={setValueInput}
					/>
				</form>

				{isFocus && (
					<div className='list-location br-while box-shadow  br-radius-4'>
						{listLocation.map((data, idx) => (
							<ul
								className='location-options d-flex align-center cursor bx-shadow br-radius-4'
								onClick={() => setNameLocation(data)}
								key={idx}
							>
								<li className='c-darkslateblue list-style f-size-18'>{data}</li>
							</ul>
						))}
						{listLocation.length === 0 && (
							<p className='c-notfault'>No results found!!</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchLocation;
