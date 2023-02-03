<script lang="ts">
	import type { Directory, FileNode } from '../../domain/files/unist-file-walk';

	export let tree: FileNode = { type: 'directory', children: [] };

	function isDirectory(tree: FileNode): tree is Directory {
		return tree.type == 'directory';
	}
	console.log(JSON.stringify(tree, undefined, 4));
	console.log(isDirectory(tree));
</script>

{#if isDirectory(tree)}
	<span>{tree.data.name}</span>
	<ul class="list-disc list-inside pl-5">
		{#each tree.children as child}
			<li><svelte:self tree={child} /></li>
		{/each}
	</ul>
{:else}
	<span>
		<a href="/garden{tree.data.path.substring(tree.data.path.indexOf('/'))}">{tree.data.name}</a>
	</span>
{/if}
