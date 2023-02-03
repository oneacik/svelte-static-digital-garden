<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type { MdFile } from './+page.server'
    export let data: MdFile | undefined;
</script>

{#if data != undefined}
    <article class="prose lg:prose-xl w-full mx-auto text-xl lg:text-xl">
        <SvelteMarkdown source={data.contents} />
    </article>
{/if}
