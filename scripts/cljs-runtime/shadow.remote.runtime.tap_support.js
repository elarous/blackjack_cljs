goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43276,p__43277){
var map__43278 = p__43276;
var map__43278__$1 = (((((!((map__43278 == null))))?(((((map__43278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43278):map__43278);
var svc = map__43278__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43278__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43278__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43278__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43279 = p__43277;
var map__43279__$1 = (((((!((map__43279 == null))))?(((((map__43279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43279):map__43279);
var msg = map__43279__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43279__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43288,p__43289){
var map__43290 = p__43288;
var map__43290__$1 = (((((!((map__43290 == null))))?(((((map__43290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43290):map__43290);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43290__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43291 = p__43289;
var map__43291__$1 = (((((!((map__43291 == null))))?(((((map__43291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43291):map__43291);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43304,p__43305){
var map__43306 = p__43304;
var map__43306__$1 = (((((!((map__43306 == null))))?(((((map__43306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43306):map__43306);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43308 = p__43305;
var map__43308__$1 = (((((!((map__43308 == null))))?(((((map__43308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43308):map__43308);
var msg = map__43308__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43308__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43322,tid){
var map__43323 = p__43322;
var map__43323__$1 = (((((!((map__43323 == null))))?(((((map__43323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43323):map__43323);
var svc = map__43323__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43323__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43335 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43336 = null;
var count__43337 = (0);
var i__43338 = (0);
while(true){
if((i__43338 < count__43337)){
var vec__43353 = chunk__43336.cljs$core$IIndexed$_nth$arity$2(null,i__43338);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43353,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43353,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43467 = seq__43335;
var G__43468 = chunk__43336;
var G__43469 = count__43337;
var G__43470 = (i__43338 + (1));
seq__43335 = G__43467;
chunk__43336 = G__43468;
count__43337 = G__43469;
i__43338 = G__43470;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43335);
if(temp__5735__auto__){
var seq__43335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43335__$1);
var G__43471 = cljs.core.chunk_rest(seq__43335__$1);
var G__43472 = c__4556__auto__;
var G__43473 = cljs.core.count(c__4556__auto__);
var G__43474 = (0);
seq__43335 = G__43471;
chunk__43336 = G__43472;
count__43337 = G__43473;
i__43338 = G__43474;
continue;
} else {
var vec__43357 = cljs.core.first(seq__43335__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43357,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43357,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43479 = cljs.core.next(seq__43335__$1);
var G__43480 = null;
var G__43481 = (0);
var G__43482 = (0);
seq__43335 = G__43479;
chunk__43336 = G__43480;
count__43337 = G__43481;
i__43338 = G__43482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43330_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43330_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43331_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43331_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43332_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43332_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43333_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43333_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43360){
var map__43361 = p__43360;
var map__43361__$1 = (((((!((map__43361 == null))))?(((((map__43361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43361):map__43361);
var svc = map__43361__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
