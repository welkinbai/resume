<template>
  <div>
    <b-navbar class="top" type="light" variant="light">
      <b-navbar-brand>RESUME-Welkin Bai</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="http://www.welkinbai.com">Dawn Blog</b-nav-item>
        <b-nav-item href="https://github.com/welkinbai">GitHub</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import BNavbar from "bootstrap-vue/es/components/navbar/navbar";
import BNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import BNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";
import BNavItem from "bootstrap-vue/es/components/nav/nav-item";
export default {
  name: "top",
  components: {
    "b-navbar": BNavbar,
    "b-navbar-nav": BNavbarNav,
    "b-navbar-brand": BNavbarBrand,
    "b-nav-item": BNavItem
  }
};
</script>

<style>
.top {
  margin-bottom: 30px;
}
</style>
