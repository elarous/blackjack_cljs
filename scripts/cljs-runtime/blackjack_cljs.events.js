goog.provide('blackjack_cljs.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">initialize-db",">initialize-db",1347741783),(function (_,___$1){
return blackjack_cljs.db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">play-round",">play-round",1863318230),(function (db,_){
return blackjack_cljs.game.initial_deal(blackjack_cljs.game.new_round(db));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">initial-deal",">initial-deal",1896920563),(function (db,_){
return blackjack_cljs.game.initial_deal(db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">stand",">stand",-1973588325),(function (db,_){
return blackjack_cljs.game.dealer_check(blackjack_cljs.game.face_up_cards(db,new cljs.core.Keyword(null,"dealer","dealer",584483718)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">hit",">hit",-1123320816),(function (db,_){
return blackjack_cljs.game.lose_if_bust((blackjack_cljs.game.hit.cljs$core$IFn$_invoke$arity$2 ? blackjack_cljs.game.hit.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"player","player",-97687400)) : blackjack_cljs.game.hit.call(null,db,new cljs.core.Keyword(null,"player","player",-97687400))));
}));

//# sourceMappingURL=blackjack_cljs.events.js.map
