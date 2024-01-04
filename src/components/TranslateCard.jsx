import styled from 'styled-components';
import TranslateCardDivider from './TranslateCardDivider';
import TranslateCardInput from './TranslateCardInput';
import TranslateCardLang from './TranslateCardLang';
import TranslateCardLower from './TranslateCardLower';

const Div = styled.div`
	height: 300px;
	width: 550px;
	background-color: #232534;
	border-radius: 20px;
	padding: 25px 30px 25px 30px;
	margin-top: 10px;
	@media (max-width: 640px) {
		width: 390px;
	}
`;

function TranslateCard({ detectState }) {
	return (
		<Div>
			<TranslateCardLang detectState={detectState} />
			<TranslateCardDivider />
			<TranslateCardInput inputState={detectState} />
			<TranslateCardLower buttonState={detectState} />
		</Div>
	);
}

export default TranslateCard;
