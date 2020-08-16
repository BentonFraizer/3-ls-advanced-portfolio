import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs"
};

const btns = {
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works", "currentIndex"],
  template: "#preview-display",
  components: {thumbs, btns},
  computed: {
    notReversedWorks() {
      const works = [...this.works];
      return works
    },
  },
};

const tags = {
  props: ["tags"],
  template: "#preview-tags"
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {tags},
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue ({
  el: "#preview-component",
  template: "#preview-container",
  components: {display, info},
  data(){
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeNotInfiniteLoopForNdx(value);
    },
  },
  methods: {
    makeNotInfiniteLoopForNdx(index) {
      const worksNumber = this.works.length - 1;
      if (index < 0) this.currentIndex = 0;
      if (index > worksNumber) this.currentIndex = worksNumber;
      
      // Если нужно сделать закольцовку массива с работами
      // if (index < 0) this.currentIndex = this.works.length - 1;
      // if (index > this.works.length - 1) this.currentIndex = 0;
    },
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/${item.photo}`).default;
        item.photo = requiredImage;
        return item
      })
    },
    slide(direction) {
      switch(direction) {
        case "next" :
          this.currentIndex++
          break;
        case "prev" :
          this.currentIndex--
          break;
      }
    },
  },
  
  created(){
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});