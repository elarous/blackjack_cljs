goog.provide('blackjack_cljs.db');
blackjack_cljs.db.queue = (function blackjack_cljs$db$queue(var_args){
var G__48549 = arguments.length;
switch (G__48549) {
case 0:
return blackjack_cljs.db.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return blackjack_cljs.db.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blackjack_cljs.db.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(blackjack_cljs.db.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,coll);
}));

(blackjack_cljs.db.queue.cljs$lang$maxFixedArity = 1);

blackjack_cljs.db.app_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dealer","dealer",584483718),new cljs.core.Keyword(null,"has-lost?","has-lost?",1312209101),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"draw?","draw?",1765298547),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"losses","losses",-189206407),new cljs.core.Keyword(null,"wins","wins",1850756412),new cljs.core.Keyword(null,"has-won?","has-won?",-620941089)],[cljs.core.PersistentVector.EMPTY,false,(0),false,blackjack_cljs.db.queue.cljs$core$IFn$_invoke$arity$1(cljs.core.shuffle((function (){var iter__4529__auto__ = (function blackjack_cljs$db$iter__48550(s__48551){
return (new cljs.core.LazySeq(null,(function (){
var s__48551__$1 = s__48551;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48551__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var type = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__48551__$1,type,xs__6292__auto__,temp__5735__auto__){
return (function blackjack_cljs$db$iter__48550_$_iter__48552(s__48553){
return (new cljs.core.LazySeq(null,((function (s__48551__$1,type,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__48553__$1 = s__48553;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48553__$1);
if(temp__5735__auto____$1){
var s__48553__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48553__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48553__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48555 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48554 = (0);
while(true){
if((i__48554 < size__4528__auto__)){
var number = cljs.core._nth(c__4527__auto__,i__48554);
cljs.core.chunk_append(b__48555,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881)],[type,number,false]));

var G__48557 = (i__48554 + (1));
i__48554 = G__48557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48555),blackjack_cljs$db$iter__48550_$_iter__48552(cljs.core.chunk_rest(s__48553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48555),null);
}
} else {
var number = cljs.core.first(s__48553__$2);
return cljs.core.cons(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881)],[type,number,false]),blackjack_cljs$db$iter__48550_$_iter__48552(cljs.core.rest(s__48553__$2)));
}
} else {
return null;
}
break;
}
});})(s__48551__$1,type,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__48551__$1,type,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",(2),(3),(4),(5),(6),(7),(8),(9),(10),"J","Q","K"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,blackjack_cljs$db$iter__48550(cljs.core.rest(s__48551__$1)));
} else {
var G__48558 = cljs.core.rest(s__48551__$1);
s__48551__$1 = G__48558;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hearts","hearts",-701365391),new cljs.core.Keyword(null,"clubs","clubs",-1540603567),new cljs.core.Keyword(null,"diamonds","diamonds",-145346074),new cljs.core.Keyword(null,"spades","spades",1715303139)], null));
})())),cljs.core.PersistentVector.EMPTY,(0),(0),false]);

//# sourceMappingURL=blackjack_cljs.db.js.map
