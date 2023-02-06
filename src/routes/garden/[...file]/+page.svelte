<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { MdFile } from './+page.server';
	export let data: MdFile | undefined;
</script>

{#if data != undefined}
	<article class="prose prose-sm w-full ">
		<SvelteMarkdown source={data.contents} />
	</article>
{/if}
