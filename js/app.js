'use strict'

import './rounter.js'
import './modal_window.js'


export const produtos = async () => {


    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/produto`
    const response = await fetch(url)
    const data = await response.json()
    // const { produtos } = data;
    // console.log(produtos)
    return {
        ...data
    }


}