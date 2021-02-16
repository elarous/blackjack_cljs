goog.provide('herb.core');
/**
 * Initialize herb, takes a map of options:
 *   :vendors - a vector of vendor prefixes, ie [:webkit :moz]
 *   :auto-prefix - A set of CSS properties to auto prefix, ie #{:transition :border-radius} 
 */
herb.core.init_BANG_ = (function herb$core$init_BANG_(options){
var parsed = cljs.spec.alpha.conform(new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid input",cljs.spec.alpha.explain_data(new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options));
} else {
return cljs.core.reset_BANG_(herb.runtime.options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),herb.impl.convert_vendors(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30494){
var vec__30495 = p__30494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(1),null);
return v;
}),new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(parsed))),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(options)], null));
}
});
/**
 * Joins multiple classes together, filtering out nils:
 *   ```clojure
 *   (join (<class fn-1) (<class fn-2))
 *   ```
 */
herb.core.join = (function herb$core$join(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30499 = arguments.length;
var i__4737__auto___30500 = (0);
while(true){
if((i__4737__auto___30500 < len__4736__auto___30499)){
args__4742__auto__.push((arguments[i__4737__auto___30500]));

var G__30501 = (i__4737__auto___30500 + (1));
i__4737__auto___30500 = G__30501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return herb.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(herb.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,classes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("join takes one or more strings as arguments",cljs.spec.alpha.explain_data(new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes));
}
}));

(herb.core.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(herb.core.join.cljs$lang$applyTo = (function (seq30498){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30498));
}));


//# sourceMappingURL=herb.core.js.map
