goog.provide('blackjack_cljs.core');
blackjack_cljs.core.mount_components = (function blackjack_cljs$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return blackjack_cljs.views.page;},new cljs.core.Symbol("blackjack-cljs.views","page","blackjack-cljs.views/page",-1543305961,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"blackjack-cljs.views","blackjack-cljs.views",1284532719,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"blackjack_cljs/views.cljs",11,1,96,96,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(blackjack_cljs.views.page)?blackjack_cljs.views.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
blackjack_cljs.core.init_BANG_ = (function blackjack_cljs$core$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">initialize-db",">initialize-db",1347741783)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">play-round",">play-round",1863318230)], null));

return blackjack_cljs.core.mount_components();
});

//# sourceMappingURL=blackjack_cljs.core.js.map
