<template>
  <div id="editor" ref="editor" class="code-editor__container" />
</template>

<script>
import beautify from "js-beautify";
const ace = require("brace");
require("brace/mode/javascript");
require("brace/theme/monokai");

export default {
  name: "PreCodeEditor",
  props: {
    code: {
      type: String,
      default: null
    }
  },
  mounted() {
    const editor = ace.edit("editor", {
      value: this.code.replace('rt-template##','template')
    });
    editor.getSession().setMode("ace/mode/html");
    editor.setTheme("ace/theme/monokai");

    editor.session.setValue(beautify.html(this.code));
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().on("change", () => {
      const val = editor.getSession().getValue();
      this.$emit("change", val);
    });
  }
};
</script>
