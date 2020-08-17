/**
 * Es una funcion que recibe el estado y que recibe una accion
 * dentro de esta funcion se genera un nuevo estado con los cambios
 * se retorna
 * y redux toma este como el nuevo estado
 * 
 * Son Funciones puras
 */

import { createStore } from "redux";
import { ADD_ITEM,CLEAR_SHOPPING_CART } from "../actionTypes";

 export default function(state = [], action){
     const shopping_cart = state;

     if(action.type === ADD_ITEM){
         const productIfAny = shopping_cart.find(product => product.id === action.payload.id);
         if(productIfAny){
            return shopping_cart.map( product => {
                if(product.id === productIfAny.id) return { ...product, quantity: product.quantity + 1 }
                return product;
            })
         }

         return shopping_cart.concat([
            {
                ...action.payload,
                quantity: 1
            }
        ]);
     }

     if(action.type === CLEAR_SHOPPING_CART){
         return [];
     }

     return shopping_cart;
 }