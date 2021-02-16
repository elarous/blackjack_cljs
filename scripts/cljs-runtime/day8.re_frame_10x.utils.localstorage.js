goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__38289 = arguments.length;
switch (G__38289) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__38310 = cljs.core.seq(Object.keys(localStorage));
var chunk__38311 = null;
var count__38312 = (0);
var i__38313 = (0);
while(true){
if((i__38313 < count__38312)){
var k = chunk__38311.cljs$core$IIndexed$_nth$arity$2(null,i__38313);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__38355 = seq__38310;
var G__38356 = chunk__38311;
var G__38357 = count__38312;
var G__38358 = (i__38313 + (1));
seq__38310 = G__38355;
chunk__38311 = G__38356;
count__38312 = G__38357;
i__38313 = G__38358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38310);
if(temp__5735__auto__){
var seq__38310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38310__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38310__$1);
var G__38359 = cljs.core.chunk_rest(seq__38310__$1);
var G__38360 = c__4556__auto__;
var G__38361 = cljs.core.count(c__4556__auto__);
var G__38362 = (0);
seq__38310 = G__38359;
chunk__38311 = G__38360;
count__38312 = G__38361;
i__38313 = G__38362;
continue;
} else {
var k = cljs.core.first(seq__38310__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__38365 = cljs.core.next(seq__38310__$1);
var G__38366 = null;
var G__38367 = (0);
var G__38368 = (0);
seq__38310 = G__38365;
chunk__38311 = G__38366;
count__38312 = G__38367;
i__38313 = G__38368;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
