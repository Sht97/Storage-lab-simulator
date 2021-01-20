<template>
  <div class="howItWorks my-5">
    <div class="container mx-auto">
      <div class="row">
        <div class="col col-sm-auto">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>Cheetah 15K.5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="titleBold">Capacity</td>
                <td>300 GB</td>
              </tr>
              <tr>
                <td id="titleBold">RPM</td>
                <td>15,000</td>
              </tr>
              <tr>
                <td id="titleBold">Average Seek</td>
                <td>4 ms</td>
              </tr>
              <tr>
                <td id="titleBold">Max Transfer</td>
                <td>125 MB/s</td>
              </tr>
              <tr>
                <td id="titleBold">Platters</td>
                <td>4</td>
              </tr>
              <tr>
                <td id="titleBold">Cache</td>
                <td>16 MB</td>
              </tr>
              <tr>
                <td id="titleBold">Connects via</td>
                <td>SCSI</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col col-lg-9">
          <vue-mathjax
            class="equ"
            :formula="'$I/O \\ \\ Time(T_{I/O}) = T_{seek} + T_{rotation} + T_{transfer}$'"
          ></vue-mathjax>

          <vue-mathjax
            class="equ"
            :formula="'$The \\ rate \\ of \\ I/O \\ (R_{I/O}): R_{I/O} = { Size_{Transfer} \\over T_{I/O} }$'"
          ></vue-mathjax>

          <vue-mathjax
            class="equ"
            :formula="'$T_{rotation} =  \\frac{Time(ms)}{1Rot} =   \\frac{1 min}{15000 rot}  *  \\frac{60 s}{1 min} * \\frac{1000 ms}{1 s} =  \\frac{60000 ms}{15000 rot} = \\frac{4 ms}{2} = 2 ms$'"
          ></vue-mathjax>
          <p class="my-2">Random</p>
          <vue-mathjax
            class="equ"
            :formula="'$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{4KB}{1Req} * \\frac{1s}{125MB} * \\frac{1MB}{1024KB} * \\frac{1000ms}{1s} =  \\frac{4000ms}{125 * 1024Req} = 0,031ms$'"
          ></vue-mathjax>
          <vue-mathjax
            class="equ"
            :formula="'$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 0,031ms = 6,031ms$'"
          ></vue-mathjax>
          <vue-mathjax
            class="equ"
            :formula="'$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 4KB \\over 6,031ms } = 0,66 \\frac{MB}{s}$'"
          ></vue-mathjax>
          <p class="my-2">Sequential</p>
          <vue-mathjax
            class="equ"
            :formula="'$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{100MB}{1Req} . \\frac{1s}{125MB} . \\frac{1000ms}{1s} =  \\frac{100000ms}{125} = 800ms$'"
          ></vue-mathjax>
          <vue-mathjax
            class="equ"
            :formula="'$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 800ms = 806ms$'"
          ></vue-mathjax>
          <vue-mathjax
            class="equ"
            :formula="'$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 100MB \\over 0,806s } = 124 \\frac{MB}{s}$'"
          ></vue-mathjax>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { VueMathjax } from "vue-mathjax";
export default {
  name: "Disk",
  components: {
    "vue-mathjax": VueMathjax,
  },
};
</script>
<style type="text/css">
#titleBold{
  font-size: 16px;
  font-weight: bold;
}
.howItWorks .container{
  width: 100%;
}
.equ {
  font-size: 20px;
}
.my-2{
  font-weight: bold;
  font-size: 25px;
}
.table{
  font-size: 16px;
}
/* .tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-size: 20px;
  overflow: hidden;
  padding: 5px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-size: 20px;
  font-weight: normal;
  overflow: hidden;
  padding: 5px 5px;
  word-break: normal;
}
.tg .tg-9wq8 {
  border-color: inherit;
  text-align: center;
  vertical-align: middle;
}
.tg .tg-7btt {
  border-color: inherit;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
}
.tg .tg-fymr {
  border-color: inherit;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
}
.tg .tg-0pky {
  border-color: inherit;
  text-align: left;
  vertical-align: top;
} */
</style>

