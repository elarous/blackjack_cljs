goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46569){
var map__46570 = p__46569;
var map__46570__$1 = (((((!((map__46570 == null))))?(((((map__46570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46570):map__46570);
var m = map__46570__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46570__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46572_46673 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46573_46674 = null;
var count__46574_46675 = (0);
var i__46575_46676 = (0);
while(true){
if((i__46575_46676 < count__46574_46675)){
var f_46677 = chunk__46573_46674.cljs$core$IIndexed$_nth$arity$2(null,i__46575_46676);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46677], 0));


var G__46678 = seq__46572_46673;
var G__46679 = chunk__46573_46674;
var G__46680 = count__46574_46675;
var G__46681 = (i__46575_46676 + (1));
seq__46572_46673 = G__46678;
chunk__46573_46674 = G__46679;
count__46574_46675 = G__46680;
i__46575_46676 = G__46681;
continue;
} else {
var temp__5735__auto___46682 = cljs.core.seq(seq__46572_46673);
if(temp__5735__auto___46682){
var seq__46572_46683__$1 = temp__5735__auto___46682;
if(cljs.core.chunked_seq_QMARK_(seq__46572_46683__$1)){
var c__4556__auto___46684 = cljs.core.chunk_first(seq__46572_46683__$1);
var G__46685 = cljs.core.chunk_rest(seq__46572_46683__$1);
var G__46686 = c__4556__auto___46684;
var G__46687 = cljs.core.count(c__4556__auto___46684);
var G__46688 = (0);
seq__46572_46673 = G__46685;
chunk__46573_46674 = G__46686;
count__46574_46675 = G__46687;
i__46575_46676 = G__46688;
continue;
} else {
var f_46689 = cljs.core.first(seq__46572_46683__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46689], 0));


var G__46690 = cljs.core.next(seq__46572_46683__$1);
var G__46691 = null;
var G__46692 = (0);
var G__46693 = (0);
seq__46572_46673 = G__46690;
chunk__46573_46674 = G__46691;
count__46574_46675 = G__46692;
i__46575_46676 = G__46693;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46694 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46694], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46694)))?cljs.core.second(arglists_46694):arglists_46694)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46576_46695 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46577_46696 = null;
var count__46578_46697 = (0);
var i__46579_46698 = (0);
while(true){
if((i__46579_46698 < count__46578_46697)){
var vec__46590_46699 = chunk__46577_46696.cljs$core$IIndexed$_nth$arity$2(null,i__46579_46698);
var name_46700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590_46699,(0),null);
var map__46593_46701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590_46699,(1),null);
var map__46593_46702__$1 = (((((!((map__46593_46701 == null))))?(((((map__46593_46701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46593_46701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46593_46701):map__46593_46701);
var doc_46703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46593_46702__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46593_46702__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46700], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46704], 0));

if(cljs.core.truth_(doc_46703)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46703], 0));
} else {
}


var G__46705 = seq__46576_46695;
var G__46706 = chunk__46577_46696;
var G__46707 = count__46578_46697;
var G__46708 = (i__46579_46698 + (1));
seq__46576_46695 = G__46705;
chunk__46577_46696 = G__46706;
count__46578_46697 = G__46707;
i__46579_46698 = G__46708;
continue;
} else {
var temp__5735__auto___46709 = cljs.core.seq(seq__46576_46695);
if(temp__5735__auto___46709){
var seq__46576_46710__$1 = temp__5735__auto___46709;
if(cljs.core.chunked_seq_QMARK_(seq__46576_46710__$1)){
var c__4556__auto___46711 = cljs.core.chunk_first(seq__46576_46710__$1);
var G__46712 = cljs.core.chunk_rest(seq__46576_46710__$1);
var G__46713 = c__4556__auto___46711;
var G__46714 = cljs.core.count(c__4556__auto___46711);
var G__46715 = (0);
seq__46576_46695 = G__46712;
chunk__46577_46696 = G__46713;
count__46578_46697 = G__46714;
i__46579_46698 = G__46715;
continue;
} else {
var vec__46595_46716 = cljs.core.first(seq__46576_46710__$1);
var name_46717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46595_46716,(0),null);
var map__46598_46718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46595_46716,(1),null);
var map__46598_46719__$1 = (((((!((map__46598_46718 == null))))?(((((map__46598_46718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46598_46718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46598_46718):map__46598_46718);
var doc_46720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46598_46719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46598_46719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46717], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46721], 0));

if(cljs.core.truth_(doc_46720)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46720], 0));
} else {
}


var G__46722 = cljs.core.next(seq__46576_46710__$1);
var G__46723 = null;
var G__46724 = (0);
var G__46725 = (0);
seq__46576_46695 = G__46722;
chunk__46577_46696 = G__46723;
count__46578_46697 = G__46724;
i__46579_46698 = G__46725;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46600 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46601 = null;
var count__46602 = (0);
var i__46603 = (0);
while(true){
if((i__46603 < count__46602)){
var role = chunk__46601.cljs$core$IIndexed$_nth$arity$2(null,i__46603);
var temp__5735__auto___46726__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46726__$1)){
var spec_46727 = temp__5735__auto___46726__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46727)], 0));
} else {
}


var G__46728 = seq__46600;
var G__46729 = chunk__46601;
var G__46730 = count__46602;
var G__46731 = (i__46603 + (1));
seq__46600 = G__46728;
chunk__46601 = G__46729;
count__46602 = G__46730;
i__46603 = G__46731;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46600);
if(temp__5735__auto____$1){
var seq__46600__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46600__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46600__$1);
var G__46732 = cljs.core.chunk_rest(seq__46600__$1);
var G__46733 = c__4556__auto__;
var G__46734 = cljs.core.count(c__4556__auto__);
var G__46735 = (0);
seq__46600 = G__46732;
chunk__46601 = G__46733;
count__46602 = G__46734;
i__46603 = G__46735;
continue;
} else {
var role = cljs.core.first(seq__46600__$1);
var temp__5735__auto___46736__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46736__$2)){
var spec_46737 = temp__5735__auto___46736__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46737)], 0));
} else {
}


var G__46738 = cljs.core.next(seq__46600__$1);
var G__46739 = null;
var G__46740 = (0);
var G__46741 = (0);
seq__46600 = G__46738;
chunk__46601 = G__46739;
count__46602 = G__46740;
i__46603 = G__46741;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46742 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46743 = cljs.core.ex_cause(t);
via = G__46742;
t = G__46743;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46606 = datafied_throwable;
var map__46606__$1 = (((((!((map__46606 == null))))?(((((map__46606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46606):map__46606);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46606__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46606__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46606__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46607 = cljs.core.last(via);
var map__46607__$1 = (((((!((map__46607 == null))))?(((((map__46607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46607):map__46607);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46607__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46607__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46608 = data;
var map__46608__$1 = (((((!((map__46608 == null))))?(((((map__46608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46608):map__46608);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46608__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46608__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46608__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46609 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46609__$1 = (((((!((map__46609 == null))))?(((((map__46609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46609):map__46609);
var top_data = map__46609__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46614 = phase;
var G__46614__$1 = (((G__46614 instanceof cljs.core.Keyword))?G__46614.fqn:null);
switch (G__46614__$1) {
case "read-source":
var map__46615 = data;
var map__46615__$1 = (((((!((map__46615 == null))))?(((((map__46615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46615):map__46615);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46617 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46617);
var G__46617__$2 = (cljs.core.truth_((function (){var fexpr__46618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46618.cljs$core$IFn$_invoke$arity$1 ? fexpr__46618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46617__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46617__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46617__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46619 = top_data;
var G__46619__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46619,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46619);
var G__46619__$2 = (cljs.core.truth_((function (){var fexpr__46620 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46620.cljs$core$IFn$_invoke$arity$1 ? fexpr__46620.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46620.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46619__$1);
var G__46619__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46619__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46619__$2);
var G__46619__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46619__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46619__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46619__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46619__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46621 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46621,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46621,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46621,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46621,(3),null);
var G__46624 = top_data;
var G__46624__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46624,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46624);
var G__46624__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46624__$1);
var G__46624__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46624__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46624__$2);
var G__46624__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46624__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46624__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46624__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46624__$4;
}

break;
case "execution":
var vec__46625 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46625,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46625,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46625,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46625,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46605_SHARP_){
var or__4126__auto__ = (p1__46605_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__46629 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46629.cljs$core$IFn$_invoke$arity$1 ? fexpr__46629.cljs$core$IFn$_invoke$arity$1(p1__46605_SHARP_) : fexpr__46629.call(null,p1__46605_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__46630 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46630__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46630,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46630);
var G__46630__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46630__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46630__$1);
var G__46630__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46630__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46630__$2);
var G__46630__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46630__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46630__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46630__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46630__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46614__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46633){
var map__46634 = p__46633;
var map__46634__$1 = (((((!((map__46634 == null))))?(((((map__46634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46634):map__46634);
var triage_data = map__46634__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46634__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46636 = phase;
var G__46636__$1 = (((G__46636 instanceof cljs.core.Keyword))?G__46636.fqn:null);
switch (G__46636__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46637 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46638 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46639 = loc;
var G__46640 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46641_46746 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46642_46747 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46643_46748 = true;
var _STAR_print_fn_STAR__temp_val__46644_46749 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46643_46748);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46644_46749);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46631_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46631_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46642_46747);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46641_46746);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46637,G__46638,G__46639,G__46640) : format.call(null,G__46637,G__46638,G__46639,G__46640));

break;
case "macroexpansion":
var G__46645 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46646 = cause_type;
var G__46647 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46648 = loc;
var G__46649 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46645,G__46646,G__46647,G__46648,G__46649) : format.call(null,G__46645,G__46646,G__46647,G__46648,G__46649));

break;
case "compile-syntax-check":
var G__46650 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46651 = cause_type;
var G__46652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46653 = loc;
var G__46654 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46650,G__46651,G__46652,G__46653,G__46654) : format.call(null,G__46650,G__46651,G__46652,G__46653,G__46654));

break;
case "compilation":
var G__46655 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46656 = cause_type;
var G__46657 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46658 = loc;
var G__46659 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46655,G__46656,G__46657,G__46658,G__46659) : format.call(null,G__46655,G__46656,G__46657,G__46658,G__46659));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46660 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46661 = symbol;
var G__46662 = loc;
var G__46663 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46664_46750 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46665_46751 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46666_46752 = true;
var _STAR_print_fn_STAR__temp_val__46667_46753 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46666_46752);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46667_46753);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46632_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46632_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46665_46751);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46664_46750);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46660,G__46661,G__46662,G__46663) : format.call(null,G__46660,G__46661,G__46662,G__46663));
} else {
var G__46668 = "Execution error%s at %s(%s).\n%s\n";
var G__46669 = cause_type;
var G__46670 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46671 = loc;
var G__46672 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46668,G__46669,G__46670,G__46671,G__46672) : format.call(null,G__46668,G__46669,G__46670,G__46671,G__46672));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46636__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
