import { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/language';

const Input = styled.textarea`
	resize: none;
	outline: none;
	width: 100%;
	height: ${props => (props.$span ? '50%' : '57%')};
	font-size: 16px;
	border: none;
	color: #cdd5e0;
	background-color: #232534;
	padding: 20px;
	@media (max-width: 640px) {
		padding: 10px;
	}
`;

const Span = styled.span`
	color: #4d5562;
	font-size: 14px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

function TranslateCardInput({ inputState }) {
	const { translate, setTranslate } = useContext(LanguageContext);

	return (
		<>
			{inputState ? (
				<>
					<Input
						$span={inputState}
						type='text'
						value={translate.srcText}
						onChange={e => setTranslate({ ...translate, srcText: e.target.value })}
						maxLength={500}
						placeholder='Write something...'
					/>
					<Wrapper>
						<Span>{translate.srcText.length}/500</Span>
					</Wrapper>
				</>
			) : (
				<>
					<Input
						$span={inputState}
						type='text'
						value={translate.trgText}
						readOnly
						placeholder='Translate'
					/>
				</>
			)}
		</>
	);
}

export default TranslateCardInput;
