import styled from 'styled-components';
import { useState } from 'react';

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

function TranslateCardInput({ inputState }) {
	const [text, setText] = useState('');
	const [span, setSpan] = useState(inputState);

	return (
		<>
			<Input
				$span={span}
				type='text'
				value={text}
				onChange={e => setText(e.target.value)}
				maxLength={500}
			/>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>{span ? <Span>{text.length}/500</Span> : null}</div>
		</>
	);
}

export default TranslateCardInput;
