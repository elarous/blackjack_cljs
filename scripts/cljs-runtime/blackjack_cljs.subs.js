goog.provide('blackjack_cljs.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__48369){
var vec__48370 = p__48369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48370,(0),null);
var contender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48370,(1),null);
var card_name = (function (card){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(card)),clojure.string.upper_case(cljs.core.first(cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card))))].join('');
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (card){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),["imgs/cards/",card_name(card),".svg"].join(''),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881).cljs$core$IFn$_invoke$arity$1(card)], null);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,contender));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__48373){
var vec__48374 = p__48373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374,(0),null);
var contender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374,(1),null);
var G__48377 = contender;
var G__48377__$1 = (((G__48377 instanceof cljs.core.Keyword))?G__48377.fqn:null);
switch (G__48377__$1) {
case "dealer":
return new cljs.core.Keyword(null,"losses","losses",-189206407).cljs$core$IFn$_invoke$arity$1(db);

break;
case "player":
return new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(db);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48377__$1)].join('')));

}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"round","round",2009433328),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"won?","won?",-794748996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"has-won?","has-won?",-620941089).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"lost?","lost?",-1656998727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"has-lost?","has-lost?",1312209101).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"draw?","draw?",1765298547),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"draw?","draw?",1765298547).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=blackjack_cljs.subs.js.map
