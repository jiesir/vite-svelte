<script>
  import { fade } from "svelte/transition";
  import Router from "svelte-spa-router";
  import { routes } from "@/utils/router";
  import "@/styles/index.less";
</script>

<div transition:fade={{ delay: 0, duration: 300 }}>
  <Router {routes} />
</div>
