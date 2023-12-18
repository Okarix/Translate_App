import styled from 'styled-components';

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
`;

const Span = styled.span`
	color: #4d5562;
	font-size: 14px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

function TranslateCardInput({ inputState, sourceText, setSourceText, targetText }) {
	return (
		<>
			{inputState ? (
				<>
					<Input
						$span={inputState}
						type='text'
						value={sourceText}
						onChange={e => setSourceText(e.target.value)}
						maxLength={500}
						placeholder='Write something...'
					/>
					<Wrapper>
						<Span>{sourceText.length}/500</Span>
					</Wrapper>
				</>
			) : (
				<>
					<Input
						$span={inputState}
						type='text'
						value={targetText}
						readOnly
						placeholder='Translate'
					/>
				</>
			)}
		</>
	);
}

export default TranslateCardInput;
