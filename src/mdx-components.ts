import { Headline, Subheadline, Subsubheadline, Text, TextLink, Title } from './components';

export const mapping = {
	a: TextLink,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	p: Text,
};
