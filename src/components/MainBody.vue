<template>
  <b-container class="main-body">
    <b-row no-gutters>
      <b-col>
        <self-intro/>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>技能</b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>工作经历</b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>其他介绍</b-col>
    </b-row>
  </b-container>
</template>

<script>
import SelfIntro from "./SelfIntro.vue";

export default {
  name: "MainBody",
  components: {
    "self-intro": SelfIntro
  }
};
</script>

<style>
.main-body .row > .col {
  border: 0px solid #563d7c33;
}
</style>
