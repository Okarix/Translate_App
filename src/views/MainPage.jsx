import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from '../assets/img/bg/hero_img.jpg';
import TranslateCard from '../components/TranslateCard';
import useTranslateService from '../services/TranslateService';
import clipboardCopy from 'clipboard-copy';

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
	const [sourceActiveLang, setSourceActiveLang] = useState('');
	const [targetActiveLang, setTargetActiveLang] = useState('');
	const [sourceText, setSourceText] = useState('');
	const [targetText, setTargetText] = useState('');

	const { getTranslate } = useTranslateService();

	useEffect(() => {
		const clearState = () => {
			if (!sourceText) {
				setTargetText('');
			}
		};

		clearState();
	}, [sourceText]);

	const handleTranslateClick = async () => {
		const res = await getTranslate(sourceText, sourceActiveLang, targetActiveLang);
		setTargetText(res.text);
	};

	return (
		<Bg>
			<Container>
				<Wrapper>
					<TranslateCard
						detectState={true}
						sourceActiveLang={sourceActiveLang}
						setSourceActiveLang={setSourceActiveLang}
						sourceText={sourceText}
						setSourceText={setSourceText}
						handleTranslateClick={handleTranslateClick}
					/>
					<TranslateCard
						detectState={false}
						targetActiveLang={targetActiveLang}
						setTargetActiveLang={setTargetActiveLang}
						targetText={targetText}
						sourceText={sourceText}
					/>
				</Wrapper>
			</Container>
		</Bg>
	);
}

export default memo(MainPage);
