<script lang="ts">
	import Tree from '../../components/tree/tree.svelte';
	import type { FileNode } from '../../domain/files/unist-file-walk';

	export let data: FileNode;
</script>

<div class="list-disc">
	<Tree tree={data} />
</div>
