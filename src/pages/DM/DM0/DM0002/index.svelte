<script lang="ts">
  import { popWindow } from "@/utils/bridge";
  import { querystring } from "svelte-spa-router";
  import qs from "qs";
  import logo from "@/assets/logo.png";
  import "./index.less";
  console.warn("params=======", qs.parse($querystring));
  const back = () => {
    popWindow();
  };
</script>

<div class="DM0002">
  <img alt="Svelte Logo" src={logo} on:click={back} />
</div>
