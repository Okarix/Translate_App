import useApi from '../hooks/useApi';

const useTranslateService = () => {
	const _apiBase = 'https://api.mymemory.translated.net';

	const getTranslate = (text, srcLang, finLang) => {
		const { response, error, loading } = useApi(`${_apiBase}/get?q=${text}&langpair=${srcLang}/${finLang}`);

		return transformTranslate(response), error, loading;
	};

	const transformTranslate = trans => {
		return {
			text: trans.responseData.translatedText,
		};
	};

	return getTranslate;
};
