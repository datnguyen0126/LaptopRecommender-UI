import { API_HOST } from "@/store/env";
import axios from 'axios'
import router from "@/router";
import Vue from 'vue'

const result_url = API_HOST + 'result'

const state = {
    laptops: []

};

const actions = {
    getResultLaptops(context, data) {
        return axios.post(result_url + '/get_result_products', { answers: data }).then(data => {
                context.commit("setLaptop", data);
                router.push("/result")
            }).catch(() => Vue.$toast.error('No data found, please choose again', { position: 'top-right' }));
    },

};

const mutations = {
    setLaptop(state, data){
        if (data && data.data) {
            state.laptops = data.data
        }
    }

};

export const laptops = {
    namespace: true,
    state,
    actions,
    mutations,
};
