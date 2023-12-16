import styled from 'styled-components';
import sound from '../assets/icons/sound.svg';
import copy from '../assets/icons/copy.svg';

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 25px;
`;

const Button = styled.button`
	height: 40px;
	width: 150px;
	background-color: #3662e3;
	border-radius: 8px;
	border: 0.5px #cdd5e0 solid;
	color: #cdd5e0;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background-color: #7ca9f3;
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
	width: 15%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

function TranslateCardLower({ buttonState }) {
	return (
		<Div>
			<Wrapper>
				<Img
					src={sound}
					alt='sound'
				/>
				<Img
					src={copy}
					alt='copy'
				/>
			</Wrapper>
			{buttonState && <Button>Translate</Button>}
		</Div>
	);
}

export default TranslateCardLower;
