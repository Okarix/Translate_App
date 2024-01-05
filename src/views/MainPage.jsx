import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TranslateCard from '../components/TranslateCard';
import { LanguageContext } from '../context/language';

const Wrapper = styled.div`
	margin: 0 auto;
	padding: 100px 0 0 0;
	display: flex;
	justify-content: center;
	column-gap: 20px;
	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		padding-bottom: 100px;
	}
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
			<Wrapper>
				<TranslateCard detectState={true} />
				<TranslateCard detectState={false} />
			</Wrapper>
		</LanguageContext.Provider>
	);
}

export default MainPage;
