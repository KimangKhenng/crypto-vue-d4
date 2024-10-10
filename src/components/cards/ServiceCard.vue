<template>
  <div class="col-md-4">
    <div class="box">
      <slot name="top"></slot>
      <div class="img-box">
        <img :src="image" alt="" />
      </div>
      <div class="detail-box">
        <h5>{{ name }}</h5>
        <p>
          {{ desc }}
        </p>
        <slot name="buttom"></slot>
        <a href=""> Read More </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "desc", "image"],
};
</script>