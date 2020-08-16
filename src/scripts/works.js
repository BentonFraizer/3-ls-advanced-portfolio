import Vue from "vue";

const thumbs = {
  template: "#preview-thumbs"
};

const btns = {
  template: "#preview-btns"
};

const display = {
  template: "#preview-display",
  components: {thumbs, btns},
};

const tags = {
  template: "#preview-tags"
};

const info = {
  template: "#preview-info",
  components: {tags},
};

new Vue ({
  el: "#preview-component",
  template: "#preview-container",
  components: {display, info},
});