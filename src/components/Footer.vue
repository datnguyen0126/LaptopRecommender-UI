<template>
  <footer :class="this.$route.path.includes('start') || this.$route.path.includes('about') ? footer : ''" class="d-block">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div v-if="this.$route.path.includes('start')" class="number-wrap">
            <p>
              <span id="match-num">More than 500 </span>
              <span id="pText">Products</span>
              Available
              <span style="font-size: 15px;padding-top: 6px; text-transform: none;">Price Range:
                <span id="priceRange" style="display: inline-block;font-size: 15px;font-weight: 500;text-transform: none;">5tr - 80tr VND</span>
              </span>
            </p>
            <div v-if="isSubmitable()" id="skipToResults">
              <a href="#" class="hero-btn skip-btn">
                <span v-on:click="getResultLaptops(answers)">Go to results</span>
              </a>
            </div>
          </div>
          <div v-else>Created by Dat nguyen 2020</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return {
      
      footer: 'position-fixed'
    }
  },
  computed: {
    ...mapState({
      answers: (state) => state.questions.answers
    }),
  },
  methods: {
    isSubmitable() {
      return this.answers[0] && this.answers[1].length > 0
    },
    ...mapActions({
      getResultLaptops: 'getResultLaptops',
    })
    
  },

};
</script>

<style lang="css">

.hero-btn {
  display: inline-block;
  border-radius: 4px!important;
}

a.skip-btn {
  background: 0 0;
  border: 1px solid #15b9d5!important;
  padding: 8px 15px;
  text-transform: none!important;
  letter-spacing: 0!important;
  transition: all .2s ease-in-out;
}

.number-wrap a.skip-btn {
  position: absolute;
  right: 25px;
  top: 50%;
  margin-top: -19px;
  border-color: #fff !important;
  color: #fff !important;
}

footer {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 20px;
  background:#15b9d5;
  color: white;
}
.number-wrap {
  position: relative;
  color: #fff;
}

.number-wrap p {
  color: #fff !important;
  margin: 0px !important;
  font-weight: 300!important;
  font-size: 24px!important;
}

.number-wrap p #match-num {
  font-size: 24px;
  display: inline-block;
}

#pText {
  margin-left: 5px;
  display: inline-block;
}

.number-wrap p span {
  display: block;
  font-weight: 300;
}
</style>

