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
	color: ${props => (props.$isActive ? '#f9fafb' : '#4D5562')};
	border-radius: 15px;
	font-weight: 500;
	font-size: 15px;
	cursor: pointer;
	padding: 8px;
	transition: background-color 0.3s ease;
	background-color: ${props => (props.$isActive ? '#8e9098' : 'transparent')};
	&:hover {
		background-color: #8e9098;
		border-radius: 15px;
		color: #f9fafb;
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

function TranslateCardLang({ detectState }) {
	const [detect, setDetected] = useState(detectState);
	const [activeBtn, setActiveBtn] = useState(null);

	const handleClick = lang => {
		setActiveBtn(lang);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Ul $detectState={detectState}>
				{detectState ? (
					<Li
						$isActive={activeBtn === 'Detect'}
						onClick={() => handleClick('Detect')}
					>
						Detect language
					</Li>
				) : null}
				<Li
					$isActive={activeBtn === 'English'}
					onClick={() => handleClick('English')}
				>
					English
				</Li>
				<Li
					$isActive={activeBtn === 'Russian'}
					onClick={() => handleClick('Russian')}
				>
					Russian
				</Li>
			</Ul>

			{detect ? null : (
				<Img
					src={change}
					alt='change'
				/>
			)}
		</div>
	);
}

export default TranslateCardLang;
