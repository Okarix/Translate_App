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

function TranslateCardInput({ inputState, srcText, setSrcText, finText }) {
	return (
		<>
			{inputState ? (
				<>
					<Input
						$span={inputState}
						type='text'
						value={srcText}
						onChange={e => setSrcText(e.target.value)}
						maxLength={500}
					/>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Span>{srcText.length}/500</Span>
					</div>
				</>
			) : (
				<>
					<Input
						$span={inputState}
						type='text'
						value={finText}
						readOnly
					/>
				</>
			)}
		</>
	);
}

export default TranslateCardInput;
