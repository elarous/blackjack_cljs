goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37627){
var map__37629 = p__37627;
var map__37629__$1 = (((((!((map__37629 == null))))?(((((map__37629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37629):map__37629);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37638_37703 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37639_37704 = null;
var count__37640_37705 = (0);
var i__37641_37706 = (0);
while(true){
if((i__37641_37706 < count__37640_37705)){
var vec__37657_37707 = chunk__37639_37704.cljs$core$IIndexed$_nth$arity$2(null,i__37641_37706);
var k_37708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37657_37707,(0),null);
var cb_37709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37657_37707,(1),null);
try{var G__37663_37710 = cljs.core.deref(re_frame.trace.traces);
(cb_37709.cljs$core$IFn$_invoke$arity$1 ? cb_37709.cljs$core$IFn$_invoke$arity$1(G__37663_37710) : cb_37709.call(null,G__37663_37710));
}catch (e37661){var e_37711 = e37661;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37708,"while storing",cljs.core.deref(re_frame.trace.traces),e_37711], 0));
}

var G__37714 = seq__37638_37703;
var G__37715 = chunk__37639_37704;
var G__37716 = count__37640_37705;
var G__37717 = (i__37641_37706 + (1));
seq__37638_37703 = G__37714;
chunk__37639_37704 = G__37715;
count__37640_37705 = G__37716;
i__37641_37706 = G__37717;
continue;
} else {
var temp__5735__auto___37718 = cljs.core.seq(seq__37638_37703);
if(temp__5735__auto___37718){
var seq__37638_37719__$1 = temp__5735__auto___37718;
if(cljs.core.chunked_seq_QMARK_(seq__37638_37719__$1)){
var c__4556__auto___37720 = cljs.core.chunk_first(seq__37638_37719__$1);
var G__37721 = cljs.core.chunk_rest(seq__37638_37719__$1);
var G__37722 = c__4556__auto___37720;
var G__37723 = cljs.core.count(c__4556__auto___37720);
var G__37724 = (0);
seq__37638_37703 = G__37721;
chunk__37639_37704 = G__37722;
count__37640_37705 = G__37723;
i__37641_37706 = G__37724;
continue;
} else {
var vec__37668_37725 = cljs.core.first(seq__37638_37719__$1);
var k_37726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37668_37725,(0),null);
var cb_37727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37668_37725,(1),null);
try{var G__37675_37728 = cljs.core.deref(re_frame.trace.traces);
(cb_37727.cljs$core$IFn$_invoke$arity$1 ? cb_37727.cljs$core$IFn$_invoke$arity$1(G__37675_37728) : cb_37727.call(null,G__37675_37728));
}catch (e37672){var e_37729 = e37672;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37726,"while storing",cljs.core.deref(re_frame.trace.traces),e_37729], 0));
}

var G__37730 = cljs.core.next(seq__37638_37719__$1);
var G__37731 = null;
var G__37732 = (0);
var G__37733 = (0);
seq__37638_37703 = G__37730;
chunk__37639_37704 = G__37731;
count__37640_37705 = G__37732;
i__37641_37706 = G__37733;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
