"use strict";
import axios from 'axios'
import {axiosConfig} from '../config/axiosConfig.js'

const datasetAllTypes = [
    { type: 'F', typeName: 'forecast', typeCHName: '預報' },
    { type: 'O', typeName: 'observe', typeCHName: '觀測' }
];


export function getDatasetType(typeName){
    for(let i = 0; i < datasetAllTypes.length; i++){
        if(datasetAllTypes[i].typeName === typeName){
           return datasetAllTypes[i];
        }
    } 
    return null;
}




export function getDatasetList(type){
    var url = '';
    url = ['/datasetList/',type].join('');
    return axios.get(url,axiosConfig);
}




export function initialDatasetList(vm, response){
    var msg = response.data;
    if(msg != null && msg.success === true){
        var datasetList = msg.data;
        vm.$store.dispatch({
            type:'dataset/changeDatasetList',
            datasetList: datasetList
        });
        return true;
    }else{
        return false;
    }
}



