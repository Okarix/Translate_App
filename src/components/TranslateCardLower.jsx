import styled from 'styled-components';
import sound from '../assets/icons/sound.svg';
import copy from '../assets/icons/copy.svg';
import clipboardCopy from 'clipboard-copy';
import { useContext } from 'react';
import { LanguageContext } from '../context/language';
import useTranslateService from '../services/TranslateService';

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 25px;
`;

const Button = styled.button`
	height: 40px;
	width: 150px;
	background-color: #3662e3;
	border-radius: 8px;
	border: 0.5px #cdd5e0 solid;
	color: #cdd5e0;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background-color: #7ca9f3;
	}
`;

const Img = styled.img`
	border-radius: 15px;
	cursor: pointer;
	transition: border 0.3s ease;
	padding: 5px;
	border: 2px transparent solid;
	&:hover {
		border: 2px #8e9098 solid;
		border-radius: 15px;
	}
`;

const Wrapper = styled.div`
	width: 15%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

function TranslateCardLower({ buttonState }) {
	const { translate, setTranslate } = useContext(LanguageContext);
	const { getTranslate, getDetectedLanguage } = useTranslateService();

	const voices = speechSynthesis.getVoices();

	const handleTranslateClick = async () => {
		if (translate.detectLang && translate.srcText) {
			const lang = await getDetectedLanguage(translate.srcText);
			setTranslate({ ...translate, srcActiveLang: lang });
			const res = await getTranslate(translate.srcText, lang, `${lang === 'ru' ? 'en' : 'ru'}`);
			lang === 'ru' ? setTranslate({ ...translate, trgActiveLang: 'en' }) : setTranslate({ ...translate, trgActiveLang: 'ru' });
			setTranslate({ ...translate, trgText: res.text });
		} else if (translate.srcText && translate.trgActiveLang && translate.srcActiveLang) {
			const res = await getTranslate(translate.srcText, translate.srcActiveLang, translate.trgActiveLang);
			setTranslate({ ...translate, trgText: res.text });
		} else {
			alert('You need to input text to translate or select language');
		}
	};

	const handleCopyClick = async () => {
		if (buttonState) {
			try {
				await clipboardCopy(translate.srcText);
				alert('The text successfully copied to the clipboard');
			} catch (error) {
				console.error('Error copying text:', error);
				alert('Failed to copy. Please manually copy.');
			}
		} else {
			try {
				await clipboardCopy(translate.trgText);
				alert('The text successfully copied to the clipboard');
			} catch (error) {
				console.error('Error copying text:', error);
				alert('Failed to copy. Please manually copy.');
			}
		}
	};

	const speakText = () => {
		if (buttonState) {
			const ssUtterance = new SpeechSynthesisUtterance(translate.srcText);
			ssUtterance.voice = translate.srcActiveLang === 'ru' ? voices[17] : voices[3];
			speechSynthesis.speak(ssUtterance);
		} else {
			const ssUtterance = new SpeechSynthesisUtterance(translate.trgText);
			ssUtterance.voice = translate.trgActiveLang === 'ru' ? voices[17] : voices[3];
			speechSynthesis.speak(ssUtterance);
		}
	};

	return (
		<Div>
			<Wrapper>
				<Img
					onClick={speakText}
					src={sound}
					alt='sound'
				/>
				<Img
					src={copy}
					alt='copy'
					onClick={handleCopyClick}
				/>
			</Wrapper>
			{buttonState && <Button onClick={handleTranslateClick}>Translate</Button>}
		</Div>
	);
}

export default TranslateCardLower;
