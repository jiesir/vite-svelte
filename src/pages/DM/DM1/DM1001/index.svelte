<script>
  import { rpc, pushWindow } from "@/utils/bridge";
  import store from "@/utils/store";
  import "./index.less";

  const add = () => {
    rpc("SQ1004").then((res) => {
      console.warn("res:", res);
    });
  };

  const jump = () => {
    pushWindow("/DM/DM1/DM1002", { a: 1, b: 2 });
  };
</script>

<div class="DM1001">
  <div class="DM1001-title" on:click={add}>点我请求接口</div>
  <div class="DM1001-body" on:click={jump}>点我跳转页面</div>
  <div class="DM1001-bottom">我只是显示数据 => {$store.userInfo.age}</div>
</div>
