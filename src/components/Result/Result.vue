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
                  <div class="new-sidebar">
                    <h4>Shop</h4>
                    <a class="sidebar-click" href="#">
                      <span class="b-text">
                        <select v-model=shop class="form-control form-control-lg" v-on:change="getResultLaptops({ data:answers, shop:shop})">
                          <option v-for="(shop, index) in this.shops" :key="index" :value="shop">{{shop}}</option>
                        </select>
                      </span>
                    </a>
                  </div>
                  <div class="new-sidebar">
                    <h4>Quantity</h4>
                    <a class="sidebar-click" href="#">
                      <span class="b-text">
                        <select v-model=pageSize class="form-control form-control-lg"
                                v-on:change="getResultLaptops({ data:answers, shop:shop, page_size:pageSize})">
                          <option v-for="(size, index) in this.pageSizes" :key="index" :value="size">{{size}}</option>
                        </select>
                      </span>
                    </a>
                  </div>
                  <div v-for="(answer, index) in answers" :key="index">
                    <div v-if="Array.isArray(answer)">
                      <div v-if="answer.length > 0">
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
                    </div>
                    <div v-else>
                      <div v-if="answer !== undefined && answer !== ''" class="new-sidebar">
                        <h4>{{ keywords[index] }}</h4>
                        <a class="sidebar-click" href="#">
                            <span class="b-text" v-if="answer">
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
                      :href="laptops[0].link"
                      target="_blank"
                      class="main-rec-buy"
                      ><img width="412px" height="310px"
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
                  <p class="text-center cheapest-r">From retailer</p>
                  <a
                    class="retailer-logo-a"
                    :href="laptops[0].link"
                    target="_blank"
                    rel="nofollow"
                    data-r="Amazon"
                    data-v="1155.28"
                    data-t="Lenovo IdeaPad 720S i7 15.6 inch IPS SSD Grey"
                  >
                    <img
                      class="retailer-logo"
                      :src=laptops[0].seller
                      alt="Amazon"
                    />
                  </a>
                  <a
                    :href="laptops[0].link"
                    class="btn btn-primary view-at"
                    :style="[laptops[0].shop.includes('tiki') ? {'background-color': '#189eff'} : {'background-color': '#c8191f'}]"
                    target="_blank"
                    rel="nofollow"
                    >
                    View at  {{ laptops[0].shop }}
                  </a>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-xs-12 text-center">
                <div class="main-laptop">
                  <a
                    rel="nofollow"
                    class="hidden-xs"
                    target="_blank"
                    ><h4>{{ laptops[0].name }}</h4></a
                  >
                </div>
                <div class="main-rec-action-bar">
                  <ul>
                    <li>
                      <a href="#" class="" v-on:click="setModalSpecs(0)" data-toggle="modal" data-target="#ratingModal">
                        Rating
                      </a>
                    </li>
                    <li>
                      <a href="#" class="a-specs" v-on:click="setModalSpecs(0)" data-toggle="modal" data-target="#specsModal">
                        <span class="far fa-file-alt"></span> Specs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a name="a-justification"></a>
          <div id="justification" class="recommendation r-box scrollspy">
            <h2>How we choose item for you</h2>
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
                    <div v-for="(answer, index) in answers" :key="index">
                      <div v-if="Array.isArray(answer) && index == 1">
                        <div class="row q-block" v-for="(option, index) in answer" :key="index">
                          <div class="col-md-12">
                          </div>
                          <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="o-title">
                              <span class="o-icon icon-users res-icn"></span>
                              <div class="o-rating rating text-center band3">{{ option }}</div>
                            </div>
                          </div>
                          <div class="col-md-1 col-sm-1 col-xs-12">
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12 o-justif ">
                            <p>
                              {{ reply[option] }}
                            </p>
                          </div>
                          <div class="col-md-12 col-xs-12 sepr"><hr></div>
                        </div>
                      </div>
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
                      <div class="row is-flex c-block my-4">
                        <div class="col-md-8 col-sm-8 col-xs-12 v-middle">
                          <div class="c-alt">
                            <div class="res-wrap">
                              <a
                                  rel="nofollow"
                                  :href="laptop.link"
                                  target="_blank"
                                  class="main-rec-buy"
                              ><img  width="200px" height="150px"
                                  :src="laptop.thumbnails"
                              /></a>
                              <a rel="nofollow" target="_blank" class="close-alt-buy" :href="laptop.link" data-r="Amazon" data-v="239.99" data-t="Acer Chromebook 14">
                                <h3 style="margin-top: 15px !important;font-weight: 400 !important; text-align: center !important;color:#333;">
                                  {{ laptop.name }}</h3>
                              </a>
                            </div>
                          </div>
                          <div class="alt-rec-action-bar text-center">
                            <ul>
                              <li>
                                <a href="#" class="" data-toggle="modal" v-on:click="setModalSpecs(index)" data-target="#ratingModal">
                                  <span class="far fa-like"></span> Rating
                                </a>
                              </li>
                              <li>
                                <a href="#" class="a-specs" v-on:click="setModalSpecs(index)" data-toggle="modal" data-target="#specsModal">
                                  <span class="far fa-file-alt"></span> Specs
                                </a>
                              </li>
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
                            <p class="text-center cheapest-r">From retailer</p>
                            <a
                                class="retailer-logo-a"
                                :href="laptop.link"
                                target="_blank"
                                rel="nofollow"
                            >
                              <img
                                  class="retailer-logo"
                                  :src=laptop.seller
                              />
                            </a>
                            <a
                                :href="laptop.link"
                                class="btn btn-danger view-at"
                                :style="[laptop.shop.includes('tiki') ? {'background-color': '#189eff'} : {'background-color': '#c8191f'}]"
                                target="_blank"
                                rel="nofollow"
                            >
                              View at {{ laptop.shop }}
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

        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="specsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">{{ specs.name }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-striped no-margin">
              <tbody>
              <tr>
                <td>Display Specification</td>
                <td>{{ specs.display }}</td>
              </tr>
              <tr>
                <td>Display Size</td>
                <td>{{ specs.screen_size }}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{{ specs.cpu}}</td>
              </tr>
              <tr>
                <td>RAM Size</td>
                <td>{{ specs.ram }}</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>{{ specs.disk }}</td>
              </tr>
              <tr>
                <td>Graphics Card</td>
                <td>{{ specs.vga }}</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>{{ specs.battery }}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{{ specs.weight }}</td>
              </tr>
              <tr>
                <td>Dimension</td>
                <td v-html="specs.dimension"></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Ok</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="ratingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ratingModalCenter">Ratings</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Do you think this product is suitable?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="addRating(0)">No, wrong item</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="addRating(1)">Yes, cool laptop</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Vue from 'vue'
import axios from "axios";
import { API_HOST } from "@/store/env";

const REPLY_URL = API_HOST + 'result/reply/get'
const RATING_URL = API_HOST + 'data/add_rating'

export default {
  name: "result",
  created(){
    this.getReply()

  },
  mounted() {
    Vue.$toast.clear()
    if (this.laptops.length === 0){
      this.$router.push('/')
    }
  },
  data(){
    return {
      shops: ['all', 'philong', 'xuanvinh', 'mega'],
      shop: 'all',
      keywords: ['Budget', 'Purpose', 'Place', 'Features', 'Screen size', 'Operating system', 'Cpu', 'Gpu', 'Weight'],
      reply: {
        'Web browsing': '',
        "Document": '',
        "Watching Movies": '',
        "Light Gaming": '',
        "Heavy Gaming": '',
        "Photo editing (pro)": '',
        "Photo editing (basic)": '',
        "Video production": '',
        "3D design": '',
        "Programming": '',
      },
      pageSize: 5,
      pageSizes: [5, 10, 20, 50],
      page: 1,
      currentSelect: '',
      specs: {
        id: '',
        name: '',
        dimension: '',
        display: '',
        screen_size: '',
        vga: '',
        cpu: '',
        ram: '',
        disk: '',
        battery: '',
        weight: ''
      }

    }
  },
  methods: {
    async getReply(){
      for(let i = 0; i < this.answers.length; i++){
        if(Array.isArray(this.answers[i]) && i == 1){
          this.answers[i].forEach(option => {
            return axios({
              method: 'post',
              url: REPLY_URL,
              data: {
                answer: option
              }
            }).then(data => this.reply[option] = data.data.content)
          })
        }
      }
    },
    async addRating(suit){
      return axios({
        method: 'post',
        url: RATING_URL,
        data: {
          laptop_id: this.specs.id,
          suitable: suit
        }
      })
    },
    setModalSpecs(laptopNumber){
      let laptop = this.laptops[laptopNumber]
      this.specs.id = laptop.id
      this.specs.name = laptop.name
      this.specs.dimension = laptop.dimension
      this.specs.display = laptop.display
      this.specs.screen_size = laptop.screen_size
      this.specs.vga = laptop.vga
      this.specs.cpu = laptop.cpu
      this.specs.ram = laptop.ram
      this.specs.disk = laptop.disk
      this.specs.battery = laptop.battery
      this.specs.weight = laptop.weight
    },
    ...mapActions({
      getResultLaptops: 'getResultLaptops',
    })
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
