<template>
  <div class="howItWorks my-5">
    <div class="container mx-0">
      <div class="row">
        <div class="col col-sm-auto">
          <table class="tg">
            <thead>
              <tr>
                <th class="tg-9wq8"></th>
                <th class="tg-7btt">Cheetah 15K.5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-fymr">Capacity</td>
                <td class="tg-0pky">300 GB</td>
              </tr>
              <tr>
                <td class="tg-fymr">RPM</td>
                <td class="tg-0pky">15,000</td>
              </tr>
              <tr>
                <td class="tg-fymr">Average Seek</td>
                <td class="tg-0pky">4 ms</td>
              </tr>
              <tr>
                <td class="tg-fymr">Max Transfer</td>
                <td class="tg-0pky">125 MB/s</td>
              </tr>
              <tr>
                <td class="tg-fymr">Platters</td>
                <td class="tg-0pky">4</td>
              </tr>
              <tr>
                <td class="tg-fymr">Cache</td>
                <td class="tg-0pky">16 MB</td>
              </tr>
              <tr>
                <td class="tg-fymr">Connects via</td>
                <td class="tg-0pky">SCSI</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col col-lg-5">
            <vue-mathjax class="equ"
              :formula="'$I/O \\ \\ Time(T_{I/O}) = T_{seek} + T_{rotation} + T_{transfer}$'"
            ></vue-mathjax>
            
            <vue-mathjax class="equ"
              :formula="'$The \\ rate \\ of \\ I/O \\ (R_{I/O}): R_{I/O} = { Size_{Transfer} \\over T_{I/O} }$'"
            ></vue-mathjax>
            
            <vue-mathjax class="equ"
              :formula="'$T_{rotation} =  \\frac{Time(ms)}{1Rot} =   \\frac{1 min}{15000 rot}  *  \\frac{60 s}{1 min} * \\frac{1000 s}{1 s} =  \\frac{60000 ms}{15000 rot} = \\frac{4 ms}{2} = 2 ms$'"
            ></vue-mathjax>
            Random
            <vue-mathjax class="equ"
              :formula="'$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{4KB}{1Req} * \\frac{1s}{125MB} * \\frac{1MB}{1024KB} * \\frac{1000ms}{1s} =  \\frac{4000ms}{125 * 1024Req} = 0,031ms$'"
            ></vue-mathjax>
            <vue-mathjax class="equ"
              :formula="'$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 0,31ms = 6,031ms$'"
            ></vue-mathjax>
            <vue-mathjax class="equ"
              :formula="'$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 4KB \\over 6,031ms } = 0,66 \\frac{MB}{s}$'"
            ></vue-mathjax>
            Sequential
            <vue-mathjax class="equ"
              :formula="'$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{100MB}{1Req} . \\frac{1s}{125MB} . \\frac{1000ms}{1s} =  \\frac{100000ms}{125} = 800ms$'"
            ></vue-mathjax>
            <vue-mathjax class="equ"
              :formula="'$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 800ms = 806ms$'"
            ></vue-mathjax>
            <vue-mathjax class="equ"
              :formula="'$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 102400KB \\over 806ms } = 127 \\frac{MB}{s}$'"
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
.equ{
  font-size: 20px;
}
/* .row {
  width: 100%;
}
.howItWorks {
  width: 100%;
} */
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 5px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
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
}
</style>

