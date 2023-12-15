import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', data = null) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios({ url, method, data });
				setResponse(res.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, method, data]);

	return { response, error, loading };
};

export default useApi;
