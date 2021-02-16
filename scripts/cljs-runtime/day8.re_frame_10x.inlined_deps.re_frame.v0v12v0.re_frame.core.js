goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_db(var_args){
var G__34151 = arguments.length;
switch (G__34151) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_fx(var_args){
var G__34175 = arguments.length;
switch (G__34175) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$reg_event_ctx(var_args){
var G__34178 = arguments.length;
switch (G__34178) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db);
var subs_cache = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_34279 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_34280 = cljs.core.set(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.subs.query__GT_reaction)));
var seq__34207_34282 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_34280,original_subs_34279));
var chunk__34208_34283 = null;
var count__34209_34284 = (0);
var i__34210_34285 = (0);
while(true){
if((i__34210_34285 < count__34209_34284)){
var sub_34286 = chunk__34208_34283.cljs$core$IIndexed$_nth$arity$2(null,i__34210_34285);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.dispose_BANG_(sub_34286);


var G__34287 = seq__34207_34282;
var G__34288 = chunk__34208_34283;
var G__34289 = count__34209_34284;
var G__34290 = (i__34210_34285 + (1));
seq__34207_34282 = G__34287;
chunk__34208_34283 = G__34288;
count__34209_34284 = G__34289;
i__34210_34285 = G__34290;
continue;
} else {
var temp__5735__auto___34291 = cljs.core.seq(seq__34207_34282);
if(temp__5735__auto___34291){
var seq__34207_34293__$1 = temp__5735__auto___34291;
if(cljs.core.chunked_seq_QMARK_(seq__34207_34293__$1)){
var c__4556__auto___34294 = cljs.core.chunk_first(seq__34207_34293__$1);
var G__34295 = cljs.core.chunk_rest(seq__34207_34293__$1);
var G__34296 = c__4556__auto___34294;
var G__34297 = cljs.core.count(c__4556__auto___34294);
var G__34298 = (0);
seq__34207_34282 = G__34295;
chunk__34208_34283 = G__34296;
count__34209_34284 = G__34297;
i__34210_34285 = G__34298;
continue;
} else {
var sub_34304 = cljs.core.first(seq__34207_34293__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.dispose_BANG_(sub_34304);


var G__34306 = cljs.core.next(seq__34207_34293__$1);
var G__34307 = null;
var G__34308 = (0);
var G__34309 = (0);
seq__34207_34282 = G__34306;
chunk__34208_34283 = G__34307;
count__34209_34284 = G__34308;
i__34210_34285 = G__34309;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$add_post_event_callback(var_args){
var G__34230 = arguments.length;
switch (G__34230) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$register_handler(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34330 = arguments.length;
var i__4737__auto___34332 = (0);
while(true){
if((i__4737__auto___34332 < len__4736__auto___34330)){
args__4742__auto__.push((arguments[i__4737__auto___34332]));

var G__34336 = (i__4737__auto___34332 + (1));
i__4737__auto___34332 = G__34336;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__34244_34340 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__34245_34341 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__34246_34342 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__34247_34343 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__34244_34340,G__34245_34341,G__34246_34342,G__34247_34343) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.call(null,G__34244_34340,G__34245_34341,G__34246_34342,G__34247_34343));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_event_db,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq34242){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34242));
}));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$core$register_sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34356 = arguments.length;
var i__4737__auto___34357 = (0);
while(true){
if((i__4737__auto___34357 < len__4736__auto___34356)){
args__4742__auto__.push((arguments[i__4737__auto___34357]));

var G__34358 = (i__4737__auto___34357 + (1));
i__4737__auto___34357 = G__34358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__34255_34359 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__34256_34360 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__34257_34361 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__34258_34362 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__34255_34359,G__34256_34360,G__34257_34361,G__34258_34362) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.console.call(null,G__34255_34359,G__34256_34360,G__34257_34361,G__34258_34362));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub_raw,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq34248){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34248));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.js.map
