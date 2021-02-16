goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34010 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34011 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34011);

try{try{var seq__34018 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34019 = null;
var count__34020 = (0);
var i__34021 = (0);
while(true){
if((i__34021 < count__34020)){
var vec__34034 = chunk__34019.cljs$core$IIndexed$_nth$arity$2(null,i__34021);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(1),null);
var temp__5733__auto___34119 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34119)){
var effect_fn_34120 = temp__5733__auto___34119;
(effect_fn_34120.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34120.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34120.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34125 = seq__34018;
var G__34126 = chunk__34019;
var G__34127 = count__34020;
var G__34128 = (i__34021 + (1));
seq__34018 = G__34125;
chunk__34019 = G__34126;
count__34020 = G__34127;
i__34021 = G__34128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34018);
if(temp__5735__auto__){
var seq__34018__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34018__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34018__$1);
var G__34137 = cljs.core.chunk_rest(seq__34018__$1);
var G__34138 = c__4556__auto__;
var G__34139 = cljs.core.count(c__4556__auto__);
var G__34140 = (0);
seq__34018 = G__34137;
chunk__34019 = G__34138;
count__34020 = G__34139;
i__34021 = G__34140;
continue;
} else {
var vec__34041 = cljs.core.first(seq__34018__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34041,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34041,(1),null);
var temp__5733__auto___34141 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34141)){
var effect_fn_34142 = temp__5733__auto___34141;
(effect_fn_34142.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34142.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34142.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34143 = cljs.core.next(seq__34018__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__34018 = G__34143;
chunk__34019 = G__34144;
count__34020 = G__34145;
i__34021 = G__34146;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__33664__auto___34147 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__33665__auto___34148 = (end__33664__auto___34147 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33665__auto___34148,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__33664__auto___34147);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34010);
}} else {
var seq__34046 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34047 = null;
var count__34048 = (0);
var i__34049 = (0);
while(true){
if((i__34049 < count__34048)){
var vec__34063 = chunk__34047.cljs$core$IIndexed$_nth$arity$2(null,i__34049);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34063,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34063,(1),null);
var temp__5733__auto___34153 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34153)){
var effect_fn_34154 = temp__5733__auto___34153;
(effect_fn_34154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34154.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34156 = seq__34046;
var G__34157 = chunk__34047;
var G__34158 = count__34048;
var G__34159 = (i__34049 + (1));
seq__34046 = G__34156;
chunk__34047 = G__34157;
count__34048 = G__34158;
i__34049 = G__34159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34046);
if(temp__5735__auto__){
var seq__34046__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34046__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34046__$1);
var G__34160 = cljs.core.chunk_rest(seq__34046__$1);
var G__34161 = c__4556__auto__;
var G__34162 = cljs.core.count(c__4556__auto__);
var G__34163 = (0);
seq__34046 = G__34160;
chunk__34047 = G__34161;
count__34048 = G__34162;
i__34049 = G__34163;
continue;
} else {
var vec__34070 = cljs.core.first(seq__34046__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,(1),null);
var temp__5733__auto___34168 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34168)){
var effect_fn_34169 = temp__5733__auto___34168;
(effect_fn_34169.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34169.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34169.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34171 = cljs.core.next(seq__34046__$1);
var G__34172 = null;
var G__34173 = (0);
var G__34174 = (0);
seq__34046 = G__34171;
chunk__34047 = G__34172;
count__34048 = G__34173;
i__34049 = G__34174;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34073 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34074 = null;
var count__34075 = (0);
var i__34076 = (0);
while(true){
if((i__34076 < count__34075)){
var map__34082 = chunk__34074.cljs$core$IIndexed$_nth$arity$2(null,i__34076);
var map__34082__$1 = (((((!((map__34082 == null))))?(((((map__34082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34082):map__34082);
var effect = map__34082__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__34073,chunk__34074,count__34075,i__34076,map__34082,map__34082__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__34073,chunk__34074,count__34075,i__34076,map__34082,map__34082__$1,effect,ms,dispatch))
,ms);
}


var G__34179 = seq__34073;
var G__34180 = chunk__34074;
var G__34181 = count__34075;
var G__34182 = (i__34076 + (1));
seq__34073 = G__34179;
chunk__34074 = G__34180;
count__34075 = G__34181;
i__34076 = G__34182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34073);
if(temp__5735__auto__){
var seq__34073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34073__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34073__$1);
var G__34183 = cljs.core.chunk_rest(seq__34073__$1);
var G__34184 = c__4556__auto__;
var G__34185 = cljs.core.count(c__4556__auto__);
var G__34186 = (0);
seq__34073 = G__34183;
chunk__34074 = G__34184;
count__34075 = G__34185;
i__34076 = G__34186;
continue;
} else {
var map__34087 = cljs.core.first(seq__34073__$1);
var map__34087__$1 = (((((!((map__34087 == null))))?(((((map__34087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34087):map__34087);
var effect = map__34087__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__34073,chunk__34074,count__34075,i__34076,map__34087,map__34087__$1,effect,ms,dispatch,seq__34073__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__34073,chunk__34074,count__34075,i__34076,map__34087,map__34087__$1,effect,ms,dispatch,seq__34073__$1,temp__5735__auto__))
,ms);
}


var G__34190 = cljs.core.next(seq__34073__$1);
var G__34191 = null;
var G__34192 = (0);
var G__34193 = (0);
seq__34073 = G__34190;
chunk__34074 = G__34191;
count__34075 = G__34192;
i__34076 = G__34193;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__34095 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34096 = null;
var count__34097 = (0);
var i__34098 = (0);
while(true){
if((i__34098 < count__34097)){
var event = chunk__34096.cljs$core$IIndexed$_nth$arity$2(null,i__34098);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__34195 = seq__34095;
var G__34196 = chunk__34096;
var G__34197 = count__34097;
var G__34198 = (i__34098 + (1));
seq__34095 = G__34195;
chunk__34096 = G__34196;
count__34097 = G__34197;
i__34098 = G__34198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34095);
if(temp__5735__auto__){
var seq__34095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34095__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34095__$1);
var G__34199 = cljs.core.chunk_rest(seq__34095__$1);
var G__34200 = c__4556__auto__;
var G__34201 = cljs.core.count(c__4556__auto__);
var G__34202 = (0);
seq__34095 = G__34199;
chunk__34096 = G__34200;
count__34097 = G__34201;
i__34098 = G__34202;
continue;
} else {
var event = cljs.core.first(seq__34095__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__34203 = cljs.core.next(seq__34095__$1);
var G__34204 = null;
var G__34205 = (0);
var G__34206 = (0);
seq__34095 = G__34203;
chunk__34096 = G__34204;
count__34097 = G__34205;
i__34098 = G__34206;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__34101 = cljs.core.seq(value);
var chunk__34102 = null;
var count__34103 = (0);
var i__34104 = (0);
while(true){
if((i__34104 < count__34103)){
var event = chunk__34102.cljs$core$IIndexed$_nth$arity$2(null,i__34104);
clear_event(event);


var G__34214 = seq__34101;
var G__34215 = chunk__34102;
var G__34216 = count__34103;
var G__34217 = (i__34104 + (1));
seq__34101 = G__34214;
chunk__34102 = G__34215;
count__34103 = G__34216;
i__34104 = G__34217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34101);
if(temp__5735__auto__){
var seq__34101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34101__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34101__$1);
var G__34218 = cljs.core.chunk_rest(seq__34101__$1);
var G__34219 = c__4556__auto__;
var G__34220 = cljs.core.count(c__4556__auto__);
var G__34221 = (0);
seq__34101 = G__34218;
chunk__34102 = G__34219;
count__34103 = G__34220;
i__34104 = G__34221;
continue;
} else {
var event = cljs.core.first(seq__34101__$1);
clear_event(event);


var G__34222 = cljs.core.next(seq__34101__$1);
var G__34223 = null;
var G__34224 = (0);
var G__34225 = (0);
seq__34101 = G__34222;
chunk__34102 = G__34223;
count__34103 = G__34224;
i__34104 = G__34225;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
