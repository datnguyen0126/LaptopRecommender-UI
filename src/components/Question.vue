<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="holding">
        <div id="text-box">
          <div class="chat-icon-container-first">
            <img src="../assets/smile.png" width="30" alt=".." />
          </div>
          <h4 id="intro1"><span class="chat-intro">Hi there!</span></h4>
          <h4 id="intro2" style="" class="question-bottom">
            <span class="chat-intro"
              >I'm <strong>Dat</strong> and here to help.</span
            >
          </h4>
          <h4 id="intro3" style="" class="question-bottom">
            What's your <b>budget</b>?
          </h4>
        </div>
        <div class="question-box clearfix" style="">
          <div id="back-btn">
            <a href="#" class="faded disabled" style="opacity: 0.3">
              <img src="/img/ring.gif" class="prev-ring" />
              <span class="back-btn-in"
                ><i class="fa fa-chevron-left" aria-hidden="true"></i
              ></span>
              <span class="back-btn-text">Back</span>
            </a>
          </div>
          <div id="next-btn">
            <a href="#" class="next-btn-click" data-qtype="2">
              <img src="/img/ring.gif" class="next-ring" />
              <span class="next-btn-in"
                ><i class="fa fa-chevron-right" aria-hidden="true"></i
              ></span>
              <span class="next-btn-text">Next</span></a
            >
          </div>
          <div id="question-wrap">
            <div class="question-row">
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="200"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 200"
                >
                  <div class="center-btn">
                    <div class="budget-icon"><div>$</div></div>
                    Up to $200
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="300"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 300"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $300
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="500"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 500"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $500
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="700"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 700"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $700
                  </div>
                </a>
              </div>
            </div>
            <div class="question-row">
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="1000"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 1000"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $1,000
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="1500"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 1500"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $1,500
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="2000"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 2000"
                >
                  <div class="center-btn">
                    <div class="budget-icon">
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                      <div>$</div>
                    </div>
                    Up to $2,000
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a
                  href="#"
                  data-id="-1"
                  data-type="option"
                  class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn -1"
                >
                  <div class="center-btn">
                    <span class="icon-dream"></span>
                    Unlimited!
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "question",
  computed: {
    ...mapState({
      questions: (state) => state.questions.questions,
    }),
  },
  methods: {
    submitAnswer: function (qid, value) {
      this.$store.commit("UPDATE_ANSWER", { key: qid, value: value });
    },
  },
};
</script>
<style scoped>
.question-box {
    background: 0 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s ease-in-out;
    -webkit-animation: pageload 2s;
    -moz-animation: pageload 2s;
    -ms-animation: pageload 2s;
    -o-animation: pageload 2s;
    animation: pageload 2s;
}

#question-wrap .col-md-2, .col-md-2 {
    padding: 0 10px;
}

#question-wrap .col-md-2 {
    width: 25%;
}

@media (min-width: 768px) {
  .col-md-2 {
    max-width: 100%;
  }
}

.question-box {
    padding: 0 40px;
}

.budget-icon {
    display: block;
}

.question-btn:hover {
    background: #fff!important;
    box-shadow: 3px 3px 8px rgba(0,0,0,.1);
    color: #15b9d5!important;
}

.chat-icon-container-first {
    background: #e26e2c;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    display: inline-block;
    padding: 10px;
    position: absolute;
    left: 0;
    margin-top: -10px;
    margin-left: -15px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
#text-box h4, #holding h4 {
    letter-spacing: 0;
    color: #323844;
    font-size: 32px;
    margin-bottom: 50px;
    font-weight: 300!important;
}

#text-box h4 {
    background: rgba(22, 185, 213, 0.2) !important;
    border-radius: 10px;
    padding: 20px 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.question-btn {
    background: #fff!important;
    box-shadow: 2px 2px 2px rgba(0,0,0,.1);
    color: #6c6c6c!important;
    font-family: roboto,sans-serif;
    font-weight: 400!important;
}

#text-box h4:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid rgba(22, 185, 213, 0.2) !important;
    border-top: 10px solid rgba(22, 185, 213, 0.2) !important;
    border-bottom: 10px solid transparent;
    left: 45px;
    top: 36px;
}

#text-box h4:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    left: 50px;
    top: 38px;
}

#text-box {
    padding: 0 50px;
}

.chat-intro {
    display: block;
}

#text-box h4.question-bottom {
    margin-top: -40px;
}

.question-btn {
    padding: 20px 5px;
    display: table;
    width: 100%;
    height: auto;
    font-size: 18px;
}


.question-btn .center-btn {
    display: table-cell!important;
    vertical-align: middle!important;
}

.question-row {
    display: inline-flex;
}

.btn-hero {
    background: #1895ce;
    border-radius: 8px;
    padding: 20px 25px;
    color: #fff!important;
    text-transform: none;
    font-size: 20px;
    letter-spacing: 0;
    border: none;
}
</style>

