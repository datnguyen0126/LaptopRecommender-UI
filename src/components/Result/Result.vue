<template>
  <section class="result-page result-wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar">
            <div class="mob-sidebar-wrap">
              <router-link
                  to="/laptops/start"
                class="white-result-btn click-start-over"
                style="margin-top: 0px"
                >Start Over</router-link
              >
              <div class="sidebar-filters">
                <div class="sidebar-head">
                  <p>
                    <i class="fa fa-sliders-h mr-3" aria-hidden="true"></i>
                    Your Choices
                  </p>
                </div>
                <div id="optionsSwitch" class="filter-content">
                  <div v-for="(answer, index) in answers" :key="index">
                    <div  v-if="answer.length > 0">
                      <div v-if="Array.isArray(answer)">
                          <div class="new-sidebar">
                            <h4>{{ keywords[index] }}</h4>
                            <a class="sidebar-click" href="#">
                              <span class="b-text" v-for="(option, index) in answer" :key="index">
                                <span style="margin-right: 5px">
<!--                                  <i class="fa fa-money-bill-wave"></i>-->
                                </span>
                                {{ option }}
                              </span>
                            </a>
                          </div>
                      </div>
                      <div v-else><div class="new-sidebar">
                        <h4>{{ keywords[index] }}</h4>
                        <a class="sidebar-click" href="#">
                          <span class="b-text">
                            <span style="margin-right: 5px">
<!--                              <i class="fa fa-money-bill-wave"></i>-->
                            </span>
                            {{ answer }}
                          </span>
                        </a>
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 rec-container">
          <div class="row results-menu fixed" style="width: 878px">
            <div class="col-xs-4">
              <a
                href="#main-recommendation"
                data-id="a-main-recommendation"
                data-a="Main Recommendation"
                >#1 Match</a
              >
            </div>
            <div class="col-xs-4">
              <a
                href="#justification"
                data-id="a-justification"
                data-a="Justification"
                >Why it fits</a
              >
            </div>
            <div class="col-xs-4">
              <a
                href="#alternatives"
                data-id="a-alternatives"
                data-a="Alternatives"
                >More matches</a
              >
            </div>
          </div>
          <a name="a-main-recommendation"></a>
          <div
            id="main-recommendation"
            class="main-recommendation recommendation r-box scrollspy"
            style="margin-top: 0px"
          >
            <div class="row is-flex">
              <div class="col-md-8 col-sm-8 col-xs-12">
                <h2 style="margin-bottom: 30px">My recommendation...</h2>
              </div>
            </div>
            <div class="row is-flex">
              <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="main-laptop text-center">
                  <div class="res-wrap">
                    <a
                      rel="nofollow"
                      :href="shop_url.concat(laptops[0].link)"
                      target="_blank"
                      class="main-rec-buy"
                      data-r="Amazon"
                      data-v="1155.28"
                      data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                      ><img
                        :src="laptops[0].thumbnails"
                    /></a>
                  </div>
                </div>
              </div>
              <div
                class="col-md-4 col-sm-4 col-xs-12 text-center v-middle main-rec-r"
              >
                <div class="retailers-container">
                  <div class="price"><span>{{ laptops[0].price | formatNumber }}</span><span>vnd</span></div>
                  <p
                    class="text-center cheapest-r"
                    data-toggle="tooltip"
                    title="Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product."
                  >
                    {{ laptops[0].created_at }}
                  </p>
                  <p class="text-center cheapest-r">Cheapest Retailer</p>
                  <a
                    class="retailer-logo-a"
                    :href="shop_url.concat(laptops[0].link)"
                    target="_blank"
                    rel="nofollow"
                    data-r="Amazon"
                    data-v="1155.28"
                    data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                  >
                    <img
                      class="retailer-logo"
                      src="https://salt.tikicdn.com/ts/upload/35/1f/42/881848473f9a789fc562d1a9cdac8ca2.png"
                      alt="Amazon"
                    />
                  </a>
                  <a
                    :href="shop_url.concat(laptops[0].link)"
                    class="btn btn-primary view-at"
                    target="_blank"
                    rel="nofollow"
                    >View at Tiki.vn</a
                  >
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-xs-12 text-center">
                <div class="main-laptop">
                  <a
                    rel="nofollow"
                    class="hidden-xs"
                    target="_blank"
                    href="https://www.amazon.com/Lenovo-81CR0002US-IdeaPad-Touchscreen-Laptop/dp/B076CT8YRV?SubscriptionId=AKIAJW2GHNWIJGJJNIHQ&amp;tag=choos072-20&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B076CT8YRV"
                    data-r="Amazon"
                    data-v="1155.28"
                    data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                    ><h4>{{ laptops[0].name }}</h4></a
                  >
                </div>
                <div class="main-rec-action-bar">
                  <ul>
                    <li>
                      <a
                        href="/login?lid=59762&amp;product=laptops&amp;rul=/us/laptops/results/ch5fa67b48060ef"
                        class=""
                      >
                        <span class="far fa-heart"></span> Shortlist</a
                      >
                    </li>
                    <li>
                      <a href="#" class="a-specs" data-id="59762"
                        ><span class="far fa-file-alt"></span> Specs</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a name="a-justification"></a>
          <div id="justification" class="recommendation r-box scrollspy">
            <h2>How well it fits your selected needs</h2>
            <div class="row is-flex">
              <div class="col-md-12">
                <div class="row is-flex option-score-bands" style="display: none;">
                  <div class="col-md-3 col-sm-4 col-xs-6 option-item v-bottom"><span>Social Media</span><div class="rating text-center band3">Outstanding</div></div>
                  <div class="col-md-12 col-xs-12 togl-wrap s-more">
                    <a href="javascript:void(0)" class="btn btn-primary btn-orange toggldown show-more-justf">Show Details <i class="fa fa-angle-down"></i></a>
                  </div>
                  <div class="col-sm-12 col-xs-12 hidden-lg hidden-md change-answer-b">
                    <span class="or">- Or -</span>
                    <a href="#" class="btn-rev-click">Change Answers</a>
                  </div>
                </div>
                <div class="row is-flex option-score-justification" style="">
                  <div class="col-md-12">
                    <div class="row q-block">
                      <div class="col-md-12">
                        <h4 class="text-left">Purpose</h4>
                      </div>
                      <div class="col-md-3 col-sm-3 col-xs-12">
                    </div>
                      <div class="col-md-6 col-sm-6 col-xs-12 o-justif hidden-xs"></div>
                    </div>
                    <div class="row q-block">
                      <div class="col-md-12">
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="o-title">
                          <span class="o-icon icon-users res-icn"></span>
                          <div class="o-rating rating text-center band3">Social Media</div>
                        </div>
                      </div>
                      <div class="col-md-1 col-sm-1 col-xs-12">
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-12 o-justif ">
                        <p>Facebook, twitter etc require
                          <strong>little processing power</strong>
                          or screen specification so the HP Probook 450 G5 2XR66PA will do just fine.
                        </p>
                      </div>
                      <div class="col-md-12 col-xs-12 sepr"><hr></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a name="a-alternatives"></a>
          <div id="alternatives" class="recommendation r-box scrollspy" style="margin-bottom: 0;">
            <h2>More laptop matches</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="r-alt close-alternatives">
                  <div v-for="(laptop, index) in laptops" :key="index" class="">
                    <div  v-if="index > 0" class="af-wrapper clearfix">
                      <div class="row is-flex c-block">
                        <div class="col-md-8 col-sm-8 col-xs-12 v-middle">
                          <div class="c-alt">
                            <div class="res-wrap">
                              <a
                                  rel="nofollow"
                                  :href="shop_url.concat(laptop.link)"
                                  target="_blank"
                                  class="main-rec-buy"
                                  data-r="Amazon"
                                  data-v="1155.28"
                                  data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                              ><img
                                  :src="laptop.thumbnails"
                              /></a>
                              <a rel="nofollow" target="_blank" class="close-alt-buy" :href="shop_url.concat(laptop.link)" data-r="Amazon" data-v="239.99" data-t="Acer Chromebook 14">
                                <h3 style="margin-top: 15px !important;font-weight: 400 !important; text-align: center !important;color:#333;">
                                  {{ laptop.name }}</h3>
                              </a>
                            </div>
                          </div>
                          <div class="alt-rec-action-bar text-center">
                            <ul><li><a href="/login?lid=796&amp;product=laptops&amp;rul=/us/laptops/results/ch5fa6a6dce5a23" class=""><span class="far fa-heart"></span> Shortlist</a></li>
                              <li><a href="#" class="a-specs" data-id="796"><span class="far fa-file-alt"></span> Specs</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12 text-center v-middle">
                          <div class="retailers-container">
                            <div class="price"><span>{{ laptop.price | formatNumber }}</span><span>vnd</span></div>
                            <p
                                class="text-center cheapest-r"
                                data-toggle="tooltip"
                                title="Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product."
                            >
                              {{ laptop.created_at }}
                            </p>
                            <p class="text-center cheapest-r">Cheapest Retailer</p>
                            <a
                                class="retailer-logo-a"
                                :href="shop_url.concat(laptop.link)"
                                target="_blank"
                                rel="nofollow"
                                data-r="Amazon"
                                data-v="1155.28"
                                data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                            >
                              <img
                                  class="retailer-logo"
                                  src="https://salt.tikicdn.com/ts/upload/35/1f/42/881848473f9a789fc562d1a9cdac8ca2.png"
                                  alt="Amazon"
                              />
                            </a>
                            <a
                                :href="shop_url.concat(laptop.link)"
                                class="btn btn-primary view-at"
                                target="_blank"
                                rel="nofollow"
                            >View at Tiki.vn</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "result",
  mounted() {
    if (this.laptops.length === 0){
      this.$router.push('/')
    }
  },
  data(){
    return {
      shop_url: 'https://tiki.vn',
      keywords: ['Budget', 'Purpose', 'Place', 'Features', 'Screen size, Operating system', 'Cpu', 'Gpu', 'Weight'],

    }
  },
  computed: {
    ...mapState({
      answers: (state) => state.questions.answers,
      laptops: (state) => state.laptops.laptops
    }),
  },
  filters: {
    formatNumber (value) {
      return `${value.toLocaleString()} `
    },
  }
};
</script>

<style>
@import "./result.scss";
</style>
