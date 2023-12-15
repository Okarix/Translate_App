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

function TranslateCard({ detectState, srcActiveLang, setSrcActiveLang, finActiveLang, setFinActiveLang, srcText, setSrcText, finText }) {
	return (
		<Div>
			<TranslateCardLang
				detectState={detectState}
				srcActiveLang={srcActiveLang}
				setSrcActiveLang={setSrcActiveLang}
				finActiveLang={finActiveLang}
				setFinActiveLang={setFinActiveLang}
			/>
			<TranslateCardDivider />
			<TranslateCardInput
				inputState={detectState}
				srcText={srcText}
				setSrcText={setSrcText}
				finText={finText}
			/>
			<TranslateCardLower buttonState={detectState} />
		</Div>
	);
}

export default TranslateCard;
