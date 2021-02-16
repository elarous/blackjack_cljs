goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46400 = arguments.length;
var i__4737__auto___46401 = (0);
while(true){
if((i__4737__auto___46401 < len__4736__auto___46400)){
args__4742__auto__.push((arguments[i__4737__auto___46401]));

var G__46402 = (i__4737__auto___46401 + (1));
i__4737__auto___46401 = G__46402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46236){
var G__46237 = cljs.core.first(seq46236);
var seq46236__$1 = cljs.core.next(seq46236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46237,seq46236__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46249 = cljs.core.seq(sources);
var chunk__46250 = null;
var count__46251 = (0);
var i__46252 = (0);
while(true){
if((i__46252 < count__46251)){
var map__46262 = chunk__46250.cljs$core$IIndexed$_nth$arity$2(null,i__46252);
var map__46262__$1 = (((((!((map__46262 == null))))?(((((map__46262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46262):map__46262);
var src = map__46262__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46264){var e_46403 = e46264;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46403);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46403.message)].join('')));
}

var G__46404 = seq__46249;
var G__46405 = chunk__46250;
var G__46406 = count__46251;
var G__46407 = (i__46252 + (1));
seq__46249 = G__46404;
chunk__46250 = G__46405;
count__46251 = G__46406;
i__46252 = G__46407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46249);
if(temp__5735__auto__){
var seq__46249__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46249__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46249__$1);
var G__46408 = cljs.core.chunk_rest(seq__46249__$1);
var G__46409 = c__4556__auto__;
var G__46410 = cljs.core.count(c__4556__auto__);
var G__46411 = (0);
seq__46249 = G__46408;
chunk__46250 = G__46409;
count__46251 = G__46410;
i__46252 = G__46411;
continue;
} else {
var map__46265 = cljs.core.first(seq__46249__$1);
var map__46265__$1 = (((((!((map__46265 == null))))?(((((map__46265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46265):map__46265);
var src = map__46265__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46265__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46265__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46265__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46265__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46269){var e_46412 = e46269;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46412);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46412.message)].join('')));
}

var G__46413 = cljs.core.next(seq__46249__$1);
var G__46414 = null;
var G__46415 = (0);
var G__46416 = (0);
seq__46249 = G__46413;
chunk__46250 = G__46414;
count__46251 = G__46415;
i__46252 = G__46416;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46272 = cljs.core.seq(js_requires);
var chunk__46273 = null;
var count__46274 = (0);
var i__46275 = (0);
while(true){
if((i__46275 < count__46274)){
var js_ns = chunk__46273.cljs$core$IIndexed$_nth$arity$2(null,i__46275);
var require_str_46417 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46417);


var G__46418 = seq__46272;
var G__46419 = chunk__46273;
var G__46420 = count__46274;
var G__46421 = (i__46275 + (1));
seq__46272 = G__46418;
chunk__46273 = G__46419;
count__46274 = G__46420;
i__46275 = G__46421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46272);
if(temp__5735__auto__){
var seq__46272__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46272__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46272__$1);
var G__46422 = cljs.core.chunk_rest(seq__46272__$1);
var G__46423 = c__4556__auto__;
var G__46424 = cljs.core.count(c__4556__auto__);
var G__46425 = (0);
seq__46272 = G__46422;
chunk__46273 = G__46423;
count__46274 = G__46424;
i__46275 = G__46425;
continue;
} else {
var js_ns = cljs.core.first(seq__46272__$1);
var require_str_46426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46426);


var G__46427 = cljs.core.next(seq__46272__$1);
var G__46428 = null;
var G__46429 = (0);
var G__46430 = (0);
seq__46272 = G__46427;
chunk__46273 = G__46428;
count__46274 = G__46429;
i__46275 = G__46430;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46278){
var map__46279 = p__46278;
var map__46279__$1 = (((((!((map__46279 == null))))?(((((map__46279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46279):map__46279);
var msg = map__46279__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46281(s__46282){
return (new cljs.core.LazySeq(null,(function (){
var s__46282__$1 = s__46282;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46282__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46287 = cljs.core.first(xs__6292__auto__);
var map__46287__$1 = (((((!((map__46287 == null))))?(((((map__46287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46287):map__46287);
var src = map__46287__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46287__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46287__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46282__$1,map__46287,map__46287__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46279,map__46279__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46281_$_iter__46283(s__46284){
return (new cljs.core.LazySeq(null,((function (s__46282__$1,map__46287,map__46287__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46279,map__46279__$1,msg,info,reload_info){
return (function (){
var s__46284__$1 = s__46284;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46284__$1);
if(temp__5735__auto____$1){
var s__46284__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46284__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46284__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46286 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46285 = (0);
while(true){
if((i__46285 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46285);
cljs.core.chunk_append(b__46286,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46431 = (i__46285 + (1));
i__46285 = G__46431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46286),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46281_$_iter__46283(cljs.core.chunk_rest(s__46284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46286),null);
}
} else {
var warning = cljs.core.first(s__46284__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46281_$_iter__46283(cljs.core.rest(s__46284__$2)));
}
} else {
return null;
}
break;
}
});})(s__46282__$1,map__46287,map__46287__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46279,map__46279__$1,msg,info,reload_info))
,null,null));
});})(s__46282__$1,map__46287,map__46287__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46279,map__46279__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46281(cljs.core.rest(s__46282__$1)));
} else {
var G__46432 = cljs.core.rest(s__46282__$1);
s__46282__$1 = G__46432;
continue;
}
} else {
var G__46433 = cljs.core.rest(s__46282__$1);
s__46282__$1 = G__46433;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46289_46434 = cljs.core.seq(warnings);
var chunk__46290_46435 = null;
var count__46291_46436 = (0);
var i__46292_46437 = (0);
while(true){
if((i__46292_46437 < count__46291_46436)){
var map__46297_46438 = chunk__46290_46435.cljs$core$IIndexed$_nth$arity$2(null,i__46292_46437);
var map__46297_46439__$1 = (((((!((map__46297_46438 == null))))?(((((map__46297_46438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46297_46438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46297_46438):map__46297_46438);
var w_46440 = map__46297_46439__$1;
var msg_46441__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46297_46439__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46297_46439__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46297_46439__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46297_46439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46444)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46442),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46443),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46441__$1)].join(''));


var G__46445 = seq__46289_46434;
var G__46446 = chunk__46290_46435;
var G__46447 = count__46291_46436;
var G__46448 = (i__46292_46437 + (1));
seq__46289_46434 = G__46445;
chunk__46290_46435 = G__46446;
count__46291_46436 = G__46447;
i__46292_46437 = G__46448;
continue;
} else {
var temp__5735__auto___46449 = cljs.core.seq(seq__46289_46434);
if(temp__5735__auto___46449){
var seq__46289_46450__$1 = temp__5735__auto___46449;
if(cljs.core.chunked_seq_QMARK_(seq__46289_46450__$1)){
var c__4556__auto___46451 = cljs.core.chunk_first(seq__46289_46450__$1);
var G__46452 = cljs.core.chunk_rest(seq__46289_46450__$1);
var G__46453 = c__4556__auto___46451;
var G__46454 = cljs.core.count(c__4556__auto___46451);
var G__46455 = (0);
seq__46289_46434 = G__46452;
chunk__46290_46435 = G__46453;
count__46291_46436 = G__46454;
i__46292_46437 = G__46455;
continue;
} else {
var map__46301_46456 = cljs.core.first(seq__46289_46450__$1);
var map__46301_46457__$1 = (((((!((map__46301_46456 == null))))?(((((map__46301_46456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46301_46456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46301_46456):map__46301_46456);
var w_46458 = map__46301_46457__$1;
var msg_46459__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301_46457__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301_46457__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301_46457__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301_46457__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46462)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46460),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46461),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46459__$1)].join(''));


var G__46463 = cljs.core.next(seq__46289_46450__$1);
var G__46464 = null;
var G__46465 = (0);
var G__46466 = (0);
seq__46289_46434 = G__46463;
chunk__46290_46435 = G__46464;
count__46291_46436 = G__46465;
i__46292_46437 = G__46466;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46277_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46277_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46303){
var map__46304 = p__46303;
var map__46304__$1 = (((((!((map__46304 == null))))?(((((map__46304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46304):map__46304);
var msg = map__46304__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46304__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46306 = cljs.core.seq(updates);
var chunk__46308 = null;
var count__46309 = (0);
var i__46310 = (0);
while(true){
if((i__46310 < count__46309)){
var path = chunk__46308.cljs$core$IIndexed$_nth$arity$2(null,i__46310);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46340_46467 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46344_46468 = null;
var count__46345_46469 = (0);
var i__46346_46470 = (0);
while(true){
if((i__46346_46470 < count__46345_46469)){
var node_46471 = chunk__46344_46468.cljs$core$IIndexed$_nth$arity$2(null,i__46346_46470);
if(cljs.core.not(node_46471.shadow$old)){
var path_match_46472 = shadow.cljs.devtools.client.browser.match_paths(node_46471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46472)){
var new_link_46473 = (function (){var G__46352 = node_46471.cloneNode(true);
G__46352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46472),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46352;
})();
(node_46471.shadow$old = true);

(new_link_46473.onload = ((function (seq__46340_46467,chunk__46344_46468,count__46345_46469,i__46346_46470,seq__46306,chunk__46308,count__46309,i__46310,new_link_46473,path_match_46472,node_46471,path,map__46304,map__46304__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46471);
});})(seq__46340_46467,chunk__46344_46468,count__46345_46469,i__46346_46470,seq__46306,chunk__46308,count__46309,i__46310,new_link_46473,path_match_46472,node_46471,path,map__46304,map__46304__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46472], 0));

goog.dom.insertSiblingAfter(new_link_46473,node_46471);


var G__46474 = seq__46340_46467;
var G__46475 = chunk__46344_46468;
var G__46476 = count__46345_46469;
var G__46477 = (i__46346_46470 + (1));
seq__46340_46467 = G__46474;
chunk__46344_46468 = G__46475;
count__46345_46469 = G__46476;
i__46346_46470 = G__46477;
continue;
} else {
var G__46478 = seq__46340_46467;
var G__46479 = chunk__46344_46468;
var G__46480 = count__46345_46469;
var G__46481 = (i__46346_46470 + (1));
seq__46340_46467 = G__46478;
chunk__46344_46468 = G__46479;
count__46345_46469 = G__46480;
i__46346_46470 = G__46481;
continue;
}
} else {
var G__46482 = seq__46340_46467;
var G__46483 = chunk__46344_46468;
var G__46484 = count__46345_46469;
var G__46485 = (i__46346_46470 + (1));
seq__46340_46467 = G__46482;
chunk__46344_46468 = G__46483;
count__46345_46469 = G__46484;
i__46346_46470 = G__46485;
continue;
}
} else {
var temp__5735__auto___46486 = cljs.core.seq(seq__46340_46467);
if(temp__5735__auto___46486){
var seq__46340_46487__$1 = temp__5735__auto___46486;
if(cljs.core.chunked_seq_QMARK_(seq__46340_46487__$1)){
var c__4556__auto___46488 = cljs.core.chunk_first(seq__46340_46487__$1);
var G__46489 = cljs.core.chunk_rest(seq__46340_46487__$1);
var G__46490 = c__4556__auto___46488;
var G__46491 = cljs.core.count(c__4556__auto___46488);
var G__46492 = (0);
seq__46340_46467 = G__46489;
chunk__46344_46468 = G__46490;
count__46345_46469 = G__46491;
i__46346_46470 = G__46492;
continue;
} else {
var node_46493 = cljs.core.first(seq__46340_46487__$1);
if(cljs.core.not(node_46493.shadow$old)){
var path_match_46494 = shadow.cljs.devtools.client.browser.match_paths(node_46493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46494)){
var new_link_46495 = (function (){var G__46353 = node_46493.cloneNode(true);
G__46353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46353;
})();
(node_46493.shadow$old = true);

(new_link_46495.onload = ((function (seq__46340_46467,chunk__46344_46468,count__46345_46469,i__46346_46470,seq__46306,chunk__46308,count__46309,i__46310,new_link_46495,path_match_46494,node_46493,seq__46340_46487__$1,temp__5735__auto___46486,path,map__46304,map__46304__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46493);
});})(seq__46340_46467,chunk__46344_46468,count__46345_46469,i__46346_46470,seq__46306,chunk__46308,count__46309,i__46310,new_link_46495,path_match_46494,node_46493,seq__46340_46487__$1,temp__5735__auto___46486,path,map__46304,map__46304__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46494], 0));

goog.dom.insertSiblingAfter(new_link_46495,node_46493);


var G__46496 = cljs.core.next(seq__46340_46487__$1);
var G__46497 = null;
var G__46498 = (0);
var G__46499 = (0);
seq__46340_46467 = G__46496;
chunk__46344_46468 = G__46497;
count__46345_46469 = G__46498;
i__46346_46470 = G__46499;
continue;
} else {
var G__46500 = cljs.core.next(seq__46340_46487__$1);
var G__46501 = null;
var G__46502 = (0);
var G__46503 = (0);
seq__46340_46467 = G__46500;
chunk__46344_46468 = G__46501;
count__46345_46469 = G__46502;
i__46346_46470 = G__46503;
continue;
}
} else {
var G__46504 = cljs.core.next(seq__46340_46487__$1);
var G__46505 = null;
var G__46506 = (0);
var G__46507 = (0);
seq__46340_46467 = G__46504;
chunk__46344_46468 = G__46505;
count__46345_46469 = G__46506;
i__46346_46470 = G__46507;
continue;
}
}
} else {
}
}
break;
}


var G__46508 = seq__46306;
var G__46509 = chunk__46308;
var G__46510 = count__46309;
var G__46511 = (i__46310 + (1));
seq__46306 = G__46508;
chunk__46308 = G__46509;
count__46309 = G__46510;
i__46310 = G__46511;
continue;
} else {
var G__46512 = seq__46306;
var G__46513 = chunk__46308;
var G__46514 = count__46309;
var G__46515 = (i__46310 + (1));
seq__46306 = G__46512;
chunk__46308 = G__46513;
count__46309 = G__46514;
i__46310 = G__46515;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46306);
if(temp__5735__auto__){
var seq__46306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46306__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46306__$1);
var G__46516 = cljs.core.chunk_rest(seq__46306__$1);
var G__46517 = c__4556__auto__;
var G__46518 = cljs.core.count(c__4556__auto__);
var G__46519 = (0);
seq__46306 = G__46516;
chunk__46308 = G__46517;
count__46309 = G__46518;
i__46310 = G__46519;
continue;
} else {
var path = cljs.core.first(seq__46306__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46354_46520 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46358_46521 = null;
var count__46359_46522 = (0);
var i__46360_46523 = (0);
while(true){
if((i__46360_46523 < count__46359_46522)){
var node_46524 = chunk__46358_46521.cljs$core$IIndexed$_nth$arity$2(null,i__46360_46523);
if(cljs.core.not(node_46524.shadow$old)){
var path_match_46525 = shadow.cljs.devtools.client.browser.match_paths(node_46524.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46525)){
var new_link_46526 = (function (){var G__46366 = node_46524.cloneNode(true);
G__46366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46525),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46366;
})();
(node_46524.shadow$old = true);

(new_link_46526.onload = ((function (seq__46354_46520,chunk__46358_46521,count__46359_46522,i__46360_46523,seq__46306,chunk__46308,count__46309,i__46310,new_link_46526,path_match_46525,node_46524,path,seq__46306__$1,temp__5735__auto__,map__46304,map__46304__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46524);
});})(seq__46354_46520,chunk__46358_46521,count__46359_46522,i__46360_46523,seq__46306,chunk__46308,count__46309,i__46310,new_link_46526,path_match_46525,node_46524,path,seq__46306__$1,temp__5735__auto__,map__46304,map__46304__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46525], 0));

goog.dom.insertSiblingAfter(new_link_46526,node_46524);


var G__46527 = seq__46354_46520;
var G__46528 = chunk__46358_46521;
var G__46529 = count__46359_46522;
var G__46530 = (i__46360_46523 + (1));
seq__46354_46520 = G__46527;
chunk__46358_46521 = G__46528;
count__46359_46522 = G__46529;
i__46360_46523 = G__46530;
continue;
} else {
var G__46531 = seq__46354_46520;
var G__46532 = chunk__46358_46521;
var G__46533 = count__46359_46522;
var G__46534 = (i__46360_46523 + (1));
seq__46354_46520 = G__46531;
chunk__46358_46521 = G__46532;
count__46359_46522 = G__46533;
i__46360_46523 = G__46534;
continue;
}
} else {
var G__46535 = seq__46354_46520;
var G__46536 = chunk__46358_46521;
var G__46537 = count__46359_46522;
var G__46538 = (i__46360_46523 + (1));
seq__46354_46520 = G__46535;
chunk__46358_46521 = G__46536;
count__46359_46522 = G__46537;
i__46360_46523 = G__46538;
continue;
}
} else {
var temp__5735__auto___46539__$1 = cljs.core.seq(seq__46354_46520);
if(temp__5735__auto___46539__$1){
var seq__46354_46540__$1 = temp__5735__auto___46539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46354_46540__$1)){
var c__4556__auto___46541 = cljs.core.chunk_first(seq__46354_46540__$1);
var G__46542 = cljs.core.chunk_rest(seq__46354_46540__$1);
var G__46543 = c__4556__auto___46541;
var G__46544 = cljs.core.count(c__4556__auto___46541);
var G__46545 = (0);
seq__46354_46520 = G__46542;
chunk__46358_46521 = G__46543;
count__46359_46522 = G__46544;
i__46360_46523 = G__46545;
continue;
} else {
var node_46546 = cljs.core.first(seq__46354_46540__$1);
if(cljs.core.not(node_46546.shadow$old)){
var path_match_46547 = shadow.cljs.devtools.client.browser.match_paths(node_46546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46547)){
var new_link_46548 = (function (){var G__46367 = node_46546.cloneNode(true);
G__46367.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46547),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46367;
})();
(node_46546.shadow$old = true);

(new_link_46548.onload = ((function (seq__46354_46520,chunk__46358_46521,count__46359_46522,i__46360_46523,seq__46306,chunk__46308,count__46309,i__46310,new_link_46548,path_match_46547,node_46546,seq__46354_46540__$1,temp__5735__auto___46539__$1,path,seq__46306__$1,temp__5735__auto__,map__46304,map__46304__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46546);
});})(seq__46354_46520,chunk__46358_46521,count__46359_46522,i__46360_46523,seq__46306,chunk__46308,count__46309,i__46310,new_link_46548,path_match_46547,node_46546,seq__46354_46540__$1,temp__5735__auto___46539__$1,path,seq__46306__$1,temp__5735__auto__,map__46304,map__46304__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46547], 0));

goog.dom.insertSiblingAfter(new_link_46548,node_46546);


var G__46549 = cljs.core.next(seq__46354_46540__$1);
var G__46550 = null;
var G__46551 = (0);
var G__46552 = (0);
seq__46354_46520 = G__46549;
chunk__46358_46521 = G__46550;
count__46359_46522 = G__46551;
i__46360_46523 = G__46552;
continue;
} else {
var G__46553 = cljs.core.next(seq__46354_46540__$1);
var G__46554 = null;
var G__46555 = (0);
var G__46556 = (0);
seq__46354_46520 = G__46553;
chunk__46358_46521 = G__46554;
count__46359_46522 = G__46555;
i__46360_46523 = G__46556;
continue;
}
} else {
var G__46557 = cljs.core.next(seq__46354_46540__$1);
var G__46558 = null;
var G__46559 = (0);
var G__46560 = (0);
seq__46354_46520 = G__46557;
chunk__46358_46521 = G__46558;
count__46359_46522 = G__46559;
i__46360_46523 = G__46560;
continue;
}
}
} else {
}
}
break;
}


var G__46561 = cljs.core.next(seq__46306__$1);
var G__46562 = null;
var G__46563 = (0);
var G__46564 = (0);
seq__46306 = G__46561;
chunk__46308 = G__46562;
count__46309 = G__46563;
i__46310 = G__46564;
continue;
} else {
var G__46565 = cljs.core.next(seq__46306__$1);
var G__46566 = null;
var G__46567 = (0);
var G__46568 = (0);
seq__46306 = G__46565;
chunk__46308 = G__46566;
count__46309 = G__46567;
i__46310 = G__46568;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46368){
var map__46369 = p__46368;
var map__46369__$1 = (((((!((map__46369 == null))))?(((((map__46369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46369):map__46369);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46369__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46371){
var map__46372 = p__46371;
var map__46372__$1 = (((((!((map__46372 == null))))?(((((map__46372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46372):map__46372);
var _ = map__46372__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46374,done,error){
var map__46375 = p__46374;
var map__46375__$1 = (((((!((map__46375 == null))))?(((((map__46375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46375):map__46375);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46375__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46377,done,error){
var map__46378 = p__46377;
var map__46378__$1 = (((((!((map__46378 == null))))?(((((map__46378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46378):map__46378);
var msg = map__46378__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46380){
var map__46381 = p__46380;
var map__46381__$1 = (((((!((map__46381 == null))))?(((((map__46381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46381):map__46381);
var src = map__46381__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46383 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46383) : done.call(null,G__46383));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46384){
var map__46385 = p__46384;
var map__46385__$1 = (((((!((map__46385 == null))))?(((((map__46385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46385):map__46385);
var msg__$1 = map__46385__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46387){var ex = e46387;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46388){
var map__46389 = p__46388;
var map__46389__$1 = (((((!((map__46389 == null))))?(((((map__46389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46389):map__46389);
var env = map__46389__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46391){
var map__46392 = p__46391;
var map__46392__$1 = (((((!((map__46392 == null))))?(((((map__46392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46392):map__46392);
var msg = map__46392__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46392__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46394){
var map__46395 = p__46394;
var map__46395__$1 = (((((!((map__46395 == null))))?(((((map__46395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46395):map__46395);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46397){
var map__46398 = p__46397;
var map__46398__$1 = (((((!((map__46398 == null))))?(((((map__46398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46398):map__46398);
var svc = map__46398__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46398__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
