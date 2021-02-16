goog.provide('blackjack_cljs.styles');
blackjack_cljs.styles.colors = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"green","green",-945526839),"#8FE388",new cljs.core.Keyword(null,"red","red",-969428204),"#E26D5A",new cljs.core.Keyword(null,"primary","primary",817773892),"#43BCCD",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#7F7EFF",new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"#2F131E",new cljs.core.Keyword(null,"secondary-text","secondary-text",1926360915),"#240115",new cljs.core.Keyword(null,"grey-lighter","grey-lighter",-842578055),"#F5F5F5",new cljs.core.Keyword(null,"grey-light","grey-light",-1542258926),"#EEEEEE"], null);
blackjack_cljs.styles.sizes = (function blackjack_cljs$styles$sizes(num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((num * (8))),"px"].join('');
});
blackjack_cljs.styles.fonts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main","main",-2117802661),"Indie Flower"], null);
blackjack_cljs.styles.container = (function blackjack_cljs$styles$container(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"20% 60% 20%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),blackjack_cljs.styles.sizes((200))], null);
});
blackjack_cljs.styles.game_row = (function blackjack_cljs$styles$game_row(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"50% 50%",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"20% 60% 20%",new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),"center",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),blackjack_cljs.styles.sizes((2)),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),blackjack_cljs.styles.sizes((2))], null);
});
blackjack_cljs.styles.heading_row = (function blackjack_cljs$styles$heading_row(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.fonts),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),blackjack_cljs.styles.sizes((5)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),blackjack_cljs.styles.sizes((2)),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors)], null);
});
blackjack_cljs.styles.stats_wins = (function blackjack_cljs$styles$stats_wins(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),blackjack_cljs.styles.sizes((4))], null);
});
blackjack_cljs.styles.stats_losses = (function blackjack_cljs$styles$stats_losses(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),blackjack_cljs.styles.sizes((4))], null);
});
blackjack_cljs.styles.contender = (function blackjack_cljs$styles$contender(end_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
});
blackjack_cljs.styles.avatar = (function blackjack_cljs$styles$avatar(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),blackjack_cljs.styles.sizes((15)),new cljs.core.Keyword(null,"width","width",-384071477),blackjack_cljs.styles.sizes((15)),new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grey-lighter","grey-lighter",-842578055).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors))].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"padding","padding",1660304693),blackjack_cljs.styles.sizes((2))], null);
});
blackjack_cljs.styles.player_avatar_img = (function blackjack_cljs$styles$player_avatar_img(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),blackjack_cljs.styles.sizes((14))], null);
});
blackjack_cljs.styles.player_row = (function blackjack_cljs$styles$player_row(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
});
blackjack_cljs.styles.contender_name = (function blackjack_cljs$styles$contender_name(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.fonts),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-text","primary-text",146474209).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),blackjack_cljs.styles.sizes((2)),new cljs.core.Keyword(null,"margin","margin",-995903681),["0 ",blackjack_cljs.styles.sizes((7))].join('')], null);
});
blackjack_cljs.styles.card_container = (function blackjack_cljs$styles$card_container(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),blackjack_cljs.styles.sizes((1))], null);
});
blackjack_cljs.styles.card = (function blackjack_cljs$styles$card(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),blackjack_cljs.styles.sizes((25))], null);
});
blackjack_cljs.styles.cards = (function blackjack_cljs$styles$cards(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);
});
blackjack_cljs.styles.button = (function blackjack_cljs$styles$button(){
return cljs.core.with_meta(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["0 0 20px #eee","white","center",blackjack_cljs.styles.sizes((3)),"0.5s",blackjack_cljs.styles.sizes((30)),[blackjack_cljs.styles.sizes((2))," 0"].join(''),"none","block","none",blackjack_cljs.styles.sizes((1)),"200% auto",new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.fonts),blackjack_cljs.styles.sizes((10)),blackjack_cljs.styles.sizes((1))]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pseudo","pseudo",851696982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-position","background-position",1112702746),"right center",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null)], null)], null));
});
blackjack_cljs.styles.player_actions = (function blackjack_cljs$styles$player_actions(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null);
});
blackjack_cljs.styles.button_hit = (function blackjack_cljs$styles$button_hit(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",new cljs.core.Keyword(null,"margin","margin",-995903681),["0 ",blackjack_cljs.styles.sizes((5))].join('')], null);
});
blackjack_cljs.styles.button_stand = (function blackjack_cljs$styles$button_stand(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)",new cljs.core.Keyword(null,"margin","margin",-995903681),["0 ",blackjack_cljs.styles.sizes((5))].join('')], null);
});
blackjack_cljs.styles.button_new_round = (function blackjack_cljs$styles$button_new_round(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"linear-gradient(to right, #642B73 0%, #C6426E  51%, #642B73  100%)"], null);
});
blackjack_cljs.styles.end_msg = (function blackjack_cljs$styles$end_msg(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.fonts),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),blackjack_cljs.styles.sizes((5)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
});
blackjack_cljs.styles.win = (function blackjack_cljs$styles$win(){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blackjack_cljs.styles.end_msg], null)], null));
});
blackjack_cljs.styles.loss = (function blackjack_cljs$styles$loss(){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blackjack_cljs.styles.end_msg], null)], null));
});
blackjack_cljs.styles.draw = (function blackjack_cljs$styles$draw(){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blackjack_cljs.styles.end_msg], null)], null));
});
blackjack_cljs.styles.hidden_card = (function blackjack_cljs$styles$hidden_card(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"width","width",-384071477),"142px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blackjack_cljs.styles.colors),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),blackjack_cljs.styles.sizes((1))], null);
});

//# sourceMappingURL=blackjack_cljs.styles.js.map
