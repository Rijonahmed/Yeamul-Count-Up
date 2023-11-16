import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{__('Save Count Up', 'yeamul-count-up')}
		</p>
	);
}
