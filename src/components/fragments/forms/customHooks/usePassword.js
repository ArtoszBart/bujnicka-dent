import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePassword = () => {
	const [searchParams] = useSearchParams();
	const [isSuccess, setIsSuccess] = useState(false);
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({});
	const handleSubmit = () => {
		const key = searchParams.get('key');
		setIsSuccess(true);
	};
	const handleChange = () => {};
	const getInfoClassName = () => {
		switch (submitInfo.success) {
			case true:
				return 'success-message';
			case false:
				return 'error-message';
			default:
				return '';
		}
	};

	return {
		isSuccess,
		values,
		errors,
		submitInfo,
		handleSubmit,
		handleChange,
		getInfoClassName,
	};
};

export default usePassword;
