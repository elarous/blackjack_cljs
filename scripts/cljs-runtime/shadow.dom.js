goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_44960 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_44960(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_44961 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_44961(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44350 = coll;
var G__44351 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44350,G__44351) : shadow.dom.lazy_native_coll_seq.call(null,G__44350,G__44351));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44366 = arguments.length;
switch (G__44366) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44376 = arguments.length;
switch (G__44376) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44381 = arguments.length;
switch (G__44381) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44384 = arguments.length;
switch (G__44384) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44396 = arguments.length;
switch (G__44396) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44405 = arguments.length;
switch (G__44405) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44413){if((e44413 instanceof Object)){
var e = e44413;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44413;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44420 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44421 = null;
var count__44422 = (0);
var i__44423 = (0);
while(true){
if((i__44423 < count__44422)){
var el = chunk__44421.cljs$core$IIndexed$_nth$arity$2(null,i__44423);
var handler_44984__$1 = ((function (seq__44420,chunk__44421,count__44422,i__44423,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44420,chunk__44421,count__44422,i__44423,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44984__$1);


var G__44985 = seq__44420;
var G__44986 = chunk__44421;
var G__44987 = count__44422;
var G__44988 = (i__44423 + (1));
seq__44420 = G__44985;
chunk__44421 = G__44986;
count__44422 = G__44987;
i__44423 = G__44988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44420);
if(temp__5735__auto__){
var seq__44420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44420__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44420__$1);
var G__44990 = cljs.core.chunk_rest(seq__44420__$1);
var G__44991 = c__4556__auto__;
var G__44992 = cljs.core.count(c__4556__auto__);
var G__44993 = (0);
seq__44420 = G__44990;
chunk__44421 = G__44991;
count__44422 = G__44992;
i__44423 = G__44993;
continue;
} else {
var el = cljs.core.first(seq__44420__$1);
var handler_44996__$1 = ((function (seq__44420,chunk__44421,count__44422,i__44423,el,seq__44420__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44420,chunk__44421,count__44422,i__44423,el,seq__44420__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44996__$1);


var G__44998 = cljs.core.next(seq__44420__$1);
var G__44999 = null;
var G__45000 = (0);
var G__45001 = (0);
seq__44420 = G__44998;
chunk__44421 = G__44999;
count__44422 = G__45000;
i__44423 = G__45001;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44432 = arguments.length;
switch (G__44432) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44441 = cljs.core.seq(events);
var chunk__44442 = null;
var count__44443 = (0);
var i__44444 = (0);
while(true){
if((i__44444 < count__44443)){
var vec__44456 = chunk__44442.cljs$core$IIndexed$_nth$arity$2(null,i__44444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45008 = seq__44441;
var G__45009 = chunk__44442;
var G__45010 = count__44443;
var G__45011 = (i__44444 + (1));
seq__44441 = G__45008;
chunk__44442 = G__45009;
count__44443 = G__45010;
i__44444 = G__45011;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44441);
if(temp__5735__auto__){
var seq__44441__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44441__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44441__$1);
var G__45014 = cljs.core.chunk_rest(seq__44441__$1);
var G__45015 = c__4556__auto__;
var G__45016 = cljs.core.count(c__4556__auto__);
var G__45017 = (0);
seq__44441 = G__45014;
chunk__44442 = G__45015;
count__44443 = G__45016;
i__44444 = G__45017;
continue;
} else {
var vec__44462 = cljs.core.first(seq__44441__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44462,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45018 = cljs.core.next(seq__44441__$1);
var G__45019 = null;
var G__45020 = (0);
var G__45021 = (0);
seq__44441 = G__45018;
chunk__44442 = G__45019;
count__44443 = G__45020;
i__44444 = G__45021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44469 = cljs.core.seq(styles);
var chunk__44470 = null;
var count__44471 = (0);
var i__44472 = (0);
while(true){
if((i__44472 < count__44471)){
var vec__44484 = chunk__44470.cljs$core$IIndexed$_nth$arity$2(null,i__44472);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44484,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45025 = seq__44469;
var G__45026 = chunk__44470;
var G__45027 = count__44471;
var G__45028 = (i__44472 + (1));
seq__44469 = G__45025;
chunk__44470 = G__45026;
count__44471 = G__45027;
i__44472 = G__45028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44469);
if(temp__5735__auto__){
var seq__44469__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44469__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44469__$1);
var G__45030 = cljs.core.chunk_rest(seq__44469__$1);
var G__45031 = c__4556__auto__;
var G__45032 = cljs.core.count(c__4556__auto__);
var G__45033 = (0);
seq__44469 = G__45030;
chunk__44470 = G__45031;
count__44471 = G__45032;
i__44472 = G__45033;
continue;
} else {
var vec__44488 = cljs.core.first(seq__44469__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45035 = cljs.core.next(seq__44469__$1);
var G__45036 = null;
var G__45037 = (0);
var G__45038 = (0);
seq__44469 = G__45035;
chunk__44470 = G__45036;
count__44471 = G__45037;
i__44472 = G__45038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44492_45040 = key;
var G__44492_45041__$1 = (((G__44492_45040 instanceof cljs.core.Keyword))?G__44492_45040.fqn:null);
switch (G__44492_45041__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45049 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_45049,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_45049,"aria-");
}
})())){
el.setAttribute(ks_45049,value);
} else {
(el[ks_45049] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44511){
var map__44513 = p__44511;
var map__44513__$1 = (((((!((map__44513 == null))))?(((((map__44513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44513):map__44513);
var props = map__44513__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44513__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44515 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44515,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44515,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44515,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44519 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44519,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44519;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44524 = arguments.length;
switch (G__44524) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44531){
var vec__44532 = p__44531;
var seq__44533 = cljs.core.seq(vec__44532);
var first__44534 = cljs.core.first(seq__44533);
var seq__44533__$1 = cljs.core.next(seq__44533);
var nn = first__44534;
var first__44534__$1 = cljs.core.first(seq__44533__$1);
var seq__44533__$2 = cljs.core.next(seq__44533__$1);
var np = first__44534__$1;
var nc = seq__44533__$2;
var node = vec__44532;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44537 = nn;
var G__44538 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44537,G__44538) : create_fn.call(null,G__44537,G__44538));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44540 = nn;
var G__44541 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44540,G__44541) : create_fn.call(null,G__44540,G__44541));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44542 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44542,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44542,(1),null);
var seq__44545_45073 = cljs.core.seq(node_children);
var chunk__44546_45074 = null;
var count__44547_45075 = (0);
var i__44548_45076 = (0);
while(true){
if((i__44548_45076 < count__44547_45075)){
var child_struct_45079 = chunk__44546_45074.cljs$core$IIndexed$_nth$arity$2(null,i__44548_45076);
var children_45080 = shadow.dom.dom_node(child_struct_45079);
if(cljs.core.seq_QMARK_(children_45080)){
var seq__44580_45081 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45080));
var chunk__44582_45082 = null;
var count__44583_45083 = (0);
var i__44584_45084 = (0);
while(true){
if((i__44584_45084 < count__44583_45083)){
var child_45086 = chunk__44582_45082.cljs$core$IIndexed$_nth$arity$2(null,i__44584_45084);
if(cljs.core.truth_(child_45086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45086);


var G__45087 = seq__44580_45081;
var G__45088 = chunk__44582_45082;
var G__45089 = count__44583_45083;
var G__45090 = (i__44584_45084 + (1));
seq__44580_45081 = G__45087;
chunk__44582_45082 = G__45088;
count__44583_45083 = G__45089;
i__44584_45084 = G__45090;
continue;
} else {
var G__45092 = seq__44580_45081;
var G__45093 = chunk__44582_45082;
var G__45094 = count__44583_45083;
var G__45095 = (i__44584_45084 + (1));
seq__44580_45081 = G__45092;
chunk__44582_45082 = G__45093;
count__44583_45083 = G__45094;
i__44584_45084 = G__45095;
continue;
}
} else {
var temp__5735__auto___45096 = cljs.core.seq(seq__44580_45081);
if(temp__5735__auto___45096){
var seq__44580_45097__$1 = temp__5735__auto___45096;
if(cljs.core.chunked_seq_QMARK_(seq__44580_45097__$1)){
var c__4556__auto___45098 = cljs.core.chunk_first(seq__44580_45097__$1);
var G__45099 = cljs.core.chunk_rest(seq__44580_45097__$1);
var G__45100 = c__4556__auto___45098;
var G__45101 = cljs.core.count(c__4556__auto___45098);
var G__45102 = (0);
seq__44580_45081 = G__45099;
chunk__44582_45082 = G__45100;
count__44583_45083 = G__45101;
i__44584_45084 = G__45102;
continue;
} else {
var child_45105 = cljs.core.first(seq__44580_45097__$1);
if(cljs.core.truth_(child_45105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45105);


var G__45106 = cljs.core.next(seq__44580_45097__$1);
var G__45107 = null;
var G__45108 = (0);
var G__45109 = (0);
seq__44580_45081 = G__45106;
chunk__44582_45082 = G__45107;
count__44583_45083 = G__45108;
i__44584_45084 = G__45109;
continue;
} else {
var G__45111 = cljs.core.next(seq__44580_45097__$1);
var G__45112 = null;
var G__45113 = (0);
var G__45114 = (0);
seq__44580_45081 = G__45111;
chunk__44582_45082 = G__45112;
count__44583_45083 = G__45113;
i__44584_45084 = G__45114;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45080);
}


var G__45115 = seq__44545_45073;
var G__45116 = chunk__44546_45074;
var G__45117 = count__44547_45075;
var G__45118 = (i__44548_45076 + (1));
seq__44545_45073 = G__45115;
chunk__44546_45074 = G__45116;
count__44547_45075 = G__45117;
i__44548_45076 = G__45118;
continue;
} else {
var temp__5735__auto___45119 = cljs.core.seq(seq__44545_45073);
if(temp__5735__auto___45119){
var seq__44545_45120__$1 = temp__5735__auto___45119;
if(cljs.core.chunked_seq_QMARK_(seq__44545_45120__$1)){
var c__4556__auto___45121 = cljs.core.chunk_first(seq__44545_45120__$1);
var G__45122 = cljs.core.chunk_rest(seq__44545_45120__$1);
var G__45123 = c__4556__auto___45121;
var G__45124 = cljs.core.count(c__4556__auto___45121);
var G__45125 = (0);
seq__44545_45073 = G__45122;
chunk__44546_45074 = G__45123;
count__44547_45075 = G__45124;
i__44548_45076 = G__45125;
continue;
} else {
var child_struct_45126 = cljs.core.first(seq__44545_45120__$1);
var children_45128 = shadow.dom.dom_node(child_struct_45126);
if(cljs.core.seq_QMARK_(children_45128)){
var seq__44591_45129 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45128));
var chunk__44593_45130 = null;
var count__44594_45131 = (0);
var i__44595_45132 = (0);
while(true){
if((i__44595_45132 < count__44594_45131)){
var child_45133 = chunk__44593_45130.cljs$core$IIndexed$_nth$arity$2(null,i__44595_45132);
if(cljs.core.truth_(child_45133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45133);


var G__45137 = seq__44591_45129;
var G__45138 = chunk__44593_45130;
var G__45139 = count__44594_45131;
var G__45140 = (i__44595_45132 + (1));
seq__44591_45129 = G__45137;
chunk__44593_45130 = G__45138;
count__44594_45131 = G__45139;
i__44595_45132 = G__45140;
continue;
} else {
var G__45142 = seq__44591_45129;
var G__45143 = chunk__44593_45130;
var G__45144 = count__44594_45131;
var G__45145 = (i__44595_45132 + (1));
seq__44591_45129 = G__45142;
chunk__44593_45130 = G__45143;
count__44594_45131 = G__45144;
i__44595_45132 = G__45145;
continue;
}
} else {
var temp__5735__auto___45147__$1 = cljs.core.seq(seq__44591_45129);
if(temp__5735__auto___45147__$1){
var seq__44591_45148__$1 = temp__5735__auto___45147__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44591_45148__$1)){
var c__4556__auto___45149 = cljs.core.chunk_first(seq__44591_45148__$1);
var G__45151 = cljs.core.chunk_rest(seq__44591_45148__$1);
var G__45152 = c__4556__auto___45149;
var G__45153 = cljs.core.count(c__4556__auto___45149);
var G__45154 = (0);
seq__44591_45129 = G__45151;
chunk__44593_45130 = G__45152;
count__44594_45131 = G__45153;
i__44595_45132 = G__45154;
continue;
} else {
var child_45155 = cljs.core.first(seq__44591_45148__$1);
if(cljs.core.truth_(child_45155)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45155);


var G__45156 = cljs.core.next(seq__44591_45148__$1);
var G__45157 = null;
var G__45158 = (0);
var G__45159 = (0);
seq__44591_45129 = G__45156;
chunk__44593_45130 = G__45157;
count__44594_45131 = G__45158;
i__44595_45132 = G__45159;
continue;
} else {
var G__45161 = cljs.core.next(seq__44591_45148__$1);
var G__45162 = null;
var G__45163 = (0);
var G__45164 = (0);
seq__44591_45129 = G__45161;
chunk__44593_45130 = G__45162;
count__44594_45131 = G__45163;
i__44595_45132 = G__45164;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45128);
}


var G__45165 = cljs.core.next(seq__44545_45120__$1);
var G__45166 = null;
var G__45167 = (0);
var G__45168 = (0);
seq__44545_45073 = G__45165;
chunk__44546_45074 = G__45166;
count__44547_45075 = G__45167;
i__44548_45076 = G__45168;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44607 = cljs.core.seq(node);
var chunk__44608 = null;
var count__44609 = (0);
var i__44610 = (0);
while(true){
if((i__44610 < count__44609)){
var n = chunk__44608.cljs$core$IIndexed$_nth$arity$2(null,i__44610);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45177 = seq__44607;
var G__45178 = chunk__44608;
var G__45179 = count__44609;
var G__45180 = (i__44610 + (1));
seq__44607 = G__45177;
chunk__44608 = G__45178;
count__44609 = G__45179;
i__44610 = G__45180;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44607);
if(temp__5735__auto__){
var seq__44607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44607__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44607__$1);
var G__45182 = cljs.core.chunk_rest(seq__44607__$1);
var G__45183 = c__4556__auto__;
var G__45184 = cljs.core.count(c__4556__auto__);
var G__45185 = (0);
seq__44607 = G__45182;
chunk__44608 = G__45183;
count__44609 = G__45184;
i__44610 = G__45185;
continue;
} else {
var n = cljs.core.first(seq__44607__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45187 = cljs.core.next(seq__44607__$1);
var G__45188 = null;
var G__45189 = (0);
var G__45190 = (0);
seq__44607 = G__45187;
chunk__44608 = G__45188;
count__44609 = G__45189;
i__44610 = G__45190;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44620 = arguments.length;
switch (G__44620) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44627 = arguments.length;
switch (G__44627) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44635 = arguments.length;
switch (G__44635) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45210 = arguments.length;
var i__4737__auto___45211 = (0);
while(true){
if((i__4737__auto___45211 < len__4736__auto___45210)){
args__4742__auto__.push((arguments[i__4737__auto___45211]));

var G__45213 = (i__4737__auto___45211 + (1));
i__4737__auto___45211 = G__45213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44653_45215 = cljs.core.seq(nodes);
var chunk__44654_45216 = null;
var count__44655_45217 = (0);
var i__44656_45218 = (0);
while(true){
if((i__44656_45218 < count__44655_45217)){
var node_45220 = chunk__44654_45216.cljs$core$IIndexed$_nth$arity$2(null,i__44656_45218);
fragment.appendChild(shadow.dom._to_dom(node_45220));


var G__45221 = seq__44653_45215;
var G__45222 = chunk__44654_45216;
var G__45223 = count__44655_45217;
var G__45224 = (i__44656_45218 + (1));
seq__44653_45215 = G__45221;
chunk__44654_45216 = G__45222;
count__44655_45217 = G__45223;
i__44656_45218 = G__45224;
continue;
} else {
var temp__5735__auto___45225 = cljs.core.seq(seq__44653_45215);
if(temp__5735__auto___45225){
var seq__44653_45226__$1 = temp__5735__auto___45225;
if(cljs.core.chunked_seq_QMARK_(seq__44653_45226__$1)){
var c__4556__auto___45227 = cljs.core.chunk_first(seq__44653_45226__$1);
var G__45232 = cljs.core.chunk_rest(seq__44653_45226__$1);
var G__45233 = c__4556__auto___45227;
var G__45234 = cljs.core.count(c__4556__auto___45227);
var G__45235 = (0);
seq__44653_45215 = G__45232;
chunk__44654_45216 = G__45233;
count__44655_45217 = G__45234;
i__44656_45218 = G__45235;
continue;
} else {
var node_45236 = cljs.core.first(seq__44653_45226__$1);
fragment.appendChild(shadow.dom._to_dom(node_45236));


var G__45237 = cljs.core.next(seq__44653_45226__$1);
var G__45238 = null;
var G__45239 = (0);
var G__45240 = (0);
seq__44653_45215 = G__45237;
chunk__44654_45216 = G__45238;
count__44655_45217 = G__45239;
i__44656_45218 = G__45240;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44649){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44649));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44669_45242 = cljs.core.seq(scripts);
var chunk__44670_45243 = null;
var count__44672_45244 = (0);
var i__44673_45245 = (0);
while(true){
if((i__44673_45245 < count__44672_45244)){
var vec__44683_45247 = chunk__44670_45243.cljs$core$IIndexed$_nth$arity$2(null,i__44673_45245);
var script_tag_45248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44683_45247,(0),null);
var script_body_45249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44683_45247,(1),null);
eval(script_body_45249);


var G__45251 = seq__44669_45242;
var G__45252 = chunk__44670_45243;
var G__45253 = count__44672_45244;
var G__45254 = (i__44673_45245 + (1));
seq__44669_45242 = G__45251;
chunk__44670_45243 = G__45252;
count__44672_45244 = G__45253;
i__44673_45245 = G__45254;
continue;
} else {
var temp__5735__auto___45255 = cljs.core.seq(seq__44669_45242);
if(temp__5735__auto___45255){
var seq__44669_45256__$1 = temp__5735__auto___45255;
if(cljs.core.chunked_seq_QMARK_(seq__44669_45256__$1)){
var c__4556__auto___45257 = cljs.core.chunk_first(seq__44669_45256__$1);
var G__45258 = cljs.core.chunk_rest(seq__44669_45256__$1);
var G__45259 = c__4556__auto___45257;
var G__45260 = cljs.core.count(c__4556__auto___45257);
var G__45261 = (0);
seq__44669_45242 = G__45258;
chunk__44670_45243 = G__45259;
count__44672_45244 = G__45260;
i__44673_45245 = G__45261;
continue;
} else {
var vec__44687_45263 = cljs.core.first(seq__44669_45256__$1);
var script_tag_45264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44687_45263,(0),null);
var script_body_45265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44687_45263,(1),null);
eval(script_body_45265);


var G__45266 = cljs.core.next(seq__44669_45256__$1);
var G__45267 = null;
var G__45268 = (0);
var G__45269 = (0);
seq__44669_45242 = G__45266;
chunk__44670_45243 = G__45267;
count__44672_45244 = G__45268;
i__44673_45245 = G__45269;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44691){
var vec__44692 = p__44691;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44692,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44692,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44699 = arguments.length;
switch (G__44699) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44707 = cljs.core.seq(style_keys);
var chunk__44708 = null;
var count__44709 = (0);
var i__44710 = (0);
while(true){
if((i__44710 < count__44709)){
var it = chunk__44708.cljs$core$IIndexed$_nth$arity$2(null,i__44710);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45283 = seq__44707;
var G__45284 = chunk__44708;
var G__45285 = count__44709;
var G__45286 = (i__44710 + (1));
seq__44707 = G__45283;
chunk__44708 = G__45284;
count__44709 = G__45285;
i__44710 = G__45286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44707);
if(temp__5735__auto__){
var seq__44707__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44707__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44707__$1);
var G__45287 = cljs.core.chunk_rest(seq__44707__$1);
var G__45288 = c__4556__auto__;
var G__45289 = cljs.core.count(c__4556__auto__);
var G__45290 = (0);
seq__44707 = G__45287;
chunk__44708 = G__45288;
count__44709 = G__45289;
i__44710 = G__45290;
continue;
} else {
var it = cljs.core.first(seq__44707__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45291 = cljs.core.next(seq__44707__$1);
var G__45292 = null;
var G__45293 = (0);
var G__45294 = (0);
seq__44707 = G__45291;
chunk__44708 = G__45292;
count__44709 = G__45293;
i__44710 = G__45294;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44712,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44716 = k44712;
var G__44716__$1 = (((G__44716 instanceof cljs.core.Keyword))?G__44716.fqn:null);
switch (G__44716__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44712,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44719){
var vec__44720 = p__44719;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44711){
var self__ = this;
var G__44711__$1 = this;
return (new cljs.core.RecordIter((0),G__44711__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44713,other44714){
var self__ = this;
var this44713__$1 = this;
return (((!((other44714 == null)))) && ((this44713__$1.constructor === other44714.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44713__$1.x,other44714.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44713__$1.y,other44714.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44713__$1.__extmap,other44714.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44711){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44738 = cljs.core.keyword_identical_QMARK_;
var expr__44739 = k__4388__auto__;
if(cljs.core.truth_((pred__44738.cljs$core$IFn$_invoke$arity$2 ? pred__44738.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44739) : pred__44738.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44739)))){
return (new shadow.dom.Coordinate(G__44711,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44738.cljs$core$IFn$_invoke$arity$2 ? pred__44738.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44739) : pred__44738.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44739)))){
return (new shadow.dom.Coordinate(self__.x,G__44711,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44711),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44711){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44711,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44715){
var extmap__4419__auto__ = (function (){var G__44753 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44715,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44715)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44753);
} else {
return G__44753;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44715),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44715),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44766,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44773 = k44766;
var G__44773__$1 = (((G__44773 instanceof cljs.core.Keyword))?G__44773.fqn:null);
switch (G__44773__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44766,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44777){
var vec__44778 = p__44777;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44778,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44778,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44765){
var self__ = this;
var G__44765__$1 = this;
return (new cljs.core.RecordIter((0),G__44765__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44767,other44768){
var self__ = this;
var this44767__$1 = this;
return (((!((other44768 == null)))) && ((this44767__$1.constructor === other44768.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44767__$1.w,other44768.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44767__$1.h,other44768.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44767__$1.__extmap,other44768.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44765){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44789 = cljs.core.keyword_identical_QMARK_;
var expr__44790 = k__4388__auto__;
if(cljs.core.truth_((pred__44789.cljs$core$IFn$_invoke$arity$2 ? pred__44789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44790) : pred__44789.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44790)))){
return (new shadow.dom.Size(G__44765,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44789.cljs$core$IFn$_invoke$arity$2 ? pred__44789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44790) : pred__44789.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44790)))){
return (new shadow.dom.Size(self__.w,G__44765,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44765),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44765){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44765,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44771){
var extmap__4419__auto__ = (function (){var G__44794 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44771,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44771)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44794);
} else {
return G__44794;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44771),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44771),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__45330 = (i + (1));
var G__45331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45330;
ret = G__45331;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44810){
var vec__44812 = p__44810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44812,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44819 = arguments.length;
switch (G__44819) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45336 = ps;
var G__45337 = (i + (1));
el__$1 = G__45336;
i = G__45337;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__44836 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44836,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44836,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44836,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44840_45338 = cljs.core.seq(props);
var chunk__44841_45339 = null;
var count__44842_45340 = (0);
var i__44843_45341 = (0);
while(true){
if((i__44843_45341 < count__44842_45340)){
var vec__44853_45342 = chunk__44841_45339.cljs$core$IIndexed$_nth$arity$2(null,i__44843_45341);
var k_45343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44853_45342,(0),null);
var v_45344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44853_45342,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_45343);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45343),v_45344);


var G__45346 = seq__44840_45338;
var G__45347 = chunk__44841_45339;
var G__45348 = count__44842_45340;
var G__45349 = (i__44843_45341 + (1));
seq__44840_45338 = G__45346;
chunk__44841_45339 = G__45347;
count__44842_45340 = G__45348;
i__44843_45341 = G__45349;
continue;
} else {
var temp__5735__auto___45351 = cljs.core.seq(seq__44840_45338);
if(temp__5735__auto___45351){
var seq__44840_45352__$1 = temp__5735__auto___45351;
if(cljs.core.chunked_seq_QMARK_(seq__44840_45352__$1)){
var c__4556__auto___45353 = cljs.core.chunk_first(seq__44840_45352__$1);
var G__45354 = cljs.core.chunk_rest(seq__44840_45352__$1);
var G__45355 = c__4556__auto___45353;
var G__45356 = cljs.core.count(c__4556__auto___45353);
var G__45357 = (0);
seq__44840_45338 = G__45354;
chunk__44841_45339 = G__45355;
count__44842_45340 = G__45356;
i__44843_45341 = G__45357;
continue;
} else {
var vec__44856_45358 = cljs.core.first(seq__44840_45352__$1);
var k_45359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856_45358,(0),null);
var v_45360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856_45358,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_45359);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45359),v_45360);


var G__45361 = cljs.core.next(seq__44840_45352__$1);
var G__45362 = null;
var G__45363 = (0);
var G__45364 = (0);
seq__44840_45338 = G__45361;
chunk__44841_45339 = G__45362;
count__44842_45340 = G__45363;
i__44843_45341 = G__45364;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__44867 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867,(1),null);
var seq__44871_45366 = cljs.core.seq(node_children);
var chunk__44873_45367 = null;
var count__44874_45368 = (0);
var i__44875_45369 = (0);
while(true){
if((i__44875_45369 < count__44874_45368)){
var child_struct_45370 = chunk__44873_45367.cljs$core$IIndexed$_nth$arity$2(null,i__44875_45369);
if((!((child_struct_45370 == null)))){
if(typeof child_struct_45370 === 'string'){
var text_45371 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45371),child_struct_45370].join(''));
} else {
var children_45376 = shadow.dom.svg_node(child_struct_45370);
if(cljs.core.seq_QMARK_(children_45376)){
var seq__44903_45377 = cljs.core.seq(children_45376);
var chunk__44905_45378 = null;
var count__44906_45379 = (0);
var i__44907_45380 = (0);
while(true){
if((i__44907_45380 < count__44906_45379)){
var child_45381 = chunk__44905_45378.cljs$core$IIndexed$_nth$arity$2(null,i__44907_45380);
if(cljs.core.truth_(child_45381)){
node.appendChild(child_45381);


var G__45383 = seq__44903_45377;
var G__45384 = chunk__44905_45378;
var G__45385 = count__44906_45379;
var G__45386 = (i__44907_45380 + (1));
seq__44903_45377 = G__45383;
chunk__44905_45378 = G__45384;
count__44906_45379 = G__45385;
i__44907_45380 = G__45386;
continue;
} else {
var G__45387 = seq__44903_45377;
var G__45388 = chunk__44905_45378;
var G__45389 = count__44906_45379;
var G__45390 = (i__44907_45380 + (1));
seq__44903_45377 = G__45387;
chunk__44905_45378 = G__45388;
count__44906_45379 = G__45389;
i__44907_45380 = G__45390;
continue;
}
} else {
var temp__5735__auto___45391 = cljs.core.seq(seq__44903_45377);
if(temp__5735__auto___45391){
var seq__44903_45392__$1 = temp__5735__auto___45391;
if(cljs.core.chunked_seq_QMARK_(seq__44903_45392__$1)){
var c__4556__auto___45393 = cljs.core.chunk_first(seq__44903_45392__$1);
var G__45394 = cljs.core.chunk_rest(seq__44903_45392__$1);
var G__45395 = c__4556__auto___45393;
var G__45396 = cljs.core.count(c__4556__auto___45393);
var G__45397 = (0);
seq__44903_45377 = G__45394;
chunk__44905_45378 = G__45395;
count__44906_45379 = G__45396;
i__44907_45380 = G__45397;
continue;
} else {
var child_45398 = cljs.core.first(seq__44903_45392__$1);
if(cljs.core.truth_(child_45398)){
node.appendChild(child_45398);


var G__45399 = cljs.core.next(seq__44903_45392__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__44903_45377 = G__45399;
chunk__44905_45378 = G__45400;
count__44906_45379 = G__45401;
i__44907_45380 = G__45402;
continue;
} else {
var G__45403 = cljs.core.next(seq__44903_45392__$1);
var G__45404 = null;
var G__45405 = (0);
var G__45406 = (0);
seq__44903_45377 = G__45403;
chunk__44905_45378 = G__45404;
count__44906_45379 = G__45405;
i__44907_45380 = G__45406;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45376);
}
}


var G__45408 = seq__44871_45366;
var G__45409 = chunk__44873_45367;
var G__45410 = count__44874_45368;
var G__45411 = (i__44875_45369 + (1));
seq__44871_45366 = G__45408;
chunk__44873_45367 = G__45409;
count__44874_45368 = G__45410;
i__44875_45369 = G__45411;
continue;
} else {
var G__45412 = seq__44871_45366;
var G__45413 = chunk__44873_45367;
var G__45414 = count__44874_45368;
var G__45415 = (i__44875_45369 + (1));
seq__44871_45366 = G__45412;
chunk__44873_45367 = G__45413;
count__44874_45368 = G__45414;
i__44875_45369 = G__45415;
continue;
}
} else {
var temp__5735__auto___45416 = cljs.core.seq(seq__44871_45366);
if(temp__5735__auto___45416){
var seq__44871_45417__$1 = temp__5735__auto___45416;
if(cljs.core.chunked_seq_QMARK_(seq__44871_45417__$1)){
var c__4556__auto___45418 = cljs.core.chunk_first(seq__44871_45417__$1);
var G__45419 = cljs.core.chunk_rest(seq__44871_45417__$1);
var G__45420 = c__4556__auto___45418;
var G__45421 = cljs.core.count(c__4556__auto___45418);
var G__45422 = (0);
seq__44871_45366 = G__45419;
chunk__44873_45367 = G__45420;
count__44874_45368 = G__45421;
i__44875_45369 = G__45422;
continue;
} else {
var child_struct_45423 = cljs.core.first(seq__44871_45417__$1);
if((!((child_struct_45423 == null)))){
if(typeof child_struct_45423 === 'string'){
var text_45425 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45425),child_struct_45423].join(''));
} else {
var children_45429 = shadow.dom.svg_node(child_struct_45423);
if(cljs.core.seq_QMARK_(children_45429)){
var seq__44917_45430 = cljs.core.seq(children_45429);
var chunk__44919_45431 = null;
var count__44920_45432 = (0);
var i__44921_45433 = (0);
while(true){
if((i__44921_45433 < count__44920_45432)){
var child_45434 = chunk__44919_45431.cljs$core$IIndexed$_nth$arity$2(null,i__44921_45433);
if(cljs.core.truth_(child_45434)){
node.appendChild(child_45434);


var G__45435 = seq__44917_45430;
var G__45436 = chunk__44919_45431;
var G__45437 = count__44920_45432;
var G__45438 = (i__44921_45433 + (1));
seq__44917_45430 = G__45435;
chunk__44919_45431 = G__45436;
count__44920_45432 = G__45437;
i__44921_45433 = G__45438;
continue;
} else {
var G__45439 = seq__44917_45430;
var G__45440 = chunk__44919_45431;
var G__45441 = count__44920_45432;
var G__45442 = (i__44921_45433 + (1));
seq__44917_45430 = G__45439;
chunk__44919_45431 = G__45440;
count__44920_45432 = G__45441;
i__44921_45433 = G__45442;
continue;
}
} else {
var temp__5735__auto___45443__$1 = cljs.core.seq(seq__44917_45430);
if(temp__5735__auto___45443__$1){
var seq__44917_45444__$1 = temp__5735__auto___45443__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44917_45444__$1)){
var c__4556__auto___45445 = cljs.core.chunk_first(seq__44917_45444__$1);
var G__45446 = cljs.core.chunk_rest(seq__44917_45444__$1);
var G__45447 = c__4556__auto___45445;
var G__45448 = cljs.core.count(c__4556__auto___45445);
var G__45449 = (0);
seq__44917_45430 = G__45446;
chunk__44919_45431 = G__45447;
count__44920_45432 = G__45448;
i__44921_45433 = G__45449;
continue;
} else {
var child_45450 = cljs.core.first(seq__44917_45444__$1);
if(cljs.core.truth_(child_45450)){
node.appendChild(child_45450);


var G__45451 = cljs.core.next(seq__44917_45444__$1);
var G__45452 = null;
var G__45453 = (0);
var G__45454 = (0);
seq__44917_45430 = G__45451;
chunk__44919_45431 = G__45452;
count__44920_45432 = G__45453;
i__44921_45433 = G__45454;
continue;
} else {
var G__45455 = cljs.core.next(seq__44917_45444__$1);
var G__45456 = null;
var G__45457 = (0);
var G__45458 = (0);
seq__44917_45430 = G__45455;
chunk__44919_45431 = G__45456;
count__44920_45432 = G__45457;
i__44921_45433 = G__45458;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45429);
}
}


var G__45459 = cljs.core.next(seq__44871_45417__$1);
var G__45460 = null;
var G__45461 = (0);
var G__45462 = (0);
seq__44871_45366 = G__45459;
chunk__44873_45367 = G__45460;
count__44874_45368 = G__45461;
i__44875_45369 = G__45462;
continue;
} else {
var G__45463 = cljs.core.next(seq__44871_45417__$1);
var G__45464 = null;
var G__45465 = (0);
var G__45466 = (0);
seq__44871_45366 = G__45463;
chunk__44873_45367 = G__45464;
count__44874_45368 = G__45465;
i__44875_45369 = G__45466;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45467 = arguments.length;
var i__4737__auto___45468 = (0);
while(true){
if((i__4737__auto___45468 < len__4736__auto___45467)){
args__4742__auto__.push((arguments[i__4737__auto___45468]));

var G__45469 = (i__4737__auto___45468 + (1));
i__4737__auto___45468 = G__45469;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44931){
var G__44932 = cljs.core.first(seq44931);
var seq44931__$1 = cljs.core.next(seq44931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44932,seq44931__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__44940 = arguments.length;
switch (G__44940) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__42136__auto___45474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44952){
var state_val_44953 = (state_44952[(1)]);
if((state_val_44953 === (1))){
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44952__$1,(2),once_or_cleanup);
} else {
if((state_val_44953 === (2))){
var inst_44949 = (state_44952[(2)]);
var inst_44950 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44952__$1 = (function (){var statearr_44954 = state_44952;
(statearr_44954[(7)] = inst_44949);

return statearr_44954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44952__$1,inst_44950);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42011__auto__ = null;
var shadow$dom$state_machine__42011__auto____0 = (function (){
var statearr_44955 = [null,null,null,null,null,null,null,null];
(statearr_44955[(0)] = shadow$dom$state_machine__42011__auto__);

(statearr_44955[(1)] = (1));

return statearr_44955;
});
var shadow$dom$state_machine__42011__auto____1 = (function (state_44952){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44952);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44956){var ex__42014__auto__ = e44956;
var statearr_44957_45475 = state_44952;
(statearr_44957_45475[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44952[(4)]))){
var statearr_44958_45476 = state_44952;
(statearr_44958_45476[(1)] = cljs.core.first((state_44952[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45477 = state_44952;
state_44952 = G__45477;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
shadow$dom$state_machine__42011__auto__ = function(state_44952){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42011__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42011__auto____1.call(this,state_44952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42011__auto____0;
shadow$dom$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42011__auto____1;
return shadow$dom$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44959 = f__42137__auto__();
(statearr_44959[(6)] = c__42136__auto___45474);

return statearr_44959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
