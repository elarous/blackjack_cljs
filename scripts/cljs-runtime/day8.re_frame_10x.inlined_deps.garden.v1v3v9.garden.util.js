goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30181 = arguments.length;
var i__4737__auto___30182 = (0);
while(true){
if((i__4737__auto___30182 < len__4736__auto___30181)){
args__4742__auto__.push((arguments[i__4737__auto___30182]));

var G__30183 = (i__4737__auto___30182 + (1));
i__4737__auto___30182 = G__30183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$applyTo = (function (seq30019){
var G__30020 = cljs.core.first(seq30019);
var seq30019__$1 = cljs.core.next(seq30019);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30020,seq30019__$1);
}));


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString = function(){};

var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$dyn_30184 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$dyn_30184(this$);
}
});

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$as_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30202 = arguments.length;
var i__4737__auto___30203 = (0);
while(true){
if((i__4737__auto___30203 < len__4736__auto___30202)){
args__4742__auto__.push((arguments[i__4737__auto___30203]));

var G__30204 = (i__4737__auto___30203 + (1));
i__4737__auto___30203 = G__30204;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,args));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$applyTo = (function (seq30033){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30033));
}));

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$string__GT_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30219 = arguments.length;
var i__4737__auto___30220 = (0);
while(true){
if((i__4737__auto___30220 < len__4736__auto___30219)){
args__4742__auto__.push((arguments[i__4737__auto___30220]));

var G__30223 = (i__4737__auto___30220 + (1));
i__4737__auto___30220 = G__30223;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__30039){
var vec__30040 = p__30039;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30040,(0),null);
var radix__$1 = (function (){var or__4126__auto__ = radix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq30035){
var G__30036 = cljs.core.first(seq30035);
var seq30035__$1 = cljs.core.next(seq30035);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30036,seq30035__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$int__GT_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30239 = arguments.length;
var i__4737__auto___30240 = (0);
while(true){
if((i__4737__auto___30240 < len__4736__auto___30239)){
args__4742__auto__.push((arguments[i__4737__auto___30240]));

var G__30243 = (i__4737__auto___30240 + (1));
i__4737__auto___30240 = G__30243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__30065){
var vec__30066 = p__30065;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30066,(0),null);
var radix__$1 = (function (){var or__4126__auto__ = radix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq30051){
var G__30052 = cljs.core.first(seq30051);
var seq30051__$1 = cljs.core.next(seq30051);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30052,seq30051__$1);
}));

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join(xs){
var ys = (function (){var iter__4529__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__30075(s__30076){
return (new cljs.core.LazySeq(null,(function (){
var s__30076__$1 = s__30076;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30076__$1);
if(temp__5735__auto__){
var s__30076__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30076__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30076__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30078 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30077 = (0);
while(true){
if((i__30077 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__30077);
cljs.core.chunk_append(b__30078,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(x)));

var G__30262 = (i__30077 + (1));
i__30077 = G__30262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30078),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__30075(cljs.core.chunk_rest(s__30076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30078),null);
}
} else {
var x = cljs.core.first(s__30076__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__30075(cljs.core.rest(s__30076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_supports_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4217__auto__ = a;
var y__4218__auto__ = b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var top = (function (){var x__4214__auto__ = a;
var y__4215__auto__ = b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$clip(a,b,n){
var vec__30147 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(1),null);
var x__4214__auto__ = a__$1;
var y__4215__auto__ = (function (){var x__4217__auto__ = b__$1;
var y__4218__auto__ = n;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$average(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30282 = arguments.length;
var i__4737__auto___30283 = (0);
while(true){
if((i__4737__auto___30283 < len__4736__auto___30282)){
args__4742__auto__.push((arguments[i__4737__auto___30283]));

var G__30291 = (i__4737__auto___30283 + (1));
i__4737__auto___30283 = G__30291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$applyTo = (function (seq30150){
var G__30151 = cljs.core.first(seq30150);
var seq30150__$1 = cljs.core.next(seq30150);
var G__30152 = cljs.core.first(seq30150__$1);
var seq30150__$2 = cljs.core.next(seq30150__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30151,G__30152,seq30150__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$cartesian_product(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30304 = arguments.length;
var i__4737__auto___30306 = (0);
while(true){
if((i__4737__auto___30306 < len__4736__auto___30304)){
args__4742__auto__.push((arguments[i__4737__auto___30306]));

var G__30307 = (i__4737__auto___30306 + (1));
i__4737__auto___30306 = G__30307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__30312 = (i - (1));
var G__30313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__30312;
v_seqs__$2 = G__30313;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq30153){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30153));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.js.map
