import styled from 'styled-components';
import TranslateCardLang from './TranslateCardLang';
import TranslateCardDivider from './TranslateCardDivider';
import TranslateCardInput from './TranslateCardInput';
import TranslateCardLower from './TranslateCardLower';

const Div = styled.div`
	height: 300px;
	width: 550px;
	background-color: #232534;
	border-radius: 20px;
	padding: 25px 30px 25px 30px;
`;

function TranslateCard({ detectState, sourceActiveLang, setSourceActiveLang, targetActiveLang, setTargetActiveLang, sourceText, setSourceText, targetText, handleTranslateClick, setDetectLang, detectLang }) {
	return (
		<Div>
			<TranslateCardLang
				detectState={detectState}
				sourceActiveLang={sourceActiveLang}
				setSourceActiveLang={setSourceActiveLang}
				targetActiveLang={targetActiveLang}
				setTargetActiveLang={setTargetActiveLang}
				sourceText={sourceText}
				setDetectLang={setDetectLang}
				detectLang={detectLang}
			/>
			<TranslateCardDivider />
			<TranslateCardInput
				inputState={detectState}
				sourceText={sourceText}
				setSourceText={setSourceText}
				targetText={targetText}
			/>
			<TranslateCardLower
				buttonState={detectState}
				handleTranslateClick={handleTranslateClick}
				sourceText={sourceText}
				targetText={targetText}
				sourceActiveLang={sourceActiveLang}
				targetActiveLang={targetActiveLang}
			/>
		</Div>
	);
}

export default TranslateCard;
