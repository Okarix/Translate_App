import useApi from '../hooks/useApi';

const useTranslateService = () => {
	const _apiBase = 'https://api.mymemory.translated.net';

	const { request } = useApi();

	const getTranslate = async (text, srcLang, finLang) => {
		const result = await request(`${_apiBase}/get?q=${text}&langpair=${srcLang}|${finLang}`);
		console.log(result);

		return transformTranslate(result);
	};

	const transformTranslate = trans => {
		return {
			text: trans.responseData.translatedText,
		};
	};

	return { getTranslate };
};

export default useTranslateService;
