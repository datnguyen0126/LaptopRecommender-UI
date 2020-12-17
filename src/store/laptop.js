import { API_HOST } from "@/store/env";
import axios from 'axios'
import router from "@/router";
import Vue from 'vue'

const result_url = API_HOST + 'result'

const state = {
    number: 0,
    laptops: []

};

const actions = {
    getResultLaptops(context, data) {
        Vue.$toast.info('Getting data, please wait...', { position: 'top-right', duration: 99999999 })
        return axios.post(result_url + '/get_result_products', { answers: data.data, shop: data.shop, page_size: data.page_size }).then(data => {
                context.commit("setLaptop", data);
                Vue.$toast.clear()
                router.push("/result")
            }).catch(() => {
                Vue.$toast.clear()
                Vue.$toast.error('No data found, please choose again', { position: 'top-right' })
            });
    },
    countResultLaptops(context, data){
        return axios.post(result_url + '/get_result_products', { answers: data.data, shop: data.shop, page_size: data.page_size, count: 1 }).then(data => {
            context.commit("setNumber", data);
        })
    }

};

const mutations = {
    setLaptop(state, data){
        if (data && data.data) {
            state.laptops = data.data
        }
    },
    setNumber(state, data){
        if (data && data.data) {
            state.number = data.data.number
        }
    }

};

export const laptops = {
    namespace: true,
    state,
    actions,
    mutations,
};
