import {
	Divider,
	Headline,
	ListItem,
	OrderedList,
	Subheadline,
	Subsubheadline,
	Text,
	TextLink,
	Title,
	UnorderedList,
} from './components';

export const mapping = {
	a: TextLink,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	hr: Divider,
	li: ListItem,
	ol: OrderedList,
	p: Text,
	ul: UnorderedList,
};
