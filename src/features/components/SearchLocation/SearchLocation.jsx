import React from 'react';
import { useState, useEffect } from 'react';
import InputField from '../../../components/Form-Control/InputField/InputField';

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
	}, [nameLocation, valueInput, ischangesearchlocation]);

	useEffect(() => {
		!valueInput && setNameLocation('');
	}, [valueInput]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<InputField
					placeholder='City, state, zip code or country'
					isfocus={setIsFocus}
					namelocation={nameLocation}
					valueinput={setValueInput}
				/>
			</form>
			{isFocus && (
				<div>
					{listLocation.map((data, idx) => (
						<ul onClick={() => setNameLocation(data)} className='' key={idx}>
							<li className=''>{data}</li>
						</ul>
					))}
					{listLocation.length === 0 && (
						<p className='c-notfault'>No results found!!</p>
					)}
				</div>
			)}
		</div>
	);
}

export default SearchLocation;
