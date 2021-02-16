goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$start_trace(p__33692){
var map__33693 = p__33692;
var map__33693__$1 = (((((!((map__33693 == null))))?(((((map__33693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33693):map__33693);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$tracing_cb_debounced(){
var seq__33695_33738 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs));
var chunk__33696_33739 = null;
var count__33697_33740 = (0);
var i__33698_33741 = (0);
while(true){
if((i__33698_33741 < count__33697_33740)){
var vec__33714_33742 = chunk__33696_33739.cljs$core$IIndexed$_nth$arity$2(null,i__33698_33741);
var k_33743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714_33742,(0),null);
var cb_33744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714_33742,(1),null);
try{var G__33718_33748 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_33744.cljs$core$IFn$_invoke$arity$1 ? cb_33744.cljs$core$IFn$_invoke$arity$1(G__33718_33748) : cb_33744.call(null,G__33718_33748));
}catch (e33717){var e_33749 = e33717;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33743,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_33749], 0));
}

var G__33750 = seq__33695_33738;
var G__33751 = chunk__33696_33739;
var G__33752 = count__33697_33740;
var G__33753 = (i__33698_33741 + (1));
seq__33695_33738 = G__33750;
chunk__33696_33739 = G__33751;
count__33697_33740 = G__33752;
i__33698_33741 = G__33753;
continue;
} else {
var temp__5735__auto___33757 = cljs.core.seq(seq__33695_33738);
if(temp__5735__auto___33757){
var seq__33695_33758__$1 = temp__5735__auto___33757;
if(cljs.core.chunked_seq_QMARK_(seq__33695_33758__$1)){
var c__4556__auto___33759 = cljs.core.chunk_first(seq__33695_33758__$1);
var G__33760 = cljs.core.chunk_rest(seq__33695_33758__$1);
var G__33761 = c__4556__auto___33759;
var G__33762 = cljs.core.count(c__4556__auto___33759);
var G__33763 = (0);
seq__33695_33738 = G__33760;
chunk__33696_33739 = G__33761;
count__33697_33740 = G__33762;
i__33698_33741 = G__33763;
continue;
} else {
var vec__33719_33764 = cljs.core.first(seq__33695_33758__$1);
var k_33765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33719_33764,(0),null);
var cb_33766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33719_33764,(1),null);
try{var G__33723_33767 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_33766.cljs$core$IFn$_invoke$arity$1 ? cb_33766.cljs$core$IFn$_invoke$arity$1(G__33723_33767) : cb_33766.call(null,G__33723_33767));
}catch (e33722){var e_33771 = e33722;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33765,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_33771], 0));
}

var G__33772 = cljs.core.next(seq__33695_33758__$1);
var G__33773 = null;
var G__33774 = (0);
var G__33775 = (0);
seq__33695_33738 = G__33772;
chunk__33696_33739 = G__33773;
count__33697_33740 = G__33774;
i__33698_33741 = G__33775;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.js.map
