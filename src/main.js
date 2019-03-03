/**
 * Replace markdown formatting with WP.org specific readme.txt format.
 *
 * @param  {string} content Conents formatted as markdown.
 *
 * @return {string}
 */
function format( content ) {
	const replaceRules = {
		'^#\\s(.+)$': '=== $1 ===',
		'^##\\s(.+)$': '== $1 ==',
		'^#{3,}\\s(.+)$': '= $1 =',
	};

	// Replace Markdown headings with WP.org style headings.
	Object.keys( replaceRules ).forEach( pattern => {
		content = content.replace(
			new RegExp( pattern, 'gm' ),
			replaceRules[ pattern ]
		);
	} );

	return content;
}

export default format
