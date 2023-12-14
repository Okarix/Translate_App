import styled from 'styled-components';

const Divider = styled.div`
	height: 0.5px;
	width: 100%;
	background-color: #5a5a5a;
	margin: 0 auto;
	margin-top: 10px;
`;

function TranslateCardDivider() {
	return <Divider />;
}

export default TranslateCardDivider;
