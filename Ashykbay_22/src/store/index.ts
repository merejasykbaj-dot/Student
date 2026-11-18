import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
export type Task = {id:string; title:string; done:boolean};
type State = {mode:'focus'|'break'|'stopwatch'; seconds:number; running:boolean; focusSessions:number; totalFocusSeconds:number; laps:number[]; tasks:Task[]};
const initialState:State={mode:'focus',seconds:1500,running:false,focusSessions:0,totalFocusSeconds:0,laps:[],tasks:[]};
const duration=(mode:State['mode'])=>mode==='focus'?1500:mode==='break'?300:0;
const slice=createSlice({name:'focus',initialState,reducers:{
 start:s=>{s.running=true},pause:s=>{s.running=false},reset:s=>{s.running=false;s.seconds=duration(s.mode);s.laps=[]},
 setMode:(s,a:PayloadAction<State['mode']>)=>{s.mode=a.payload;s.running=false;s.seconds=duration(a.payload);s.laps=[]},
 tick:s=>{if(!s.running)return;if(s.mode==='stopwatch'){s.seconds+=1;return;}if(s.seconds>0){s.seconds-=1;if(s.mode==='focus')s.totalFocusSeconds+=1;}if(s.seconds===0){s.running=false;if(s.mode==='focus')s.focusSessions+=1;}},
 lap:s=>{if(s.mode==='stopwatch'&&s.running)s.laps.unshift(s.seconds)},
 addTask:(s,a:PayloadAction<Task>)=>{s.tasks.unshift(a.payload)},toggleTask:(s,a:PayloadAction<string>)=>{const t=s.tasks.find(x=>x.id===a.payload);if(t)t.done=!t.done},removeTask:(s,a:PayloadAction<string>)=>{s.tasks=s.tasks.filter(x=>x.id!==a.payload)},
 hydrate:(s,a:PayloadAction<Partial<State>>)=>{Object.assign(s,a.payload,{running:false})}
}});
export const actions=slice.actions;export const store=configureStore({reducer:slice.reducer});export type RootState=ReturnType<typeof store.getState>;export type AppDispatch=typeof store.dispatch;
