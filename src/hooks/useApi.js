import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = () => {
	const request = useCallback(async (url, method = 'GET', headers = {}, data = null) => {
		try {
			const res = await axios({ url, method, headers, data });
			return res;
		} catch (error) {
			console.log('Fail', headers);
			console.log(error);
			throw error;
		}
	});

	return { request };
};

export default useApi;
