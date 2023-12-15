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

function TranslateCardLang({ detectState, srcActiveLang, setSrcActiveLang, finActiveLang, setFinActiveLang }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Ul $detectState={detectState}>
				{detectState ? (
					<>
						<Li
							$isActive={srcActiveLang === 'Detect'}
							onClick={() => setSrcActiveLang('Detect')}
						>
							Detect language
						</Li>
						<Li
							$isActive={srcActiveLang === 'en'}
							onClick={() => setSrcActiveLang('en')}
						>
							English
						</Li>
						<Li
							$isActive={srcActiveLang === 'ru'}
							onClick={() => setSrcActiveLang('ru')}
						>
							Russian
						</Li>
					</>
				) : (
					<>
						<Li
							$isActive={finActiveLang === 'en'}
							onClick={() => setFinActiveLang('en')}
						>
							English
						</Li>
						<Li
							$isActive={finActiveLang === 'ru'}
							onClick={() => setFinActiveLang('ru')}
						>
							Russian
						</Li>
					</>
				)}
			</Ul>

			{detectState ? null : (
				<Img
					src={change}
					alt='change'
				/>
			)}
		</div>
	);
}

export default TranslateCardLang;
