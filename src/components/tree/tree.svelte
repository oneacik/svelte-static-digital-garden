<script lang="ts">
	import type { Directory, FileNode } from '../../domain/files/unist-file-walk';

	export let tree: FileNode = { type: 'directory', name: '?', children: [] };

	function isDirectory(tree: FileNode): tree is Directory {
		return tree.type == 'directory';
	}
	console.log(JSON.stringify(tree, undefined, 4));
	console.log(isDirectory(tree));
</script>

{#if isDirectory(tree)}
	<span>{tree.name}</span>
	<ul class="list-disc list-inside pl-5">
		{#each tree.children as child}
			<li><svelte:self tree={child} /></li>
		{/each}
	</ul>
{:else}
	<span>
		<a href="/garden{tree.path.substring(tree.path.indexOf('/'))}">{tree.name}</a>
	</span>
{/if}
