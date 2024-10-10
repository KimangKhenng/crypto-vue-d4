<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/about-img.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="images/about-img.png" class="d-block w-100" alt="...">
            </div>
            <!-- <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div> -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
export default {
    mounted() {
        // After finishing initalization
        this.$emit('finished', '2323-52352-352-35-235')
    }
}
</script>