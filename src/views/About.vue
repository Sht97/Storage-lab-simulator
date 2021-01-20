<template>
  <div class="about">
    <h1></h1>
    <img :src="require('../assets/how-hard-disk-drives-work-1.png')"/>
    <img :src="require('../assets/reading-writing-data-1.png')"/>
    <img :src="require('../assets/platters-spindle-1.png')"/>
    <img :src="require('../assets/case-1.png')"/>

    <p>
    <div class="csl-bib-body" style="line-height: 1.35">
      <div class="csl-entry" style="clear: left">
        <div
          class="csl-left-margin"
          style="
            float: left;
            padding-right: 0.5em;
            text-align: right;
            width: 1em;
          "
        >
        </div>
        <div class="csl-right-inline" style="margin: 0 0.4em 0 1.5em">
          «How Hard Disk Drives Work», <i>Animagraffs</i>, 07-abr-2017.
          [Online]. Disponible en: <a class="link" href="https://animagraffs.com/hard-disk-drive/">https://animagraffs.com/hard-disk-drive/</a>.
          [Accedido: 20-ene-2021]
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "About",
};
</script>
<style>
.link{
  font-size: 22px;
  font-weight: 400;
}
</style>
