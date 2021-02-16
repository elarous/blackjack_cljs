goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38132 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38133 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38133);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38261 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38261)){
var new_db_38262 = temp__5735__auto___38261;
var fexpr__38137_38263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38137_38263.cljs$core$IFn$_invoke$arity$1 ? fexpr__38137_38263.cljs$core$IFn$_invoke$arity$1(new_db_38262) : fexpr__38137_38263.call(null,new_db_38262));
} else {
}

var seq__38138 = cljs.core.seq(effects_without_db);
var chunk__38139 = null;
var count__38140 = (0);
var i__38141 = (0);
while(true){
if((i__38141 < count__38140)){
var vec__38154 = chunk__38139.cljs$core$IIndexed$_nth$arity$2(null,i__38141);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38154,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38154,(1),null);
var temp__5733__auto___38265 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38265)){
var effect_fn_38266 = temp__5733__auto___38265;
(effect_fn_38266.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38266.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38266.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38267 = seq__38138;
var G__38268 = chunk__38139;
var G__38269 = count__38140;
var G__38270 = (i__38141 + (1));
seq__38138 = G__38267;
chunk__38139 = G__38268;
count__38140 = G__38269;
i__38141 = G__38270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38138);
if(temp__5735__auto__){
var seq__38138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38138__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38138__$1);
var G__38271 = cljs.core.chunk_rest(seq__38138__$1);
var G__38272 = c__4556__auto__;
var G__38273 = cljs.core.count(c__4556__auto__);
var G__38274 = (0);
seq__38138 = G__38271;
chunk__38139 = G__38272;
count__38140 = G__38273;
i__38141 = G__38274;
continue;
} else {
var vec__38165 = cljs.core.first(seq__38138__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38165,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38165,(1),null);
var temp__5733__auto___38277 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38277)){
var effect_fn_38278 = temp__5733__auto___38277;
(effect_fn_38278.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38278.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38278.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38279 = cljs.core.next(seq__38138__$1);
var G__38280 = null;
var G__38281 = (0);
var G__38282 = (0);
seq__38138 = G__38279;
chunk__38139 = G__38280;
count__38140 = G__38281;
i__38141 = G__38282;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37583__auto___38283 = re_frame.interop.now();
var duration__37584__auto___38284 = (end__37583__auto___38283 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37584__auto___38284,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37583__auto___38283);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38132);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38285 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38285)){
var new_db_38286 = temp__5735__auto___38285;
var fexpr__38168_38287 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38168_38287.cljs$core$IFn$_invoke$arity$1 ? fexpr__38168_38287.cljs$core$IFn$_invoke$arity$1(new_db_38286) : fexpr__38168_38287.call(null,new_db_38286));
} else {
}

var seq__38169 = cljs.core.seq(effects_without_db);
var chunk__38170 = null;
var count__38171 = (0);
var i__38172 = (0);
while(true){
if((i__38172 < count__38171)){
var vec__38183 = chunk__38170.cljs$core$IIndexed$_nth$arity$2(null,i__38172);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38183,(1),null);
var temp__5733__auto___38290 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38290)){
var effect_fn_38291 = temp__5733__auto___38290;
(effect_fn_38291.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38291.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38291.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38292 = seq__38169;
var G__38293 = chunk__38170;
var G__38294 = count__38171;
var G__38295 = (i__38172 + (1));
seq__38169 = G__38292;
chunk__38170 = G__38293;
count__38171 = G__38294;
i__38172 = G__38295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38169);
if(temp__5735__auto__){
var seq__38169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38169__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38169__$1);
var G__38300 = cljs.core.chunk_rest(seq__38169__$1);
var G__38301 = c__4556__auto__;
var G__38302 = cljs.core.count(c__4556__auto__);
var G__38303 = (0);
seq__38169 = G__38300;
chunk__38170 = G__38301;
count__38171 = G__38302;
i__38172 = G__38303;
continue;
} else {
var vec__38186 = cljs.core.first(seq__38169__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38186,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38186,(1),null);
var temp__5733__auto___38304 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38304)){
var effect_fn_38305 = temp__5733__auto___38304;
(effect_fn_38305.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38305.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38305.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38306 = cljs.core.next(seq__38169__$1);
var G__38307 = null;
var G__38308 = (0);
var G__38309 = (0);
seq__38169 = G__38306;
chunk__38170 = G__38307;
count__38171 = G__38308;
i__38172 = G__38309;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38195){
var map__38196 = p__38195;
var map__38196__$1 = (((((!((map__38196 == null))))?(((((map__38196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38196):map__38196);
var effect = map__38196__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38196__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38196__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38205 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38206 = null;
var count__38207 = (0);
var i__38208 = (0);
while(true){
if((i__38208 < count__38207)){
var effect = chunk__38206.cljs$core$IIndexed$_nth$arity$2(null,i__38208);
re_frame.fx.dispatch_later(effect);


var G__38320 = seq__38205;
var G__38321 = chunk__38206;
var G__38322 = count__38207;
var G__38323 = (i__38208 + (1));
seq__38205 = G__38320;
chunk__38206 = G__38321;
count__38207 = G__38322;
i__38208 = G__38323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38205);
if(temp__5735__auto__){
var seq__38205__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38205__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38205__$1);
var G__38324 = cljs.core.chunk_rest(seq__38205__$1);
var G__38325 = c__4556__auto__;
var G__38326 = cljs.core.count(c__4556__auto__);
var G__38327 = (0);
seq__38205 = G__38324;
chunk__38206 = G__38325;
count__38207 = G__38326;
i__38208 = G__38327;
continue;
} else {
var effect = cljs.core.first(seq__38205__$1);
re_frame.fx.dispatch_later(effect);


var G__38328 = cljs.core.next(seq__38205__$1);
var G__38329 = null;
var G__38330 = (0);
var G__38331 = (0);
seq__38205 = G__38328;
chunk__38206 = G__38329;
count__38207 = G__38330;
i__38208 = G__38331;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38213 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38214 = null;
var count__38215 = (0);
var i__38216 = (0);
while(true){
if((i__38216 < count__38215)){
var vec__38232 = chunk__38214.cljs$core$IIndexed$_nth$arity$2(null,i__38216);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38341 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38341)){
var effect_fn_38342 = temp__5733__auto___38341;
(effect_fn_38342.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38342.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38342.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38344 = seq__38213;
var G__38345 = chunk__38214;
var G__38346 = count__38215;
var G__38347 = (i__38216 + (1));
seq__38213 = G__38344;
chunk__38214 = G__38345;
count__38215 = G__38346;
i__38216 = G__38347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38213);
if(temp__5735__auto__){
var seq__38213__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38213__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38213__$1);
var G__38351 = cljs.core.chunk_rest(seq__38213__$1);
var G__38352 = c__4556__auto__;
var G__38353 = cljs.core.count(c__4556__auto__);
var G__38354 = (0);
seq__38213 = G__38351;
chunk__38214 = G__38352;
count__38215 = G__38353;
i__38216 = G__38354;
continue;
} else {
var vec__38247 = cljs.core.first(seq__38213__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38247,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38247,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38363 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38363)){
var effect_fn_38364 = temp__5733__auto___38363;
(effect_fn_38364.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38364.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38364.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38369 = cljs.core.next(seq__38213__$1);
var G__38370 = null;
var G__38371 = (0);
var G__38372 = (0);
seq__38213 = G__38369;
chunk__38214 = G__38370;
count__38215 = G__38371;
i__38216 = G__38372;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38250 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38251 = null;
var count__38252 = (0);
var i__38253 = (0);
while(true){
if((i__38253 < count__38252)){
var event = chunk__38251.cljs$core$IIndexed$_nth$arity$2(null,i__38253);
re_frame.router.dispatch(event);


var G__38374 = seq__38250;
var G__38375 = chunk__38251;
var G__38376 = count__38252;
var G__38377 = (i__38253 + (1));
seq__38250 = G__38374;
chunk__38251 = G__38375;
count__38252 = G__38376;
i__38253 = G__38377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38250);
if(temp__5735__auto__){
var seq__38250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38250__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38250__$1);
var G__38378 = cljs.core.chunk_rest(seq__38250__$1);
var G__38379 = c__4556__auto__;
var G__38380 = cljs.core.count(c__4556__auto__);
var G__38381 = (0);
seq__38250 = G__38378;
chunk__38251 = G__38379;
count__38252 = G__38380;
i__38253 = G__38381;
continue;
} else {
var event = cljs.core.first(seq__38250__$1);
re_frame.router.dispatch(event);


var G__38383 = cljs.core.next(seq__38250__$1);
var G__38384 = null;
var G__38385 = (0);
var G__38386 = (0);
seq__38250 = G__38383;
chunk__38251 = G__38384;
count__38252 = G__38385;
i__38253 = G__38386;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38257 = cljs.core.seq(value);
var chunk__38258 = null;
var count__38259 = (0);
var i__38260 = (0);
while(true){
if((i__38260 < count__38259)){
var event = chunk__38258.cljs$core$IIndexed$_nth$arity$2(null,i__38260);
clear_event(event);


var G__38387 = seq__38257;
var G__38388 = chunk__38258;
var G__38389 = count__38259;
var G__38390 = (i__38260 + (1));
seq__38257 = G__38387;
chunk__38258 = G__38388;
count__38259 = G__38389;
i__38260 = G__38390;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38257);
if(temp__5735__auto__){
var seq__38257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38257__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38257__$1);
var G__38391 = cljs.core.chunk_rest(seq__38257__$1);
var G__38392 = c__4556__auto__;
var G__38393 = cljs.core.count(c__4556__auto__);
var G__38394 = (0);
seq__38257 = G__38391;
chunk__38258 = G__38392;
count__38259 = G__38393;
i__38260 = G__38394;
continue;
} else {
var event = cljs.core.first(seq__38257__$1);
clear_event(event);


var G__38395 = cljs.core.next(seq__38257__$1);
var G__38396 = null;
var G__38397 = (0);
var G__38398 = (0);
seq__38257 = G__38395;
chunk__38258 = G__38396;
count__38259 = G__38397;
i__38260 = G__38398;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
