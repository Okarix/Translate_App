import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', data = null) => {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios({ url, method, data });
				setResponse(res.data);
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};

		fetchData();
	}, [url, method, data]);

	return { response };
};

export default useApi;
