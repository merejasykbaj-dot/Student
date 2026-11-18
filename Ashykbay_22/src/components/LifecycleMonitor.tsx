import React,{useEffect,useRef} from 'react';
import {Text} from 'react-native';
export default function LifecycleMonitor({value}:{value:number}){
 const first=useRef(true);
 useEffect(()=>{console.log('[Lifecycle] MOUNT: Monitor құрылды');return()=>console.log('[Lifecycle] UNMOUNT: Monitor жойылды')},[]);
 useEffect(()=>{if(first.current){first.current=false;return;}console.log('[Lifecycle] UPDATE: value =',value)},[value]);
 return <Text style={{color:'#93A3BD',fontSize:12}}>Lifecycle Monitor: {value} секунд (логтарды терминалдан қараңыз)</Text>;
}
