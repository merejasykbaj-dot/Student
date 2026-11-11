import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Context=createContext(null);
export function ShopProvider({children}){
 const [cart,setCart]=useState({});const [favorites,setFavorites]=useState([]);const [orders,setOrders]=useState([]);const [ready,setReady]=useState(false);
 useEffect(()=>{(async()=>{try{const raw=await AsyncStorage.getItem('qazaqcoffee-state');if(raw){const data=JSON.parse(raw);setCart(data.cart||{});setFavorites(data.favorites||[]);setOrders(data.orders||[]);}}catch(e){console.warn('Storage read:',e)}finally{setReady(true)}})()},[]);
 useEffect(()=>{if(ready)AsyncStorage.setItem('qazaqcoffee-state',JSON.stringify({cart,favorites,orders})).catch(console.warn)},[cart,favorites,orders,ready]);
 const add=id=>setCart(c=>({...c,[id]:(c[id]||0)+1}));
 const decrease=id=>setCart(c=>{const next={...c};if((next[id]||0)<=1)delete next[id];else next[id]--;return next});
 const remove=id=>setCart(c=>{const next={...c};delete next[id];return next});
 const toggleFavorite=id=>setFavorites(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id]);
 const placeOrder=total=>{const order={id:String(Date.now()),items:{...cart},total,date:new Date().toLocaleString('kk-KZ')};setOrders(o=>[order,...o]);setCart({});return order};
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const value=useMemo(()=>({cart,favorites,orders,count,add,decrease,remove,toggleFavorite,placeOrder}),[cart,favorites,orders,count]);
 return <Context.Provider value={value}>{children}</Context.Provider>
}
export const useShop=()=>useContext(Context);
