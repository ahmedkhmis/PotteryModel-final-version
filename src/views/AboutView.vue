<template>
  <div class="about p-5">
    <center><h1>Determine the measurements</h1></center>
    <!--<div class="input-group p-5">
      <div class="p-4">
        <label for="basic-url" class="form-label"
          ><h3>Orifice Diameter:&nbsp;</h3>
        </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div class="p-4">
        <label for="basic-url" class="form-label"> <h3>Body:&nbsp;</h3> </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
    <div class="input-group p-5">
      <div class="p-4">
        <label for="basic-url" class="form-label"><h3>Base:&nbsp;</h3> </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div class="p-4">
        <label for="basic-url" class="form-label"><h3>Rim:&nbsp;</h3> </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
    <div class="input-group p-5">
      <div class="p-4">
        <label for="basic-url" class="form-label"><h3>Neck:&nbsp;</h3> </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div class="p-4">
        <label for="basic-url" class="form-label"><h3>Belly:&nbsp;</h3> </label>

        <input
          id="basic-url"
          type="number"
          @input="onInput"
          placeholder="1.00 cm"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div> -->
    <form action="">
      <div class="p-5">
        <table
          class="table p-5"
          style="background-color: rgb(243, 242, 237); border: 1px solid black"
        >
          <tbody>
            <tr>
              <th style="width: 10%">
                <label for="od" class="form-label"
                  ><h3>Orifice Diameter:</h3>
                </label>
              </th>
              <td style="width: 20%">
                <input
                  id="od"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 cm"
                  required
                  step="0.5"
                />
              </td>

              <th style="width: 10%">
                <label for="body" class="form-label">
                  <h3>Body:&nbsp;</h3>
                </label>
              </th>
              <td style="width: 20%">
                <input
                  id="body"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 cm"
                  aria-describedby="inputGroup-
                sizing-lg"
                  required
                  step="0.5"
                />
              </td>
              <td rowspan="3">
                <img
                  class="fit-picture"
                  src="../assets/composition.png"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <th style="width: 10%">
                <label for="base" class="form-label"
                  ><h3>Base:&nbsp;</h3>
                </label>
              </th>

              <td style="width: 20%">
                <input
                  id="base"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 cm"
                  aria-describedby="inputGroup
                -sizing-lg"
                  required
                  step="0.5"
                />
              </td>

              <th style="width: 10%">
                <label for="rim" class="form-label"><h3>Rim:&nbsp;</h3> </label>
              </th>
              <td style="width: 20%">
                <input
                  id="rim"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 mm"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  step="0.5"
                />
              </td>
            </tr>
            <tr>
              <th style="width: 10%">
                <label for="neck" class="form-label"
                  ><h3>Neck:&nbsp;</h3>
                </label>
              </th>
              <td style="width: 20%">
                <input
                  id="neck"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 cm"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  step="0.5"
                />
              </td>

              <th style="width: 10%">
                <label for="belly" class="form-label"
                  ><h3>Belly:&nbsp;</h3>
                </label>
              </th>
              <td style="width: 20%">
                <input
                  id="belly"
                  type="number"
                  @input="onInput"
                  placeholder="1.00 cm"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  step="0.5"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <th style="width: 10%">
                <label for="qte" class="form-label"
                  ><h3>Quantity:&nbsp;</h3>
                </label>
              </th>
              <td style="width: 20%">
                <input
                  id="qte"
                  type="number"
                  @input="onInput"
                  value="10"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  step="10"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/cmd">
          <button
            type="submit"
            class="btn btn-primary btn-lg"
            v-on:click="select()"
          >
            Next
          </button></router-link
        >
      </div>
    </form>
  </div>
</template>
<style scoped>
.about {
  background-color: rgb(243, 242, 237);
  background-image: url(../assets/jj.jpg);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onInput(e) {
      this.text = e.target.value;
    },
    select: function () {
      var od = document.getElementById("od").value;
      var body = document.getElementById("body").value;
      var base = document.getElementById("base").value;
      var rim = document.getElementById("rim").value;
      var neck = document.getElementById("neck").value;
      var belly = document.getElementById("belly").value;
      var qte = document.getElementById("qte").value;

      sessionStorage.setItem("od", od);
      sessionStorage.setItem("body", body);
      sessionStorage.setItem("base", base);
      sessionStorage.setItem("rim", rim);
      sessionStorage.setItem("neck", neck);
      sessionStorage.setItem("belly", belly);
      sessionStorage.setItem("qte", qte);

      // alert(sessionStorage.getItem("od"));
    },
  },
};
</script>
