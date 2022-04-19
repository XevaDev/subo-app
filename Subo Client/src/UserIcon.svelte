<script lang="ts">
    import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';
	import { tooltip as tooltipv1 } from './tooltip.v1';

    export let src: string;
    export let profileLink: string;
    export let username: string;
</script>

<div class="icon">
    <a href={profileLink}>
        <img title={username} src={src} alt="" use:tooltip>
    </a>
</div>

<style lang="scss">
    .icon {
        img {
            border-radius: 50%;
            height: 60px;
            width: 60x;
        }
    }
</style>