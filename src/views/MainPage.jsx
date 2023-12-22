import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from '../assets/img/bg/hero_img.jpg';
import TranslateCard from '../components/TranslateCard';
import { LanguageContext } from '../context/language';

const Bg = styled.div`
	background: url(${bg}) center center / cover no-repeat;
	padding-top: 150px;
	height: 100vh;
`;

const Container = styled.div`
	width: 1180px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

function MainPage() {
	const [translate, setTranslate] = useState({
		srcActiveLang: '',
		trgActiveLang: '',
		srcText: '',
		trgText: '',
		detectLang: '',
	});

	useEffect(() => {
		const clearState = () => {
			if (!translate.srcText) {
				setTranslate({ ...translate, trgText: '' });
			}
		};

		clearState();
	}, [translate.srcText]);

	return (
		<LanguageContext.Provider value={{ translate, setTranslate }}>
			<Bg>
				<Container>
					<Wrapper>
						<TranslateCard detectState={true} />
						<TranslateCard detectState={false} />
					</Wrapper>
				</Container>
			</Bg>
		</LanguageContext.Provider>
	);
}

export default MainPage;
