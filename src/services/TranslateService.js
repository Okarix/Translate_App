import useApi from '../hooks/useApi';

const useTranslateService = () => {
	const _apiBase = 'https://api.mymemory.translated.net';

	const { request } = useApi();

	const getTranslate = async (text, srcLang, finLang) => {
		const result = await request(`${_apiBase}/get?q=${text}&langpair=${srcLang}|${finLang}`);
		return transformTranslate(result);
	};

	const getDetectedLanguage = async text => {
		try {
			const result = await request('https://ws.detectlanguage.com/0.2/detect', 'POST', { Authorization: `Bearer ${import.meta.env.VITE_DETECT_API_KEY}` }, { q: text });

			if (result.data.data.detections && result.data.data.detections.length > 0) {
				return result.data.data.detections[0].language;
			} else {
				throw new Error('No language detected');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const transformTranslate = (trans, finLang) => {
		return {
			text: finLang !== 'ru' ? trans.data.responseData.translatedText : JSON.parse(trans.data.responseData.translatedText),
		};
	};

	return { getTranslate, getDetectedLanguage };
};

export default useTranslateService;
