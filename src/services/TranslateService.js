import useApi from '../hooks/useApi';

const useTranslateService = () => {
	const _apiBase = 'https://api.mymemory.translated.net';

	const getTranslate = (text, srcLang, finLang) => {
		const { response } = useApi(`${_apiBase}/get?q=${text}&langpair=${srcLang}/${finLang}`);

		return transformTranslate(response);
	};

	const transformTranslate = trans => {
		return {
			text: trans.responseData.translatedText,
		};
	};

	return { getTranslate };
};

export default useTranslateService;
