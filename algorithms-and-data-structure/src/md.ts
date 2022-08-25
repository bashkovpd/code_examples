type TLinkTransformerPayload = {
	linkTitle: string,
	linkURL: string,
};

type TTransformer = {
	link: (payload: TLinkTransformerPayload) => string;
};

const MDLinkRegex = /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g;

let transformMDString = (
	MDString: string,
	transformer: TTransformer,
) => {
	let result: string[] = [];
	// let result: JSX.Element[] = [];
	let match: RegExpExecArray;
	let plainTextStartIndex = 0;

	while ((match = MDLinkRegex.exec(MDString)) !== null) {
		const [MDLinkString, linkTitle, linkURL] = match;
		
		const plainTextBeforeMDLink = MDString.substr(
			plainTextStartIndex,
			match.index - plainTextStartIndex,
		);
		
		console.log(plainTextStartIndex, match.index, MDLinkString.length)
		
		result.push(
			plainTextBeforeMDLink,
			transformer.link({ linkTitle, linkURL }),
		);
		
		plainTextStartIndex = match.index + MDLinkString.length;
	}

	return result;
}

console.log(transformMDString(
	// 'Я соглашаюсь с [условиями передачи данных](https://static1.www.banki.ru/cfe/consent1.pdf) и получением [рассылок](https://static2.www.banki.ru/cfe/consent1.pdf)',
	'test [lol](troll) and [lol2](troll2)',
	{
		link: ({ linkTitle, linkURL }) => `<a href=${linkURL}">${linkTitle}</a>`,
	},
))
