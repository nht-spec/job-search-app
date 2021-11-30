import { useState, useEffect } from 'react';
import React from 'react';
import './style.scss';

function InputField({
	placeholder,
	valueinput,
	namecompany,
	isfocus,
	namelocation,
}) {
	const [valueInput, setValueInput] = useState('');

	useEffect(() => {
		valueinput && valueinput(valueInput);
	}, [valueInput, valueinput]);

	useEffect(() => {
		namecompany && setValueInput(namecompany);
	}, [namecompany]);

	useEffect(() => {
		namelocation && setValueInput(namelocation);
	}, [namelocation]);

	const handleFocus = () => {
		isfocus && isfocus(true);
	};

	return (
		<input
			onFocus={handleFocus}
			className='input-field f-family-two c-silver'
			type='text'
			placeholder={placeholder}
			value={valueInput}
			onChange={(e) => setValueInput(e.target.value)}
		/>
	);
}

export default InputField;
