import { createContext } from 'react';

export const LanguageContext = createContext({
	srcActiveLang: '',
	trgActiveLang: '',
	srcText: '',
	trgText: '',
});
