<template>
  <div>
    <b-card>
      <b-media>
        <b-img slot="aside" rounded blank blank-color="#ccc" width="120" height="150"></b-img>
        <h5 class="mt-0">白晓暄</h5><h6>Welkin Bai</h6>
        <p>
          这里是一段自我介绍
        </p>
      </b-media>
    </b-card>
  </div>
</template>

<script>
import BMedia from "bootstrap-vue/es/components/media/media";
import BMediaAside from "bootstrap-vue/es/components/media/media-aside";
import BMediaBody from "bootstrap-vue/es/components/media/media-body";

export default {
  name: "SelfIntro",
  components: {
    BMedia,
    BMediaAside,
    BMediaBody
  }
};
</script>

<style>
</style>
