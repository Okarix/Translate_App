import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = () => {
	const request = useCallback(async (url, method = 'GET', data = null) => {
		try {
			const res = await axios({ url, method, data });
			if (!res.ok) {
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}
			console.log(res);
			return res;
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	return { request };
};

export default useApi;
