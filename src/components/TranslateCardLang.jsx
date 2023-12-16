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

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

function TranslateCardLang({ detectState, sourceActiveLang, setSourceActiveLang, targetActiveLang, setTargetActiveLang }) {
	const handleSrcLangClick = () => {
		setSourceActiveLang('Detect');
	};

	const handleSrcEnClick = () => {
		setSourceActiveLang('en');
	};

	const handleSrcRuClick = () => {
		setSourceActiveLang('ru');
	};

	const handleTargetEnClick = () => {
		setTargetActiveLang('en');
	};

	const handleTargetRuClick = () => {
		setTargetActiveLang('ru');
	};
	return (
		<Wrapper>
			<Ul $detectState={detectState}>
				{detectState ? (
					<>
						<Li
							$isActive={sourceActiveLang === 'Detect'}
							onClick={handleSrcLangClick}
						>
							Detect language
						</Li>
						<Li
							$isActive={sourceActiveLang === 'en'}
							onClick={handleSrcEnClick}
						>
							English
						</Li>
						<Li
							$isActive={sourceActiveLang === 'ru'}
							onClick={handleSrcRuClick}
						>
							Russian
						</Li>
					</>
				) : (
					<>
						<Li
							$isActive={targetActiveLang === 'en'}
							onClick={handleTargetEnClick}
						>
							English
						</Li>
						<Li
							$isActive={targetActiveLang === 'ru'}
							onClick={() => handleTargetRuClick('ru')}
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
		</Wrapper>
	);
}

export default TranslateCardLang;
