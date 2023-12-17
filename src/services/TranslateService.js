import useApi from '../hooks/useApi';

const useTranslateService = () => {
	const _apiBase = 'https://api.mymemory.translated.net';

	const { request } = useApi();

	const getTranslate = async (text, srcLang, finLang) => {
		const result = await request(`${_apiBase}/get?q=${text}&langpair=${srcLang}|${finLang}`);
		return transformTranslate(result);
	};

	const transformTranslate = (trans, finLang) => {
		return {
			text: finLang !== 'ru' ? trans.data.responseData.translatedText : JSON.parse(trans.data.responseData.translatedText),
		};
	};

	return { getTranslate };
};

export default useTranslateService;
