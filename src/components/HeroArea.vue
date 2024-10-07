<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="images/hero-bg.png" alt="Change" />
      </div>
    </div>

    <!-- header section strats -->
    <!-- <span :class="{ 'red-text': changedColor }"> {{ services[0] }} </span>
    <button @click="switchColor">Switch to red</button>
    <p class="red-text">{{ $parent.text }}</p>
    <button @click=" this.$parent.text = 'Changed from child'">Change parent value</button> -->

    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> {{ text }} </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="why.html">Why Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="team.html">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i> Login</a>
              </li>
              <form class="form-inline">
                <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class="slider_section">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Crypto <br />
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <button @click="updateTitle" class="btn1">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Crypto <br />
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1"> Read More </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Crypto <br />
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1"> Read More </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
    <!-- end slider section -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    text: {
      type: String,
      default: 'Hello'
    }
  },
  data() {
    return {
      services: ["Hello", "Hello2"],
      changedColor: false
    };
  },
  methods: {
    updateTitle() {
      this.services[0] = "Updated!";
    },
    switchColor() {
      this.changedColor = !this.changedColor
    }
  },
  beforeCreate() {
    console.log("Before created");
    console.log(this.services);
  },
  async created() {
    const response = await axios.get("/v1/courses");
    // Call API (Backend) to get data
    console.log("Created and after beforeCreate");
    console.log(response.data);
  },
  beforeMount() {
    // Component appeared in DOM
    console.log("Before mounted");
  },
  mounted() {
    // Component appeared in DOM
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before updated");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
};
</script>
<style>
.red-text {
  color: red;
}
</style>
<!-- Useful when overriding global style -->