goog.provide('blackjack_cljs.game');
blackjack_cljs.game.queue = (function blackjack_cljs$game$queue(var_args){
var G__48560 = arguments.length;
switch (G__48560) {
case 0:
return blackjack_cljs.game.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return blackjack_cljs.game.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blackjack_cljs.game.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(blackjack_cljs.game.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,coll);
}));

(blackjack_cljs.game.queue.cljs$lang$maxFixedArity = 1);

/**
 * Get a fresh initial state
 */
blackjack_cljs.game.initial_state = (function blackjack_cljs$game$initial_state(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dealer","dealer",584483718),new cljs.core.Keyword(null,"has-lost?","has-lost?",1312209101),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"draw?","draw?",1765298547),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"losses","losses",-189206407),new cljs.core.Keyword(null,"wins","wins",1850756412),new cljs.core.Keyword(null,"has-won?","has-won?",-620941089)],[cljs.core.PersistentVector.EMPTY,false,(0),false,blackjack_cljs.game.queue.cljs$core$IFn$_invoke$arity$1(cljs.core.shuffle((function (){var iter__4529__auto__ = (function blackjack_cljs$game$initial_state_$_iter__48561(s__48562){
return (new cljs.core.LazySeq(null,(function (){
var s__48562__$1 = s__48562;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48562__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var type = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__48562__$1,type,xs__6292__auto__,temp__5735__auto__){
return (function blackjack_cljs$game$initial_state_$_iter__48561_$_iter__48563(s__48564){
return (new cljs.core.LazySeq(null,((function (s__48562__$1,type,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__48564__$1 = s__48564;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48564__$1);
if(temp__5735__auto____$1){
var s__48564__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48564__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48564__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48566 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48565 = (0);
while(true){
if((i__48565 < size__4528__auto__)){
var number = cljs.core._nth(c__4527__auto__,i__48565);
cljs.core.chunk_append(b__48566,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881)],[type,number,false]));

var G__48574 = (i__48565 + (1));
i__48565 = G__48574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48566),blackjack_cljs$game$initial_state_$_iter__48561_$_iter__48563(cljs.core.chunk_rest(s__48564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48566),null);
}
} else {
var number = cljs.core.first(s__48564__$2);
return cljs.core.cons(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881)],[type,number,false]),blackjack_cljs$game$initial_state_$_iter__48561_$_iter__48563(cljs.core.rest(s__48564__$2)));
}
} else {
return null;
}
break;
}
});})(s__48562__$1,type,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__48562__$1,type,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",(2),(3),(4),(5),(6),(7),(8),(9),(10),"J","Q","K"], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,blackjack_cljs$game$initial_state_$_iter__48561(cljs.core.rest(s__48562__$1)));
} else {
var G__48575 = cljs.core.rest(s__48562__$1);
s__48562__$1 = G__48575;
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
});
/**
 * Deal a card to a contender, optionally the card can be dealt face-down
 */
blackjack_cljs.game.deal = (function blackjack_cljs$game$deal(var_args){
var G__48568 = arguments.length;
switch (G__48568) {
case 2:
return blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$2 = (function (state,contender){
return blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$3(state,contender,false);
}));

(blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$3 = (function (state,contender,face_down_QMARK_){
var card = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.peek(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"face-down?","face-down?",1403696881),face_down_QMARK_);
var deal_helper = (function (state__$1,contender__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.pop),contender__$1,cljs.core.conj,card);
});
return deal_helper(state,contender);
}));

(blackjack_cljs.game.deal.cljs$lang$maxFixedArity = 3);

blackjack_cljs.game.hit = blackjack_cljs.game.deal;
blackjack_cljs.game.count_cards_helper = (function blackjack_cljs$game$count_cards_helper(cards){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,(21)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,num){
if(typeof num === 'number'){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,num),acc);
} else {
if(cljs.core.vector_QMARK_(num)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.first(num)),acc),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.second(num)),acc));
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48569_SHARP_){
var G__48570 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__48569_SHARP_);
switch (G__48570) {
case "J":
case "Q":
case "K":
return (10);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11)], null);

break;
default:
return new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__48569_SHARP_);

}
}),cards))));
});
/**
 * Count the cards' values in the hand of a contender
 * The Aces will be counted as 1 or 11, being greedy but not bust
 */
blackjack_cljs.game.count_cards = (function blackjack_cljs$game$count_cards(state,contender){
return blackjack_cljs.game.count_cards_helper(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,contender));
});
/**
 * Check if the contender has a blackjack, try for both Ace values: 1 & 11
 */
blackjack_cljs.game.blackjack_QMARK_ = (function blackjack_cljs$game$blackjack_QMARK_(state,contender){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(blackjack_cljs.game.count_cards(state,contender),(21));
});
/**
 * Check if the contender went bust (cards' values exceed 21)
 */
blackjack_cljs.game.bust_QMARK_ = (function blackjack_cljs$game$bust_QMARK_(state,contender){
return (blackjack_cljs.game.count_cards(state,contender) === (0));
});
/**
 * Flip all contender's cards to be face-up
 */
blackjack_cljs.game.face_up_cards = (function blackjack_cljs$game$face_up_cards(state,contender){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,contender,(function (p1__48571_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (card){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"face-down?","face-down?",1403696881),false);
}),p1__48571_SHARP_);
}));
});
blackjack_cljs.game.add_win = (function blackjack_cljs$game$add_win(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"wins","wins",1850756412),cljs.core.inc),new cljs.core.Keyword(null,"has-won?","has-won?",-620941089),true);
});
blackjack_cljs.game.add_loss = (function blackjack_cljs$game$add_loss(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"losses","losses",-189206407),cljs.core.inc),new cljs.core.Keyword(null,"has-lost?","has-lost?",1312209101),true);
});
blackjack_cljs.game.set_draw = (function blackjack_cljs$game$set_draw(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"draw?","draw?",1765298547),true);
});
/**
 * Start new round, but keep track of the wins, losses and the round number
 */
blackjack_cljs.game.new_round = (function blackjack_cljs$game$new_round(state){
var preserved_data = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wins","wins",1850756412),new cljs.core.Keyword(null,"losses","losses",-189206407),new cljs.core.Keyword(null,"round","round",2009433328)], null)),new cljs.core.Keyword(null,"round","round",2009433328),cljs.core.inc);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blackjack_cljs.game.initial_state(),preserved_data], 0));
});
/**
 * 
 *   Dealer deals 1 card to the player and 1 card to himself
 *   If the player has a blackjack then a win is added and a new round is started
 *   Otherwise the turn is switched to the player
 *   
 */
blackjack_cljs.game.initial_deal = (function blackjack_cljs$game$initial_deal(state){
var new_state = blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$3(blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$2(blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$2(blackjack_cljs.game.deal.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"player","player",-97687400)),new cljs.core.Keyword(null,"dealer","dealer",584483718)),new cljs.core.Keyword(null,"player","player",-97687400)),new cljs.core.Keyword(null,"dealer","dealer",584483718),true);
if(blackjack_cljs.game.blackjack_QMARK_(new_state,new cljs.core.Keyword(null,"player","player",-97687400))){
return blackjack_cljs.game.add_win(new_state);
} else {
return new_state;
}
});
blackjack_cljs.game.soft_17_QMARK_ = (function blackjack_cljs$game$soft_17_QMARK_(state,contender){
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,contender);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),cards)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["A",null,(6),null], null), null));
});
/**
 * 
 *   Check to run after the player takes an action.
 *   If gone bust add a loss to the score.
 *   
 */
blackjack_cljs.game.lose_if_bust = (function blackjack_cljs$game$lose_if_bust(state){
if(blackjack_cljs.game.bust_QMARK_(state,new cljs.core.Keyword(null,"player","player",-97687400))){
return blackjack_cljs.game.add_loss(state);
} else {
return state;
}
});
blackjack_cljs.game.dealer_check = (function blackjack_cljs$game$dealer_check(state){
var counter = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(blackjack_cljs.game.count_cards,state);
var dealer_counts = counter(new cljs.core.Keyword(null,"dealer","dealer",584483718));
var player_counts = counter(new cljs.core.Keyword(null,"player","player",-97687400));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dealer_counts,player_counts)) && (((17) < dealer_counts)))){
return blackjack_cljs.game.set_draw(state);
} else {
if(blackjack_cljs.game.bust_QMARK_(state,new cljs.core.Keyword(null,"dealer","dealer",584483718))){
return blackjack_cljs.game.add_win(state);
} else {
if(((((17) > dealer_counts)) || (blackjack_cljs.game.soft_17_QMARK_(state,new cljs.core.Keyword(null,"dealer","dealer",584483718))))){
var G__48572 = (blackjack_cljs.game.hit.cljs$core$IFn$_invoke$arity$2 ? blackjack_cljs.game.hit.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"dealer","dealer",584483718)) : blackjack_cljs.game.hit.call(null,state,new cljs.core.Keyword(null,"dealer","dealer",584483718)));
return (blackjack_cljs.game.dealer_check.cljs$core$IFn$_invoke$arity$1 ? blackjack_cljs.game.dealer_check.cljs$core$IFn$_invoke$arity$1(G__48572) : blackjack_cljs.game.dealer_check.call(null,G__48572));
} else {
if(((17) <= dealer_counts)){
if((player_counts > dealer_counts)){
return blackjack_cljs.game.add_win(state);
} else {
if((player_counts < dealer_counts)){
return blackjack_cljs.game.add_loss(state);
} else {
return null;
}
}
} else {
throw (new Error(["Assert failed: ","The dealer must take an action","\n","false"].join('')));


}
}
}
}
});

//# sourceMappingURL=blackjack_cljs.game.js.map
