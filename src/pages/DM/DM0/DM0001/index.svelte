<script>
  import { onMount } from "svelte";
  import { rpc, pushWindow } from "@/utils/bridge";
  import store from "@/utils/store";
  import "./index.less";

  const add = () => {
    rpc("SQ1004").then((res) => {
      console.warn("res:", res);
    });
  };

  const jump = () => {
    pushWindow("/DM/DM0/DM0002", { a: 1, b: [{ a: 1, b: 2 }] });
  };

  const characters = ["🥳", "🎉", "✨"];

  let confetti = new Array(100)
    .fill()
    .map((_, i) => {
      return {
        character: characters[i % characters.length],
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        r: 0.1 + Math.random() * 1,
      };
    })
    .sort((a, b) => a.r - b.r);

  onMount(() => {
    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);

      confetti = confetti.map((emoji) => {
        emoji.y += 0.7 * emoji.r;
        if (emoji.y > 120) emoji.y = -20;
        return emoji;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<div class="DM0001">
  <div class="DM0001-title" on:click={add}>点我请求接口</div>
  <div class="DM0001-body" on:click={jump}>点我跳转页面</div>
  <div class="DM0001-bottom">我只是显示数据 => {$store.userInfo.name}</div>
</div>

{#each confetti as c}
  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})"
    >{c.character}</span
  >
{/each}

<style>
  :global(body) {
    overflow: hidden;
  }

  span {
    position: absolute;
    font-size: 8vw;
  }
</style>
