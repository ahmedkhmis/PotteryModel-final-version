<template>
  <div class="commande p-5">
    <center>
      <h1 class="p-5">Commande</h1>
      <h3>Total Price is {{ parseFloat(prixU * qte).toFixed(3) }} DT</h3>

      <h5>Unit Price is {{ parseFloat(prixU).toFixed(3) }} DT</h5>
    </center>

    <form
      action="https://formsubmit.co/asma3nii@gmail.com"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="hidden" name="_subject" value="New Commande " />
      <div class="p-5">
        <div class="form-group input-group-lg">
          <div class="form-row p-3">
            <div class="col mb-3">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div class="col">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div class="form-group p-3 mb-5">
          <textarea
            placeholder="Your Message"
            class="form-control"
            id="msg"
            v-model="text"
            name="message"
            rows="10"
            required
          ></textarea>
          <input type="file" name="attachment" accept="image/png, image/jpeg" />
        </div>

        <button
          type="submit"
          v-on:click="select()"
          class="btn btn-lg btn-dark btn-block mb-5"
        >
          send mail
        </button>
      </div>
      <input type="hidden" name="_next" value="http://localhost:8081/" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      od: sessionStorage.getItem("od"),
      body: sessionStorage.getItem("body"),
      base: sessionStorage.getItem("base"),
      rim: sessionStorage.getItem("rim"),
      neck: sessionStorage.getItem("neck"),
      belly: sessionStorage.getItem("belly"),
      prixU: 0,
      qte: sessionStorage.getItem("qte"),

      text: "",
    };
  },
  mounted() {
    var o = this.od / 3;
    var bd = this.body / 5;
    var bs = this.base / 2;
    var n = this.neck / 10;
    var r = this.rim / 5;
    var bl = this.belly / 10;
    this.prixU = (o + bd + bs + bl + n + r) * 0.1;
  },
  methods: {
    select: function () {
      this.text = this.text.concat(
        "\n",
        "Orifice Diameter: ",
        this.od,
        " cm\n",
        " Body: ",
        this.body,
        " cm\n",
        " Base: ",
        this.base,
        " cm\n",
        " rim: ",
        this.rim,
        " mm\n",
        " Neck: ",
        this.neck,
        " cm\n",
        " Belly: ",
        this.belly,
        " cm\n",
        "Le prix unitaire est ",
        parseFloat(this.prixU).toFixed(3),
        " DT\n",
        "La quantité ",
        this.qte,

        "Le prix Totale est ",
        parseFloat(this.prixU * this.qte).toFixed(3),
        " DT\n",
      
      );
      sessionStorage.clear();
      alert("Confirm your mail");
    },
    price() {},
  },
};
</script>
<style scoped>
.commande {
  background-color: rgb(243, 242, 237);
  background-image: url(../assets/jj.jpg);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
}
</style>
