import { useState } from 'react';
import styled from 'styled-components';
import bg from '../assets/img/bg/hero_img.jpg';
import TranslateCard from '../components/TranslateCard';

const Bg = styled.div`
	background: url(${bg}) center center / cover no-repeat;
	padding-top: 150px;
	height: 100vh;
`;

const Container = styled.div`
	width: 1180px;
	margin: 0 auto;
`;

function MainPage() {
	const [srcActiveLang, setSrcActiveLang] = useState('');
	const [finActiveLang, setFinActiveLang] = useState('');
	const [srcText, setSrcText] = useState('');
	const [finText, setFinText] = useState('');

	return (
		<Bg>
			<Container>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<TranslateCard
						detectState={true}
						srcActiveLang={srcActiveLang}
						setSrcActiveLang={setSrcActiveLang}
						srcText={srcText}
						setSrcText={setSrcText}
					/>
					<TranslateCard
						detectState={false}
						finActiveLang={finActiveLang}
						setFinActiveLang={setFinActiveLang}
						finText={finText}
					/>
				</div>
			</Container>
		</Bg>
	);
}

export default MainPage;
