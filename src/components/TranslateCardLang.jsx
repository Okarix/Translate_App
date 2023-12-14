import { useState } from 'react';
import styled from 'styled-components';
import change from '../assets/icons/change.svg';

const Ul = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style-type: none;
	width: ${props => (props.$detectState ? '320px' : '170px')};
`;

const Li = styled.li`
	color: {props => (props.isActive ? '#f9fafb' : '#5a5a5a')};
	border-radius: 15px;
	font-weight: 500;
	font-size: 15px;
	cursor: pointer;
	padding: 8px;
	transition: background-color 0.3s ease;
	background-color: {props => (props.isactive ? '#8e9098' : 'transparent')};
	&:hover {
		background-color: #8e9098;
		border-radius: 15px;
		color: #f9fafb;
	}
`;

function TranslateCardLang({ detectState }) {
	const [detect, setDetected] = useState(detectState);
	const [activeBtn, setActiveBtn] = useState(null);

	const handleClick = lang => {
		setActiveBtn(lang);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Ul detectState={detectState}>
				{detectState ? (
					<Li
						isactive={activeBtn === 'Detect'}
						onClick={() => handleClick('Detect')}
					>
						Detect language
					</Li>
				) : null}
				<Li
					isactive={activeBtn === 'English'}
					onClick={() => handleClick('English')}
				>
					English
				</Li>
				<Li
					isactive={activeBtn === 'Russian'}
					onClick={() => handleClick('Russian')}
				>
					Russian
				</Li>
			</Ul>

			{detect ? null : (
				<Li>
					<img
						style={{ cursor: 'pointer' }}
						src={change}
						alt='change'
					/>
				</Li>
			)}
		</div>
	);
}

export default TranslateCardLang;
