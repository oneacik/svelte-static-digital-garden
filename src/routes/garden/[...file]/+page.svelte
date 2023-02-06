<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Heading from '../../../components/tree/Heading.svelte';
	import type { MdFile } from './+page.server';
	export let data: MdFile | undefined;
</script>

{#if data != undefined}
	<article class="prose prose-sm w-full max-w-full">
		<SvelteMarkdown
			source={data.contents}
			renderers={{ heading: Heading }}
			options={{ headerIds: true }}
		/>
	</article>
{/if}
