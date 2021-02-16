goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42211 = arguments.length;
switch (G__42211) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42214 = (function (f,blockable,meta42215){
this.f = f;
this.blockable = blockable;
this.meta42215 = meta42215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42216,meta42215__$1){
var self__ = this;
var _42216__$1 = this;
return (new cljs.core.async.t_cljs$core$async42214(self__.f,self__.blockable,meta42215__$1));
}));

(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42216){
var self__ = this;
var _42216__$1 = this;
return self__.meta42215;
}));

(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42215","meta42215",1626856729,null)], null);
}));

(cljs.core.async.t_cljs$core$async42214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42214");

(cljs.core.async.t_cljs$core$async42214.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42214.
 */
cljs.core.async.__GT_t_cljs$core$async42214 = (function cljs$core$async$__GT_t_cljs$core$async42214(f__$1,blockable__$1,meta42215){
return (new cljs.core.async.t_cljs$core$async42214(f__$1,blockable__$1,meta42215));
});

}

return (new cljs.core.async.t_cljs$core$async42214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42240 = arguments.length;
switch (G__42240) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42248 = arguments.length;
switch (G__42248) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42250 = arguments.length;
switch (G__42250) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44338 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44338) : fn1.call(null,val_44338));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44338) : fn1.call(null,val_44338));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42260 = arguments.length;
switch (G__42260) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___44347 = n;
var x_44348 = (0);
while(true){
if((x_44348 < n__4613__auto___44347)){
(a[x_44348] = x_44348);

var G__44349 = (x_44348 + (1));
x_44348 = G__44349;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42265 = (function (flag,meta42266){
this.flag = flag;
this.meta42266 = meta42266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42267,meta42266__$1){
var self__ = this;
var _42267__$1 = this;
return (new cljs.core.async.t_cljs$core$async42265(self__.flag,meta42266__$1));
}));

(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42267){
var self__ = this;
var _42267__$1 = this;
return self__.meta42266;
}));

(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42266","meta42266",148528601,null)], null);
}));

(cljs.core.async.t_cljs$core$async42265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42265");

(cljs.core.async.t_cljs$core$async42265.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42265.
 */
cljs.core.async.__GT_t_cljs$core$async42265 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42265(flag__$1,meta42266){
return (new cljs.core.async.t_cljs$core$async42265(flag__$1,meta42266));
});

}

return (new cljs.core.async.t_cljs$core$async42265(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42272 = (function (flag,cb,meta42273){
this.flag = flag;
this.cb = cb;
this.meta42273 = meta42273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42274,meta42273__$1){
var self__ = this;
var _42274__$1 = this;
return (new cljs.core.async.t_cljs$core$async42272(self__.flag,self__.cb,meta42273__$1));
}));

(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42274){
var self__ = this;
var _42274__$1 = this;
return self__.meta42273;
}));

(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42273","meta42273",-1956095524,null)], null);
}));

(cljs.core.async.t_cljs$core$async42272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42272");

(cljs.core.async.t_cljs$core$async42272.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42272.
 */
cljs.core.async.__GT_t_cljs$core$async42272 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42272(flag__$1,cb__$1,meta42273){
return (new cljs.core.async.t_cljs$core$async42272(flag__$1,cb__$1,meta42273));
});

}

return (new cljs.core.async.t_cljs$core$async42272(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42285_SHARP_){
var G__42296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42285_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42296) : fret.call(null,G__42296));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42286_SHARP_){
var G__42297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42286_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42297) : fret.call(null,G__42297));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44352 = (i + (1));
i = G__44352;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44353 = arguments.length;
var i__4737__auto___44354 = (0);
while(true){
if((i__4737__auto___44354 < len__4736__auto___44353)){
args__4742__auto__.push((arguments[i__4737__auto___44354]));

var G__44355 = (i__4737__auto___44354 + (1));
i__4737__auto___44354 = G__44355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42302){
var map__42303 = p__42302;
var map__42303__$1 = (((((!((map__42303 == null))))?(((((map__42303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42303):map__42303);
var opts = map__42303__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42299){
var G__42300 = cljs.core.first(seq42299);
var seq42299__$1 = cljs.core.next(seq42299);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42300,seq42299__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42309 = arguments.length;
switch (G__42309) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42136__auto___44357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42333){
var state_val_42334 = (state_42333[(1)]);
if((state_val_42334 === (7))){
var inst_42329 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
var statearr_42337_44358 = state_42333__$1;
(statearr_42337_44358[(2)] = inst_42329);

(statearr_42337_44358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (1))){
var state_42333__$1 = state_42333;
var statearr_42338_44359 = state_42333__$1;
(statearr_42338_44359[(2)] = null);

(statearr_42338_44359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (4))){
var inst_42312 = (state_42333[(7)]);
var inst_42312__$1 = (state_42333[(2)]);
var inst_42313 = (inst_42312__$1 == null);
var state_42333__$1 = (function (){var statearr_42339 = state_42333;
(statearr_42339[(7)] = inst_42312__$1);

return statearr_42339;
})();
if(cljs.core.truth_(inst_42313)){
var statearr_42340_44361 = state_42333__$1;
(statearr_42340_44361[(1)] = (5));

} else {
var statearr_42341_44362 = state_42333__$1;
(statearr_42341_44362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (13))){
var state_42333__$1 = state_42333;
var statearr_42342_44363 = state_42333__$1;
(statearr_42342_44363[(2)] = null);

(statearr_42342_44363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (6))){
var inst_42312 = (state_42333[(7)]);
var state_42333__$1 = state_42333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42333__$1,(11),to,inst_42312);
} else {
if((state_val_42334 === (3))){
var inst_42331 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42333__$1,inst_42331);
} else {
if((state_val_42334 === (12))){
var state_42333__$1 = state_42333;
var statearr_42344_44364 = state_42333__$1;
(statearr_42344_44364[(2)] = null);

(statearr_42344_44364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (2))){
var state_42333__$1 = state_42333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42333__$1,(4),from);
} else {
if((state_val_42334 === (11))){
var inst_42322 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
if(cljs.core.truth_(inst_42322)){
var statearr_42345_44367 = state_42333__$1;
(statearr_42345_44367[(1)] = (12));

} else {
var statearr_42346_44368 = state_42333__$1;
(statearr_42346_44368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (9))){
var state_42333__$1 = state_42333;
var statearr_42347_44369 = state_42333__$1;
(statearr_42347_44369[(2)] = null);

(statearr_42347_44369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (5))){
var state_42333__$1 = state_42333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42354_44370 = state_42333__$1;
(statearr_42354_44370[(1)] = (8));

} else {
var statearr_42359_44371 = state_42333__$1;
(statearr_42359_44371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (14))){
var inst_42327 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
var statearr_42363_44372 = state_42333__$1;
(statearr_42363_44372[(2)] = inst_42327);

(statearr_42363_44372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (10))){
var inst_42319 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
var statearr_42370_44373 = state_42333__$1;
(statearr_42370_44373[(2)] = inst_42319);

(statearr_42370_44373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (8))){
var inst_42316 = cljs.core.async.close_BANG_(to);
var state_42333__$1 = state_42333;
var statearr_42375_44375 = state_42333__$1;
(statearr_42375_44375[(2)] = inst_42316);

(statearr_42375_44375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_42376 = [null,null,null,null,null,null,null,null];
(statearr_42376[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_42376[(1)] = (1));

return statearr_42376;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_42333){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42333);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42377){var ex__42014__auto__ = e42377;
var statearr_42378_44377 = state_42333;
(statearr_42378_44377[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42333[(4)]))){
var statearr_42379_44378 = state_42333;
(statearr_42379_44378[(1)] = cljs.core.first((state_42333[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44379 = state_42333;
state_42333 = G__44379;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_42333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_42333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42380 = f__42137__auto__();
(statearr_42380[(6)] = c__42136__auto___44357);

return statearr_42380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__42384){
var vec__42385 = p__42384;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(1),null);
var job = vec__42385;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42136__auto___44382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42392){
var state_val_42393 = (state_42392[(1)]);
if((state_val_42393 === (1))){
var state_42392__$1 = state_42392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42392__$1,(2),res,v);
} else {
if((state_val_42393 === (2))){
var inst_42389 = (state_42392[(2)]);
var inst_42390 = cljs.core.async.close_BANG_(res);
var state_42392__$1 = (function (){var statearr_42394 = state_42392;
(statearr_42394[(7)] = inst_42389);

return statearr_42394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42392__$1,inst_42390);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_42404 = [null,null,null,null,null,null,null,null];
(statearr_42404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__);

(statearr_42404[(1)] = (1));

return statearr_42404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1 = (function (state_42392){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42392);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42408){var ex__42014__auto__ = e42408;
var statearr_42413_44385 = state_42392;
(statearr_42413_44385[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42392[(4)]))){
var statearr_42419_44386 = state_42392;
(statearr_42419_44386[(1)] = cljs.core.first((state_42392[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44387 = state_42392;
state_42392 = G__44387;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = function(state_42392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1.call(this,state_42392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42420 = f__42137__auto__();
(statearr_42420[(6)] = c__42136__auto___44382);

return statearr_42420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42426){
var vec__42431 = p__42426;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42431,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42431,(1),null);
var job = vec__42431;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___44388 = n;
var __44389 = (0);
while(true){
if((__44389 < n__4613__auto___44388)){
var G__42446_44390 = type;
var G__42446_44391__$1 = (((G__42446_44390 instanceof cljs.core.Keyword))?G__42446_44390.fqn:null);
switch (G__42446_44391__$1) {
case "compute":
var c__42136__auto___44393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44389,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = ((function (__44389,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function (state_42459){
var state_val_42460 = (state_42459[(1)]);
if((state_val_42460 === (1))){
var state_42459__$1 = state_42459;
var statearr_42472_44395 = state_42459__$1;
(statearr_42472_44395[(2)] = null);

(statearr_42472_44395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42460 === (2))){
var state_42459__$1 = state_42459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42459__$1,(4),jobs);
} else {
if((state_val_42460 === (3))){
var inst_42457 = (state_42459[(2)]);
var state_42459__$1 = state_42459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42459__$1,inst_42457);
} else {
if((state_val_42460 === (4))){
var inst_42449 = (state_42459[(2)]);
var inst_42450 = process(inst_42449);
var state_42459__$1 = state_42459;
if(cljs.core.truth_(inst_42450)){
var statearr_42483_44397 = state_42459__$1;
(statearr_42483_44397[(1)] = (5));

} else {
var statearr_42484_44398 = state_42459__$1;
(statearr_42484_44398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42460 === (5))){
var state_42459__$1 = state_42459;
var statearr_42485_44399 = state_42459__$1;
(statearr_42485_44399[(2)] = null);

(statearr_42485_44399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42460 === (6))){
var state_42459__$1 = state_42459;
var statearr_42486_44400 = state_42459__$1;
(statearr_42486_44400[(2)] = null);

(statearr_42486_44400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42460 === (7))){
var inst_42455 = (state_42459[(2)]);
var state_42459__$1 = state_42459;
var statearr_42487_44401 = state_42459__$1;
(statearr_42487_44401[(2)] = inst_42455);

(statearr_42487_44401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44389,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
;
return ((function (__44389,switch__42010__auto__,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_42488 = [null,null,null,null,null,null,null];
(statearr_42488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__);

(statearr_42488[(1)] = (1));

return statearr_42488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1 = (function (state_42459){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42459);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42489){var ex__42014__auto__ = e42489;
var statearr_42490_44402 = state_42459;
(statearr_42490_44402[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42459[(4)]))){
var statearr_42491_44403 = state_42459;
(statearr_42491_44403[(1)] = cljs.core.first((state_42459[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44406 = state_42459;
state_42459 = G__44406;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = function(state_42459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1.call(this,state_42459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__;
})()
;})(__44389,switch__42010__auto__,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
})();
var state__42138__auto__ = (function (){var statearr_42493 = f__42137__auto__();
(statearr_42493[(6)] = c__42136__auto___44393);

return statearr_42493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
});})(__44389,c__42136__auto___44393,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
);


break;
case "async":
var c__42136__auto___44407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44389,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = ((function (__44389,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function (state_42506){
var state_val_42507 = (state_42506[(1)]);
if((state_val_42507 === (1))){
var state_42506__$1 = state_42506;
var statearr_42511_44408 = state_42506__$1;
(statearr_42511_44408[(2)] = null);

(statearr_42511_44408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42507 === (2))){
var state_42506__$1 = state_42506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42506__$1,(4),jobs);
} else {
if((state_val_42507 === (3))){
var inst_42504 = (state_42506[(2)]);
var state_42506__$1 = state_42506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42506__$1,inst_42504);
} else {
if((state_val_42507 === (4))){
var inst_42496 = (state_42506[(2)]);
var inst_42497 = async(inst_42496);
var state_42506__$1 = state_42506;
if(cljs.core.truth_(inst_42497)){
var statearr_42521_44409 = state_42506__$1;
(statearr_42521_44409[(1)] = (5));

} else {
var statearr_42523_44410 = state_42506__$1;
(statearr_42523_44410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42507 === (5))){
var state_42506__$1 = state_42506;
var statearr_42525_44411 = state_42506__$1;
(statearr_42525_44411[(2)] = null);

(statearr_42525_44411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42507 === (6))){
var state_42506__$1 = state_42506;
var statearr_42531_44412 = state_42506__$1;
(statearr_42531_44412[(2)] = null);

(statearr_42531_44412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42507 === (7))){
var inst_42502 = (state_42506[(2)]);
var state_42506__$1 = state_42506;
var statearr_42532_44414 = state_42506__$1;
(statearr_42532_44414[(2)] = inst_42502);

(statearr_42532_44414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44389,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
;
return ((function (__44389,switch__42010__auto__,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_42535 = [null,null,null,null,null,null,null];
(statearr_42535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__);

(statearr_42535[(1)] = (1));

return statearr_42535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1 = (function (state_42506){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42506);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42538){var ex__42014__auto__ = e42538;
var statearr_42539_44415 = state_42506;
(statearr_42539_44415[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42506[(4)]))){
var statearr_42540_44416 = state_42506;
(statearr_42540_44416[(1)] = cljs.core.first((state_42506[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44417 = state_42506;
state_42506 = G__44417;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = function(state_42506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1.call(this,state_42506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__;
})()
;})(__44389,switch__42010__auto__,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
})();
var state__42138__auto__ = (function (){var statearr_42541 = f__42137__auto__();
(statearr_42541[(6)] = c__42136__auto___44407);

return statearr_42541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
});})(__44389,c__42136__auto___44407,G__42446_44390,G__42446_44391__$1,n__4613__auto___44388,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42446_44391__$1)].join('')));

}

var G__44418 = (__44389 + (1));
__44389 = G__44418;
continue;
} else {
}
break;
}

var c__42136__auto___44419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42568){
var state_val_42570 = (state_42568[(1)]);
if((state_val_42570 === (7))){
var inst_42563 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42579_44424 = state_42568__$1;
(statearr_42579_44424[(2)] = inst_42563);

(statearr_42579_44424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (1))){
var state_42568__$1 = state_42568;
var statearr_42580_44425 = state_42568__$1;
(statearr_42580_44425[(2)] = null);

(statearr_42580_44425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (4))){
var inst_42547 = (state_42568[(7)]);
var inst_42547__$1 = (state_42568[(2)]);
var inst_42548 = (inst_42547__$1 == null);
var state_42568__$1 = (function (){var statearr_42581 = state_42568;
(statearr_42581[(7)] = inst_42547__$1);

return statearr_42581;
})();
if(cljs.core.truth_(inst_42548)){
var statearr_42582_44426 = state_42568__$1;
(statearr_42582_44426[(1)] = (5));

} else {
var statearr_42583_44427 = state_42568__$1;
(statearr_42583_44427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (6))){
var inst_42547 = (state_42568[(7)]);
var inst_42552 = (state_42568[(8)]);
var inst_42552__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42554 = [inst_42547,inst_42552__$1];
var inst_42555 = (new cljs.core.PersistentVector(null,2,(5),inst_42553,inst_42554,null));
var state_42568__$1 = (function (){var statearr_42584 = state_42568;
(statearr_42584[(8)] = inst_42552__$1);

return statearr_42584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42568__$1,(8),jobs,inst_42555);
} else {
if((state_val_42570 === (3))){
var inst_42565 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42568__$1,inst_42565);
} else {
if((state_val_42570 === (2))){
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42568__$1,(4),from);
} else {
if((state_val_42570 === (9))){
var inst_42559 = (state_42568[(2)]);
var state_42568__$1 = (function (){var statearr_42585 = state_42568;
(statearr_42585[(9)] = inst_42559);

return statearr_42585;
})();
var statearr_42586_44428 = state_42568__$1;
(statearr_42586_44428[(2)] = null);

(statearr_42586_44428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (5))){
var inst_42550 = cljs.core.async.close_BANG_(jobs);
var state_42568__$1 = state_42568;
var statearr_42587_44429 = state_42568__$1;
(statearr_42587_44429[(2)] = inst_42550);

(statearr_42587_44429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (8))){
var inst_42552 = (state_42568[(8)]);
var inst_42557 = (state_42568[(2)]);
var state_42568__$1 = (function (){var statearr_42588 = state_42568;
(statearr_42588[(10)] = inst_42557);

return statearr_42588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42568__$1,(9),results,inst_42552);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_42591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__);

(statearr_42591[(1)] = (1));

return statearr_42591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1 = (function (state_42568){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42568);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42595){var ex__42014__auto__ = e42595;
var statearr_42596_44431 = state_42568;
(statearr_42596_44431[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42568[(4)]))){
var statearr_42597_44433 = state_42568;
(statearr_42597_44433[(1)] = cljs.core.first((state_42568[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44434 = state_42568;
state_42568 = G__44434;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = function(state_42568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1.call(this,state_42568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42599 = f__42137__auto__();
(statearr_42599[(6)] = c__42136__auto___44419);

return statearr_42599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


var c__42136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42641){
var state_val_42643 = (state_42641[(1)]);
if((state_val_42643 === (7))){
var inst_42636 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42644_44435 = state_42641__$1;
(statearr_42644_44435[(2)] = inst_42636);

(statearr_42644_44435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (20))){
var state_42641__$1 = state_42641;
var statearr_42645_44436 = state_42641__$1;
(statearr_42645_44436[(2)] = null);

(statearr_42645_44436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (1))){
var state_42641__$1 = state_42641;
var statearr_42648_44437 = state_42641__$1;
(statearr_42648_44437[(2)] = null);

(statearr_42648_44437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (4))){
var inst_42604 = (state_42641[(7)]);
var inst_42604__$1 = (state_42641[(2)]);
var inst_42605 = (inst_42604__$1 == null);
var state_42641__$1 = (function (){var statearr_42650 = state_42641;
(statearr_42650[(7)] = inst_42604__$1);

return statearr_42650;
})();
if(cljs.core.truth_(inst_42605)){
var statearr_42651_44438 = state_42641__$1;
(statearr_42651_44438[(1)] = (5));

} else {
var statearr_42652_44439 = state_42641__$1;
(statearr_42652_44439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (15))){
var inst_42617 = (state_42641[(8)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42641__$1,(18),to,inst_42617);
} else {
if((state_val_42643 === (21))){
var inst_42630 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42653_44440 = state_42641__$1;
(statearr_42653_44440[(2)] = inst_42630);

(statearr_42653_44440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (13))){
var inst_42632 = (state_42641[(2)]);
var state_42641__$1 = (function (){var statearr_42654 = state_42641;
(statearr_42654[(9)] = inst_42632);

return statearr_42654;
})();
var statearr_42655_44445 = state_42641__$1;
(statearr_42655_44445[(2)] = null);

(statearr_42655_44445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (6))){
var inst_42604 = (state_42641[(7)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42641__$1,(11),inst_42604);
} else {
if((state_val_42643 === (17))){
var inst_42625 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
if(cljs.core.truth_(inst_42625)){
var statearr_42658_44449 = state_42641__$1;
(statearr_42658_44449[(1)] = (19));

} else {
var statearr_42662_44450 = state_42641__$1;
(statearr_42662_44450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (3))){
var inst_42638 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42641__$1,inst_42638);
} else {
if((state_val_42643 === (12))){
var inst_42614 = (state_42641[(10)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42641__$1,(14),inst_42614);
} else {
if((state_val_42643 === (2))){
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42641__$1,(4),results);
} else {
if((state_val_42643 === (19))){
var state_42641__$1 = state_42641;
var statearr_42664_44451 = state_42641__$1;
(statearr_42664_44451[(2)] = null);

(statearr_42664_44451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (11))){
var inst_42614 = (state_42641[(2)]);
var state_42641__$1 = (function (){var statearr_42665 = state_42641;
(statearr_42665[(10)] = inst_42614);

return statearr_42665;
})();
var statearr_42666_44455 = state_42641__$1;
(statearr_42666_44455[(2)] = null);

(statearr_42666_44455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (9))){
var state_42641__$1 = state_42641;
var statearr_42667_44459 = state_42641__$1;
(statearr_42667_44459[(2)] = null);

(statearr_42667_44459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (5))){
var state_42641__$1 = state_42641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42668_44460 = state_42641__$1;
(statearr_42668_44460[(1)] = (8));

} else {
var statearr_42669_44461 = state_42641__$1;
(statearr_42669_44461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (14))){
var inst_42617 = (state_42641[(8)]);
var inst_42617__$1 = (state_42641[(2)]);
var inst_42618 = (inst_42617__$1 == null);
var inst_42619 = cljs.core.not(inst_42618);
var state_42641__$1 = (function (){var statearr_42672 = state_42641;
(statearr_42672[(8)] = inst_42617__$1);

return statearr_42672;
})();
if(inst_42619){
var statearr_42674_44465 = state_42641__$1;
(statearr_42674_44465[(1)] = (15));

} else {
var statearr_42675_44466 = state_42641__$1;
(statearr_42675_44466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (16))){
var state_42641__$1 = state_42641;
var statearr_42676_44467 = state_42641__$1;
(statearr_42676_44467[(2)] = false);

(statearr_42676_44467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (10))){
var inst_42611 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42682_44468 = state_42641__$1;
(statearr_42682_44468[(2)] = inst_42611);

(statearr_42682_44468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (18))){
var inst_42622 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42683_44473 = state_42641__$1;
(statearr_42683_44473[(2)] = inst_42622);

(statearr_42683_44473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (8))){
var inst_42608 = cljs.core.async.close_BANG_(to);
var state_42641__$1 = state_42641;
var statearr_42684_44477 = state_42641__$1;
(statearr_42684_44477[(2)] = inst_42608);

(statearr_42684_44477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_42685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__);

(statearr_42685[(1)] = (1));

return statearr_42685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1 = (function (state_42641){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42641);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42686){var ex__42014__auto__ = e42686;
var statearr_42687_44478 = state_42641;
(statearr_42687_44478[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42641[(4)]))){
var statearr_42688_44479 = state_42641;
(statearr_42688_44479[(1)] = cljs.core.first((state_42641[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44483 = state_42641;
state_42641 = G__44483;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__ = function(state_42641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1.call(this,state_42641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42692 = f__42137__auto__();
(statearr_42692[(6)] = c__42136__auto__);

return statearr_42692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

return c__42136__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42694 = arguments.length;
switch (G__42694) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42701 = arguments.length;
switch (G__42701) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42707 = arguments.length;
switch (G__42707) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42136__auto___44494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42743){
var state_val_42744 = (state_42743[(1)]);
if((state_val_42744 === (7))){
var inst_42739 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42747_44495 = state_42743__$1;
(statearr_42747_44495[(2)] = inst_42739);

(statearr_42747_44495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (1))){
var state_42743__$1 = state_42743;
var statearr_42748_44496 = state_42743__$1;
(statearr_42748_44496[(2)] = null);

(statearr_42748_44496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (4))){
var inst_42718 = (state_42743[(7)]);
var inst_42718__$1 = (state_42743[(2)]);
var inst_42719 = (inst_42718__$1 == null);
var state_42743__$1 = (function (){var statearr_42749 = state_42743;
(statearr_42749[(7)] = inst_42718__$1);

return statearr_42749;
})();
if(cljs.core.truth_(inst_42719)){
var statearr_42751_44497 = state_42743__$1;
(statearr_42751_44497[(1)] = (5));

} else {
var statearr_42753_44498 = state_42743__$1;
(statearr_42753_44498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (13))){
var state_42743__$1 = state_42743;
var statearr_42754_44499 = state_42743__$1;
(statearr_42754_44499[(2)] = null);

(statearr_42754_44499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (6))){
var inst_42718 = (state_42743[(7)]);
var inst_42725 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42718) : p.call(null,inst_42718));
var state_42743__$1 = state_42743;
if(cljs.core.truth_(inst_42725)){
var statearr_42755_44500 = state_42743__$1;
(statearr_42755_44500[(1)] = (9));

} else {
var statearr_42756_44501 = state_42743__$1;
(statearr_42756_44501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (3))){
var inst_42741 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42743__$1,inst_42741);
} else {
if((state_val_42744 === (12))){
var state_42743__$1 = state_42743;
var statearr_42757_44502 = state_42743__$1;
(statearr_42757_44502[(2)] = null);

(statearr_42757_44502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (2))){
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42743__$1,(4),ch);
} else {
if((state_val_42744 === (11))){
var inst_42718 = (state_42743[(7)]);
var inst_42730 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42743__$1,(8),inst_42730,inst_42718);
} else {
if((state_val_42744 === (9))){
var state_42743__$1 = state_42743;
var statearr_42758_44503 = state_42743__$1;
(statearr_42758_44503[(2)] = tc);

(statearr_42758_44503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (5))){
var inst_42721 = cljs.core.async.close_BANG_(tc);
var inst_42722 = cljs.core.async.close_BANG_(fc);
var state_42743__$1 = (function (){var statearr_42759 = state_42743;
(statearr_42759[(8)] = inst_42721);

return statearr_42759;
})();
var statearr_42760_44504 = state_42743__$1;
(statearr_42760_44504[(2)] = inst_42722);

(statearr_42760_44504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (14))){
var inst_42737 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42762_44505 = state_42743__$1;
(statearr_42762_44505[(2)] = inst_42737);

(statearr_42762_44505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (10))){
var state_42743__$1 = state_42743;
var statearr_42763_44506 = state_42743__$1;
(statearr_42763_44506[(2)] = fc);

(statearr_42763_44506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (8))){
var inst_42732 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
if(cljs.core.truth_(inst_42732)){
var statearr_42764_44507 = state_42743__$1;
(statearr_42764_44507[(1)] = (12));

} else {
var statearr_42765_44508 = state_42743__$1;
(statearr_42765_44508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_42766 = [null,null,null,null,null,null,null,null,null];
(statearr_42766[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_42766[(1)] = (1));

return statearr_42766;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_42743){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42743);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42767){var ex__42014__auto__ = e42767;
var statearr_42768_44509 = state_42743;
(statearr_42768_44509[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42743[(4)]))){
var statearr_42771_44510 = state_42743;
(statearr_42771_44510[(1)] = cljs.core.first((state_42743[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44512 = state_42743;
state_42743 = G__44512;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_42743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_42743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42773 = f__42137__auto__();
(statearr_42773[(6)] = c__42136__auto___44494);

return statearr_42773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42820){
var state_val_42821 = (state_42820[(1)]);
if((state_val_42821 === (7))){
var inst_42816 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
var statearr_42823_44518 = state_42820__$1;
(statearr_42823_44518[(2)] = inst_42816);

(statearr_42823_44518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (1))){
var inst_42786 = init;
var inst_42787 = inst_42786;
var state_42820__$1 = (function (){var statearr_42825 = state_42820;
(statearr_42825[(7)] = inst_42787);

return statearr_42825;
})();
var statearr_42829_44520 = state_42820__$1;
(statearr_42829_44520[(2)] = null);

(statearr_42829_44520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (4))){
var inst_42795 = (state_42820[(8)]);
var inst_42795__$1 = (state_42820[(2)]);
var inst_42796 = (inst_42795__$1 == null);
var state_42820__$1 = (function (){var statearr_42830 = state_42820;
(statearr_42830[(8)] = inst_42795__$1);

return statearr_42830;
})();
if(cljs.core.truth_(inst_42796)){
var statearr_42831_44521 = state_42820__$1;
(statearr_42831_44521[(1)] = (5));

} else {
var statearr_42832_44523 = state_42820__$1;
(statearr_42832_44523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (6))){
var inst_42787 = (state_42820[(7)]);
var inst_42799 = (state_42820[(9)]);
var inst_42795 = (state_42820[(8)]);
var inst_42799__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42787,inst_42795) : f.call(null,inst_42787,inst_42795));
var inst_42800 = cljs.core.reduced_QMARK_(inst_42799__$1);
var state_42820__$1 = (function (){var statearr_42833 = state_42820;
(statearr_42833[(9)] = inst_42799__$1);

return statearr_42833;
})();
if(inst_42800){
var statearr_42834_44525 = state_42820__$1;
(statearr_42834_44525[(1)] = (8));

} else {
var statearr_42835_44526 = state_42820__$1;
(statearr_42835_44526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (3))){
var inst_42818 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42820__$1,inst_42818);
} else {
if((state_val_42821 === (2))){
var state_42820__$1 = state_42820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42820__$1,(4),ch);
} else {
if((state_val_42821 === (9))){
var inst_42799 = (state_42820[(9)]);
var inst_42787 = inst_42799;
var state_42820__$1 = (function (){var statearr_42836 = state_42820;
(statearr_42836[(7)] = inst_42787);

return statearr_42836;
})();
var statearr_42837_44527 = state_42820__$1;
(statearr_42837_44527[(2)] = null);

(statearr_42837_44527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (5))){
var inst_42787 = (state_42820[(7)]);
var state_42820__$1 = state_42820;
var statearr_42838_44528 = state_42820__$1;
(statearr_42838_44528[(2)] = inst_42787);

(statearr_42838_44528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (10))){
var inst_42810 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
var statearr_42839_44529 = state_42820__$1;
(statearr_42839_44529[(2)] = inst_42810);

(statearr_42839_44529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (8))){
var inst_42799 = (state_42820[(9)]);
var inst_42806 = cljs.core.deref(inst_42799);
var state_42820__$1 = state_42820;
var statearr_42840_44530 = state_42820__$1;
(statearr_42840_44530[(2)] = inst_42806);

(statearr_42840_44530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42011__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42011__auto____0 = (function (){
var statearr_42841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42841[(0)] = cljs$core$async$reduce_$_state_machine__42011__auto__);

(statearr_42841[(1)] = (1));

return statearr_42841;
});
var cljs$core$async$reduce_$_state_machine__42011__auto____1 = (function (state_42820){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42820);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42845){var ex__42014__auto__ = e42845;
var statearr_42846_44535 = state_42820;
(statearr_42846_44535[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42820[(4)]))){
var statearr_42847_44536 = state_42820;
(statearr_42847_44536[(1)] = cljs.core.first((state_42820[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44539 = state_42820;
state_42820 = G__44539;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42011__auto__ = function(state_42820){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42011__auto____1.call(this,state_42820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42011__auto____0;
cljs$core$async$reduce_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42011__auto____1;
return cljs$core$async$reduce_$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42848 = f__42137__auto__();
(statearr_42848[(6)] = c__42136__auto__);

return statearr_42848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

return c__42136__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42854){
var state_val_42855 = (state_42854[(1)]);
if((state_val_42855 === (1))){
var inst_42849 = cljs.core.async.reduce(f__$1,init,ch);
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42854__$1,(2),inst_42849);
} else {
if((state_val_42855 === (2))){
var inst_42851 = (state_42854[(2)]);
var inst_42852 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42851) : f__$1.call(null,inst_42851));
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42854__$1,inst_42852);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42011__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42011__auto____0 = (function (){
var statearr_42857 = [null,null,null,null,null,null,null];
(statearr_42857[(0)] = cljs$core$async$transduce_$_state_machine__42011__auto__);

(statearr_42857[(1)] = (1));

return statearr_42857;
});
var cljs$core$async$transduce_$_state_machine__42011__auto____1 = (function (state_42854){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42854);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42858){var ex__42014__auto__ = e42858;
var statearr_42859_44555 = state_42854;
(statearr_42859_44555[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42854[(4)]))){
var statearr_42860_44556 = state_42854;
(statearr_42860_44556[(1)] = cljs.core.first((state_42854[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44557 = state_42854;
state_42854 = G__44557;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42011__auto__ = function(state_42854){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42011__auto____1.call(this,state_42854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42011__auto____0;
cljs$core$async$transduce_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42011__auto____1;
return cljs$core$async$transduce_$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42861 = f__42137__auto__();
(statearr_42861[(6)] = c__42136__auto__);

return statearr_42861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

return c__42136__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__42867 = arguments.length;
switch (G__42867) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_42912){
var state_val_42913 = (state_42912[(1)]);
if((state_val_42913 === (7))){
var inst_42891 = (state_42912[(2)]);
var state_42912__$1 = state_42912;
var statearr_42914_44559 = state_42912__$1;
(statearr_42914_44559[(2)] = inst_42891);

(statearr_42914_44559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (1))){
var inst_42884 = cljs.core.seq(coll);
var inst_42885 = inst_42884;
var state_42912__$1 = (function (){var statearr_42917 = state_42912;
(statearr_42917[(7)] = inst_42885);

return statearr_42917;
})();
var statearr_42919_44560 = state_42912__$1;
(statearr_42919_44560[(2)] = null);

(statearr_42919_44560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (4))){
var inst_42885 = (state_42912[(7)]);
var inst_42889 = cljs.core.first(inst_42885);
var state_42912__$1 = state_42912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42912__$1,(7),ch,inst_42889);
} else {
if((state_val_42913 === (13))){
var inst_42905 = (state_42912[(2)]);
var state_42912__$1 = state_42912;
var statearr_42920_44561 = state_42912__$1;
(statearr_42920_44561[(2)] = inst_42905);

(statearr_42920_44561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (6))){
var inst_42894 = (state_42912[(2)]);
var state_42912__$1 = state_42912;
if(cljs.core.truth_(inst_42894)){
var statearr_42921_44562 = state_42912__$1;
(statearr_42921_44562[(1)] = (8));

} else {
var statearr_42923_44563 = state_42912__$1;
(statearr_42923_44563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (3))){
var inst_42909 = (state_42912[(2)]);
var state_42912__$1 = state_42912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42912__$1,inst_42909);
} else {
if((state_val_42913 === (12))){
var state_42912__$1 = state_42912;
var statearr_42926_44570 = state_42912__$1;
(statearr_42926_44570[(2)] = null);

(statearr_42926_44570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (2))){
var inst_42885 = (state_42912[(7)]);
var state_42912__$1 = state_42912;
if(cljs.core.truth_(inst_42885)){
var statearr_42927_44571 = state_42912__$1;
(statearr_42927_44571[(1)] = (4));

} else {
var statearr_42928_44572 = state_42912__$1;
(statearr_42928_44572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (11))){
var inst_42902 = cljs.core.async.close_BANG_(ch);
var state_42912__$1 = state_42912;
var statearr_42929_44573 = state_42912__$1;
(statearr_42929_44573[(2)] = inst_42902);

(statearr_42929_44573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (9))){
var state_42912__$1 = state_42912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42933_44574 = state_42912__$1;
(statearr_42933_44574[(1)] = (11));

} else {
var statearr_42934_44575 = state_42912__$1;
(statearr_42934_44575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (5))){
var inst_42885 = (state_42912[(7)]);
var state_42912__$1 = state_42912;
var statearr_42935_44576 = state_42912__$1;
(statearr_42935_44576[(2)] = inst_42885);

(statearr_42935_44576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (10))){
var inst_42907 = (state_42912[(2)]);
var state_42912__$1 = state_42912;
var statearr_42936_44577 = state_42912__$1;
(statearr_42936_44577[(2)] = inst_42907);

(statearr_42936_44577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42913 === (8))){
var inst_42885 = (state_42912[(7)]);
var inst_42896 = cljs.core.next(inst_42885);
var inst_42885__$1 = inst_42896;
var state_42912__$1 = (function (){var statearr_42937 = state_42912;
(statearr_42937[(7)] = inst_42885__$1);

return statearr_42937;
})();
var statearr_42938_44578 = state_42912__$1;
(statearr_42938_44578[(2)] = null);

(statearr_42938_44578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_42940 = [null,null,null,null,null,null,null,null];
(statearr_42940[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_42940[(1)] = (1));

return statearr_42940;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_42912){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_42912);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e42941){var ex__42014__auto__ = e42941;
var statearr_42942_44579 = state_42912;
(statearr_42942_44579[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_42912[(4)]))){
var statearr_42943_44586 = state_42912;
(statearr_42943_44586[(1)] = cljs.core.first((state_42912[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44587 = state_42912;
state_42912 = G__44587;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_42912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_42912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_42947 = f__42137__auto__();
(statearr_42947[(6)] = c__42136__auto__);

return statearr_42947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

return c__42136__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42952 = arguments.length;
switch (G__42952) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44589 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44589(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44590 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44590(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44597 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44597(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44598 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44598(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42976 = (function (ch,cs,meta42977){
this.ch = ch;
this.cs = cs;
this.meta42977 = meta42977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42978,meta42977__$1){
var self__ = this;
var _42978__$1 = this;
return (new cljs.core.async.t_cljs$core$async42976(self__.ch,self__.cs,meta42977__$1));
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42978){
var self__ = this;
var _42978__$1 = this;
return self__.meta42977;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42977","meta42977",-687508916,null)], null);
}));

(cljs.core.async.t_cljs$core$async42976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42976");

(cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42976.
 */
cljs.core.async.__GT_t_cljs$core$async42976 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42976(ch__$1,cs__$1,meta42977){
return (new cljs.core.async.t_cljs$core$async42976(ch__$1,cs__$1,meta42977));
});

}

return (new cljs.core.async.t_cljs$core$async42976(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42136__auto___44599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43128){
var state_val_43129 = (state_43128[(1)]);
if((state_val_43129 === (7))){
var inst_43124 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43130_44600 = state_43128__$1;
(statearr_43130_44600[(2)] = inst_43124);

(statearr_43130_44600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (20))){
var inst_43026 = (state_43128[(7)]);
var inst_43038 = cljs.core.first(inst_43026);
var inst_43039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43038,(0),null);
var inst_43040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43038,(1),null);
var state_43128__$1 = (function (){var statearr_43131 = state_43128;
(statearr_43131[(8)] = inst_43039);

return statearr_43131;
})();
if(cljs.core.truth_(inst_43040)){
var statearr_43132_44601 = state_43128__$1;
(statearr_43132_44601[(1)] = (22));

} else {
var statearr_43133_44602 = state_43128__$1;
(statearr_43133_44602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (27))){
var inst_43070 = (state_43128[(9)]);
var inst_43075 = (state_43128[(10)]);
var inst_42990 = (state_43128[(11)]);
var inst_43068 = (state_43128[(12)]);
var inst_43075__$1 = cljs.core._nth(inst_43068,inst_43070);
var inst_43076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43075__$1,inst_42990,done);
var state_43128__$1 = (function (){var statearr_43134 = state_43128;
(statearr_43134[(10)] = inst_43075__$1);

return statearr_43134;
})();
if(cljs.core.truth_(inst_43076)){
var statearr_43135_44603 = state_43128__$1;
(statearr_43135_44603[(1)] = (30));

} else {
var statearr_43136_44605 = state_43128__$1;
(statearr_43136_44605[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (1))){
var state_43128__$1 = state_43128;
var statearr_43137_44606 = state_43128__$1;
(statearr_43137_44606[(2)] = null);

(statearr_43137_44606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (24))){
var inst_43026 = (state_43128[(7)]);
var inst_43045 = (state_43128[(2)]);
var inst_43046 = cljs.core.next(inst_43026);
var inst_43004 = inst_43046;
var inst_43005 = null;
var inst_43006 = (0);
var inst_43007 = (0);
var state_43128__$1 = (function (){var statearr_43138 = state_43128;
(statearr_43138[(13)] = inst_43007);

(statearr_43138[(14)] = inst_43004);

(statearr_43138[(15)] = inst_43006);

(statearr_43138[(16)] = inst_43005);

(statearr_43138[(17)] = inst_43045);

return statearr_43138;
})();
var statearr_43139_44611 = state_43128__$1;
(statearr_43139_44611[(2)] = null);

(statearr_43139_44611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (39))){
var state_43128__$1 = state_43128;
var statearr_43146_44612 = state_43128__$1;
(statearr_43146_44612[(2)] = null);

(statearr_43146_44612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (4))){
var inst_42990 = (state_43128[(11)]);
var inst_42990__$1 = (state_43128[(2)]);
var inst_42995 = (inst_42990__$1 == null);
var state_43128__$1 = (function (){var statearr_43147 = state_43128;
(statearr_43147[(11)] = inst_42990__$1);

return statearr_43147;
})();
if(cljs.core.truth_(inst_42995)){
var statearr_43148_44613 = state_43128__$1;
(statearr_43148_44613[(1)] = (5));

} else {
var statearr_43149_44614 = state_43128__$1;
(statearr_43149_44614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (15))){
var inst_43007 = (state_43128[(13)]);
var inst_43004 = (state_43128[(14)]);
var inst_43006 = (state_43128[(15)]);
var inst_43005 = (state_43128[(16)]);
var inst_43022 = (state_43128[(2)]);
var inst_43023 = (inst_43007 + (1));
var tmp43140 = inst_43004;
var tmp43141 = inst_43006;
var tmp43142 = inst_43005;
var inst_43004__$1 = tmp43140;
var inst_43005__$1 = tmp43142;
var inst_43006__$1 = tmp43141;
var inst_43007__$1 = inst_43023;
var state_43128__$1 = (function (){var statearr_43154 = state_43128;
(statearr_43154[(13)] = inst_43007__$1);

(statearr_43154[(18)] = inst_43022);

(statearr_43154[(14)] = inst_43004__$1);

(statearr_43154[(15)] = inst_43006__$1);

(statearr_43154[(16)] = inst_43005__$1);

return statearr_43154;
})();
var statearr_43156_44615 = state_43128__$1;
(statearr_43156_44615[(2)] = null);

(statearr_43156_44615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (21))){
var inst_43049 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43160_44616 = state_43128__$1;
(statearr_43160_44616[(2)] = inst_43049);

(statearr_43160_44616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (31))){
var inst_43075 = (state_43128[(10)]);
var inst_43079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43075);
var state_43128__$1 = state_43128;
var statearr_43161_44617 = state_43128__$1;
(statearr_43161_44617[(2)] = inst_43079);

(statearr_43161_44617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (32))){
var inst_43070 = (state_43128[(9)]);
var inst_43069 = (state_43128[(19)]);
var inst_43068 = (state_43128[(12)]);
var inst_43067 = (state_43128[(20)]);
var inst_43081 = (state_43128[(2)]);
var inst_43082 = (inst_43070 + (1));
var tmp43157 = inst_43069;
var tmp43158 = inst_43068;
var tmp43159 = inst_43067;
var inst_43067__$1 = tmp43159;
var inst_43068__$1 = tmp43158;
var inst_43069__$1 = tmp43157;
var inst_43070__$1 = inst_43082;
var state_43128__$1 = (function (){var statearr_43162 = state_43128;
(statearr_43162[(9)] = inst_43070__$1);

(statearr_43162[(19)] = inst_43069__$1);

(statearr_43162[(21)] = inst_43081);

(statearr_43162[(12)] = inst_43068__$1);

(statearr_43162[(20)] = inst_43067__$1);

return statearr_43162;
})();
var statearr_43163_44618 = state_43128__$1;
(statearr_43163_44618[(2)] = null);

(statearr_43163_44618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (40))){
var inst_43095 = (state_43128[(22)]);
var inst_43100 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43095);
var state_43128__$1 = state_43128;
var statearr_43166_44621 = state_43128__$1;
(statearr_43166_44621[(2)] = inst_43100);

(statearr_43166_44621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (33))){
var inst_43085 = (state_43128[(23)]);
var inst_43087 = cljs.core.chunked_seq_QMARK_(inst_43085);
var state_43128__$1 = state_43128;
if(inst_43087){
var statearr_43168_44622 = state_43128__$1;
(statearr_43168_44622[(1)] = (36));

} else {
var statearr_43169_44623 = state_43128__$1;
(statearr_43169_44623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (13))){
var inst_43016 = (state_43128[(24)]);
var inst_43019 = cljs.core.async.close_BANG_(inst_43016);
var state_43128__$1 = state_43128;
var statearr_43170_44624 = state_43128__$1;
(statearr_43170_44624[(2)] = inst_43019);

(statearr_43170_44624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (22))){
var inst_43039 = (state_43128[(8)]);
var inst_43042 = cljs.core.async.close_BANG_(inst_43039);
var state_43128__$1 = state_43128;
var statearr_43174_44625 = state_43128__$1;
(statearr_43174_44625[(2)] = inst_43042);

(statearr_43174_44625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (36))){
var inst_43085 = (state_43128[(23)]);
var inst_43089 = cljs.core.chunk_first(inst_43085);
var inst_43090 = cljs.core.chunk_rest(inst_43085);
var inst_43091 = cljs.core.count(inst_43089);
var inst_43067 = inst_43090;
var inst_43068 = inst_43089;
var inst_43069 = inst_43091;
var inst_43070 = (0);
var state_43128__$1 = (function (){var statearr_43176 = state_43128;
(statearr_43176[(9)] = inst_43070);

(statearr_43176[(19)] = inst_43069);

(statearr_43176[(12)] = inst_43068);

(statearr_43176[(20)] = inst_43067);

return statearr_43176;
})();
var statearr_43178_44628 = state_43128__$1;
(statearr_43178_44628[(2)] = null);

(statearr_43178_44628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (41))){
var inst_43085 = (state_43128[(23)]);
var inst_43102 = (state_43128[(2)]);
var inst_43104 = cljs.core.next(inst_43085);
var inst_43067 = inst_43104;
var inst_43068 = null;
var inst_43069 = (0);
var inst_43070 = (0);
var state_43128__$1 = (function (){var statearr_43182 = state_43128;
(statearr_43182[(9)] = inst_43070);

(statearr_43182[(19)] = inst_43069);

(statearr_43182[(25)] = inst_43102);

(statearr_43182[(12)] = inst_43068);

(statearr_43182[(20)] = inst_43067);

return statearr_43182;
})();
var statearr_43183_44629 = state_43128__$1;
(statearr_43183_44629[(2)] = null);

(statearr_43183_44629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (43))){
var state_43128__$1 = state_43128;
var statearr_43184_44630 = state_43128__$1;
(statearr_43184_44630[(2)] = null);

(statearr_43184_44630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (29))){
var inst_43112 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43185_44631 = state_43128__$1;
(statearr_43185_44631[(2)] = inst_43112);

(statearr_43185_44631[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (44))){
var inst_43121 = (state_43128[(2)]);
var state_43128__$1 = (function (){var statearr_43186 = state_43128;
(statearr_43186[(26)] = inst_43121);

return statearr_43186;
})();
var statearr_43188_44632 = state_43128__$1;
(statearr_43188_44632[(2)] = null);

(statearr_43188_44632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (6))){
var inst_43059 = (state_43128[(27)]);
var inst_43058 = cljs.core.deref(cs);
var inst_43059__$1 = cljs.core.keys(inst_43058);
var inst_43060 = cljs.core.count(inst_43059__$1);
var inst_43061 = cljs.core.reset_BANG_(dctr,inst_43060);
var inst_43066 = cljs.core.seq(inst_43059__$1);
var inst_43067 = inst_43066;
var inst_43068 = null;
var inst_43069 = (0);
var inst_43070 = (0);
var state_43128__$1 = (function (){var statearr_43191 = state_43128;
(statearr_43191[(9)] = inst_43070);

(statearr_43191[(28)] = inst_43061);

(statearr_43191[(19)] = inst_43069);

(statearr_43191[(27)] = inst_43059__$1);

(statearr_43191[(12)] = inst_43068);

(statearr_43191[(20)] = inst_43067);

return statearr_43191;
})();
var statearr_43192_44633 = state_43128__$1;
(statearr_43192_44633[(2)] = null);

(statearr_43192_44633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (28))){
var inst_43085 = (state_43128[(23)]);
var inst_43067 = (state_43128[(20)]);
var inst_43085__$1 = cljs.core.seq(inst_43067);
var state_43128__$1 = (function (){var statearr_43193 = state_43128;
(statearr_43193[(23)] = inst_43085__$1);

return statearr_43193;
})();
if(inst_43085__$1){
var statearr_43194_44636 = state_43128__$1;
(statearr_43194_44636[(1)] = (33));

} else {
var statearr_43195_44637 = state_43128__$1;
(statearr_43195_44637[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (25))){
var inst_43070 = (state_43128[(9)]);
var inst_43069 = (state_43128[(19)]);
var inst_43072 = (inst_43070 < inst_43069);
var inst_43073 = inst_43072;
var state_43128__$1 = state_43128;
if(cljs.core.truth_(inst_43073)){
var statearr_43201_44638 = state_43128__$1;
(statearr_43201_44638[(1)] = (27));

} else {
var statearr_43202_44639 = state_43128__$1;
(statearr_43202_44639[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (34))){
var state_43128__$1 = state_43128;
var statearr_43204_44640 = state_43128__$1;
(statearr_43204_44640[(2)] = null);

(statearr_43204_44640[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (17))){
var state_43128__$1 = state_43128;
var statearr_43205_44641 = state_43128__$1;
(statearr_43205_44641[(2)] = null);

(statearr_43205_44641[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (3))){
var inst_43126 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43128__$1,inst_43126);
} else {
if((state_val_43129 === (12))){
var inst_43054 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43206_44642 = state_43128__$1;
(statearr_43206_44642[(2)] = inst_43054);

(statearr_43206_44642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (2))){
var state_43128__$1 = state_43128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43128__$1,(4),ch);
} else {
if((state_val_43129 === (23))){
var state_43128__$1 = state_43128;
var statearr_43207_44643 = state_43128__$1;
(statearr_43207_44643[(2)] = null);

(statearr_43207_44643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (35))){
var inst_43110 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43210_44644 = state_43128__$1;
(statearr_43210_44644[(2)] = inst_43110);

(statearr_43210_44644[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (19))){
var inst_43026 = (state_43128[(7)]);
var inst_43030 = cljs.core.chunk_first(inst_43026);
var inst_43031 = cljs.core.chunk_rest(inst_43026);
var inst_43032 = cljs.core.count(inst_43030);
var inst_43004 = inst_43031;
var inst_43005 = inst_43030;
var inst_43006 = inst_43032;
var inst_43007 = (0);
var state_43128__$1 = (function (){var statearr_43214 = state_43128;
(statearr_43214[(13)] = inst_43007);

(statearr_43214[(14)] = inst_43004);

(statearr_43214[(15)] = inst_43006);

(statearr_43214[(16)] = inst_43005);

return statearr_43214;
})();
var statearr_43216_44645 = state_43128__$1;
(statearr_43216_44645[(2)] = null);

(statearr_43216_44645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (11))){
var inst_43026 = (state_43128[(7)]);
var inst_43004 = (state_43128[(14)]);
var inst_43026__$1 = cljs.core.seq(inst_43004);
var state_43128__$1 = (function (){var statearr_43217 = state_43128;
(statearr_43217[(7)] = inst_43026__$1);

return statearr_43217;
})();
if(inst_43026__$1){
var statearr_43218_44646 = state_43128__$1;
(statearr_43218_44646[(1)] = (16));

} else {
var statearr_43219_44647 = state_43128__$1;
(statearr_43219_44647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (9))){
var inst_43056 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43220_44648 = state_43128__$1;
(statearr_43220_44648[(2)] = inst_43056);

(statearr_43220_44648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (5))){
var inst_43002 = cljs.core.deref(cs);
var inst_43003 = cljs.core.seq(inst_43002);
var inst_43004 = inst_43003;
var inst_43005 = null;
var inst_43006 = (0);
var inst_43007 = (0);
var state_43128__$1 = (function (){var statearr_43222 = state_43128;
(statearr_43222[(13)] = inst_43007);

(statearr_43222[(14)] = inst_43004);

(statearr_43222[(15)] = inst_43006);

(statearr_43222[(16)] = inst_43005);

return statearr_43222;
})();
var statearr_43226_44650 = state_43128__$1;
(statearr_43226_44650[(2)] = null);

(statearr_43226_44650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (14))){
var state_43128__$1 = state_43128;
var statearr_43227_44651 = state_43128__$1;
(statearr_43227_44651[(2)] = null);

(statearr_43227_44651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (45))){
var inst_43118 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43228_44652 = state_43128__$1;
(statearr_43228_44652[(2)] = inst_43118);

(statearr_43228_44652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (26))){
var inst_43059 = (state_43128[(27)]);
var inst_43114 = (state_43128[(2)]);
var inst_43115 = cljs.core.seq(inst_43059);
var state_43128__$1 = (function (){var statearr_43230 = state_43128;
(statearr_43230[(29)] = inst_43114);

return statearr_43230;
})();
if(inst_43115){
var statearr_43231_44657 = state_43128__$1;
(statearr_43231_44657[(1)] = (42));

} else {
var statearr_43232_44658 = state_43128__$1;
(statearr_43232_44658[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (16))){
var inst_43026 = (state_43128[(7)]);
var inst_43028 = cljs.core.chunked_seq_QMARK_(inst_43026);
var state_43128__$1 = state_43128;
if(inst_43028){
var statearr_43235_44659 = state_43128__$1;
(statearr_43235_44659[(1)] = (19));

} else {
var statearr_43238_44660 = state_43128__$1;
(statearr_43238_44660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (38))){
var inst_43107 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43240_44661 = state_43128__$1;
(statearr_43240_44661[(2)] = inst_43107);

(statearr_43240_44661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (30))){
var state_43128__$1 = state_43128;
var statearr_43242_44662 = state_43128__$1;
(statearr_43242_44662[(2)] = null);

(statearr_43242_44662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (10))){
var inst_43007 = (state_43128[(13)]);
var inst_43005 = (state_43128[(16)]);
var inst_43015 = cljs.core._nth(inst_43005,inst_43007);
var inst_43016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43015,(0),null);
var inst_43017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43015,(1),null);
var state_43128__$1 = (function (){var statearr_43243 = state_43128;
(statearr_43243[(24)] = inst_43016);

return statearr_43243;
})();
if(cljs.core.truth_(inst_43017)){
var statearr_43244_44663 = state_43128__$1;
(statearr_43244_44663[(1)] = (13));

} else {
var statearr_43245_44664 = state_43128__$1;
(statearr_43245_44664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (18))){
var inst_43052 = (state_43128[(2)]);
var state_43128__$1 = state_43128;
var statearr_43248_44665 = state_43128__$1;
(statearr_43248_44665[(2)] = inst_43052);

(statearr_43248_44665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (42))){
var state_43128__$1 = state_43128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43128__$1,(45),dchan);
} else {
if((state_val_43129 === (37))){
var inst_43095 = (state_43128[(22)]);
var inst_43085 = (state_43128[(23)]);
var inst_42990 = (state_43128[(11)]);
var inst_43095__$1 = cljs.core.first(inst_43085);
var inst_43096 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43095__$1,inst_42990,done);
var state_43128__$1 = (function (){var statearr_43250 = state_43128;
(statearr_43250[(22)] = inst_43095__$1);

return statearr_43250;
})();
if(cljs.core.truth_(inst_43096)){
var statearr_43251_44666 = state_43128__$1;
(statearr_43251_44666[(1)] = (39));

} else {
var statearr_43252_44667 = state_43128__$1;
(statearr_43252_44667[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43129 === (8))){
var inst_43007 = (state_43128[(13)]);
var inst_43006 = (state_43128[(15)]);
var inst_43009 = (inst_43007 < inst_43006);
var inst_43010 = inst_43009;
var state_43128__$1 = state_43128;
if(cljs.core.truth_(inst_43010)){
var statearr_43253_44668 = state_43128__$1;
(statearr_43253_44668[(1)] = (10));

} else {
var statearr_43254_44671 = state_43128__$1;
(statearr_43254_44671[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42011__auto__ = null;
var cljs$core$async$mult_$_state_machine__42011__auto____0 = (function (){
var statearr_43259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43259[(0)] = cljs$core$async$mult_$_state_machine__42011__auto__);

(statearr_43259[(1)] = (1));

return statearr_43259;
});
var cljs$core$async$mult_$_state_machine__42011__auto____1 = (function (state_43128){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43128);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43260){var ex__42014__auto__ = e43260;
var statearr_43261_44677 = state_43128;
(statearr_43261_44677[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43128[(4)]))){
var statearr_43262_44678 = state_43128;
(statearr_43262_44678[(1)] = cljs.core.first((state_43128[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44682 = state_43128;
state_43128 = G__44682;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42011__auto__ = function(state_43128){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42011__auto____1.call(this,state_43128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42011__auto____0;
cljs$core$async$mult_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42011__auto____1;
return cljs$core$async$mult_$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43263 = f__42137__auto__();
(statearr_43263[(6)] = c__42136__auto___44599);

return statearr_43263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43268 = arguments.length;
switch (G__43268) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44690 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44690(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44695 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44695(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44696 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44696(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44698 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44698(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44700 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44700(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44701 = arguments.length;
var i__4737__auto___44702 = (0);
while(true){
if((i__4737__auto___44702 < len__4736__auto___44701)){
args__4742__auto__.push((arguments[i__4737__auto___44702]));

var G__44703 = (i__4737__auto___44702 + (1));
i__4737__auto___44702 = G__44703;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43311){
var map__43312 = p__43311;
var map__43312__$1 = (((((!((map__43312 == null))))?(((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43312):map__43312);
var opts = map__43312__$1;
var statearr_43317_44704 = state;
(statearr_43317_44704[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43318_44705 = state;
(statearr_43318_44705[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43321_44706 = state;
(statearr_43321_44706[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43297){
var G__43298 = cljs.core.first(seq43297);
var seq43297__$1 = cljs.core.next(seq43297);
var G__43299 = cljs.core.first(seq43297__$1);
var seq43297__$2 = cljs.core.next(seq43297__$1);
var G__43300 = cljs.core.first(seq43297__$2);
var seq43297__$3 = cljs.core.next(seq43297__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43298,G__43299,G__43300,seq43297__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43348 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43349){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43349 = meta43349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43350,meta43349__$1){
var self__ = this;
var _43350__$1 = this;
return (new cljs.core.async.t_cljs$core$async43348(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43349__$1));
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43350){
var self__ = this;
var _43350__$1 = this;
return self__.meta43349;
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43349","meta43349",1509783418,null)], null);
}));

(cljs.core.async.t_cljs$core$async43348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43348");

(cljs.core.async.t_cljs$core$async43348.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43348.
 */
cljs.core.async.__GT_t_cljs$core$async43348 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43348(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43349){
return (new cljs.core.async.t_cljs$core$async43348(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43349));
});

}

return (new cljs.core.async.t_cljs$core$async43348(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42136__auto___44717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43465){
var state_val_43466 = (state_43465[(1)]);
if((state_val_43466 === (7))){
var inst_43380 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43478_44718 = state_43465__$1;
(statearr_43478_44718[(2)] = inst_43380);

(statearr_43478_44718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (20))){
var inst_43392 = (state_43465[(7)]);
var state_43465__$1 = state_43465;
var statearr_43483_44723 = state_43465__$1;
(statearr_43483_44723[(2)] = inst_43392);

(statearr_43483_44723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (27))){
var state_43465__$1 = state_43465;
var statearr_43484_44724 = state_43465__$1;
(statearr_43484_44724[(2)] = null);

(statearr_43484_44724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (1))){
var inst_43367 = (state_43465[(8)]);
var inst_43367__$1 = calc_state();
var inst_43369 = (inst_43367__$1 == null);
var inst_43370 = cljs.core.not(inst_43369);
var state_43465__$1 = (function (){var statearr_43485 = state_43465;
(statearr_43485[(8)] = inst_43367__$1);

return statearr_43485;
})();
if(inst_43370){
var statearr_43486_44725 = state_43465__$1;
(statearr_43486_44725[(1)] = (2));

} else {
var statearr_43487_44726 = state_43465__$1;
(statearr_43487_44726[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (24))){
var inst_43439 = (state_43465[(9)]);
var inst_43425 = (state_43465[(10)]);
var inst_43416 = (state_43465[(11)]);
var inst_43439__$1 = (inst_43416.cljs$core$IFn$_invoke$arity$1 ? inst_43416.cljs$core$IFn$_invoke$arity$1(inst_43425) : inst_43416.call(null,inst_43425));
var state_43465__$1 = (function (){var statearr_43488 = state_43465;
(statearr_43488[(9)] = inst_43439__$1);

return statearr_43488;
})();
if(cljs.core.truth_(inst_43439__$1)){
var statearr_43489_44727 = state_43465__$1;
(statearr_43489_44727[(1)] = (29));

} else {
var statearr_43490_44728 = state_43465__$1;
(statearr_43490_44728[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (4))){
var inst_43383 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43383)){
var statearr_43491_44729 = state_43465__$1;
(statearr_43491_44729[(1)] = (8));

} else {
var statearr_43492_44730 = state_43465__$1;
(statearr_43492_44730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (15))){
var inst_43410 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43410)){
var statearr_43493_44731 = state_43465__$1;
(statearr_43493_44731[(1)] = (19));

} else {
var statearr_43494_44732 = state_43465__$1;
(statearr_43494_44732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (21))){
var inst_43415 = (state_43465[(12)]);
var inst_43415__$1 = (state_43465[(2)]);
var inst_43416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43415__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43415__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43415__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43465__$1 = (function (){var statearr_43495 = state_43465;
(statearr_43495[(11)] = inst_43416);

(statearr_43495[(12)] = inst_43415__$1);

(statearr_43495[(13)] = inst_43417);

return statearr_43495;
})();
return cljs.core.async.ioc_alts_BANG_(state_43465__$1,(22),inst_43418);
} else {
if((state_val_43466 === (31))){
var inst_43447 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43447)){
var statearr_43496_44733 = state_43465__$1;
(statearr_43496_44733[(1)] = (32));

} else {
var statearr_43497_44734 = state_43465__$1;
(statearr_43497_44734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (32))){
var inst_43424 = (state_43465[(14)]);
var state_43465__$1 = state_43465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43465__$1,(35),out,inst_43424);
} else {
if((state_val_43466 === (33))){
var inst_43415 = (state_43465[(12)]);
var inst_43392 = inst_43415;
var state_43465__$1 = (function (){var statearr_43498 = state_43465;
(statearr_43498[(7)] = inst_43392);

return statearr_43498;
})();
var statearr_43499_44735 = state_43465__$1;
(statearr_43499_44735[(2)] = null);

(statearr_43499_44735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (13))){
var inst_43392 = (state_43465[(7)]);
var inst_43399 = inst_43392.cljs$lang$protocol_mask$partition0$;
var inst_43400 = (inst_43399 & (64));
var inst_43401 = inst_43392.cljs$core$ISeq$;
var inst_43402 = (cljs.core.PROTOCOL_SENTINEL === inst_43401);
var inst_43403 = ((inst_43400) || (inst_43402));
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43403)){
var statearr_43500_44736 = state_43465__$1;
(statearr_43500_44736[(1)] = (16));

} else {
var statearr_43501_44737 = state_43465__$1;
(statearr_43501_44737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (22))){
var inst_43424 = (state_43465[(14)]);
var inst_43425 = (state_43465[(10)]);
var inst_43423 = (state_43465[(2)]);
var inst_43424__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43423,(0),null);
var inst_43425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43423,(1),null);
var inst_43426 = (inst_43424__$1 == null);
var inst_43427 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43425__$1,change);
var inst_43428 = ((inst_43426) || (inst_43427));
var state_43465__$1 = (function (){var statearr_43502 = state_43465;
(statearr_43502[(14)] = inst_43424__$1);

(statearr_43502[(10)] = inst_43425__$1);

return statearr_43502;
})();
if(cljs.core.truth_(inst_43428)){
var statearr_43503_44740 = state_43465__$1;
(statearr_43503_44740[(1)] = (23));

} else {
var statearr_43504_44742 = state_43465__$1;
(statearr_43504_44742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (36))){
var inst_43415 = (state_43465[(12)]);
var inst_43392 = inst_43415;
var state_43465__$1 = (function (){var statearr_43508 = state_43465;
(statearr_43508[(7)] = inst_43392);

return statearr_43508;
})();
var statearr_43509_44743 = state_43465__$1;
(statearr_43509_44743[(2)] = null);

(statearr_43509_44743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (29))){
var inst_43439 = (state_43465[(9)]);
var state_43465__$1 = state_43465;
var statearr_43510_44744 = state_43465__$1;
(statearr_43510_44744[(2)] = inst_43439);

(statearr_43510_44744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (6))){
var state_43465__$1 = state_43465;
var statearr_43511_44745 = state_43465__$1;
(statearr_43511_44745[(2)] = false);

(statearr_43511_44745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (28))){
var inst_43435 = (state_43465[(2)]);
var inst_43436 = calc_state();
var inst_43392 = inst_43436;
var state_43465__$1 = (function (){var statearr_43512 = state_43465;
(statearr_43512[(15)] = inst_43435);

(statearr_43512[(7)] = inst_43392);

return statearr_43512;
})();
var statearr_43513_44746 = state_43465__$1;
(statearr_43513_44746[(2)] = null);

(statearr_43513_44746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (25))){
var inst_43461 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43514_44747 = state_43465__$1;
(statearr_43514_44747[(2)] = inst_43461);

(statearr_43514_44747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (34))){
var inst_43459 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43518_44748 = state_43465__$1;
(statearr_43518_44748[(2)] = inst_43459);

(statearr_43518_44748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (17))){
var state_43465__$1 = state_43465;
var statearr_43519_44749 = state_43465__$1;
(statearr_43519_44749[(2)] = false);

(statearr_43519_44749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (3))){
var state_43465__$1 = state_43465;
var statearr_43520_44750 = state_43465__$1;
(statearr_43520_44750[(2)] = false);

(statearr_43520_44750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (12))){
var inst_43463 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43465__$1,inst_43463);
} else {
if((state_val_43466 === (2))){
var inst_43367 = (state_43465[(8)]);
var inst_43372 = inst_43367.cljs$lang$protocol_mask$partition0$;
var inst_43373 = (inst_43372 & (64));
var inst_43374 = inst_43367.cljs$core$ISeq$;
var inst_43375 = (cljs.core.PROTOCOL_SENTINEL === inst_43374);
var inst_43376 = ((inst_43373) || (inst_43375));
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43376)){
var statearr_43523_44751 = state_43465__$1;
(statearr_43523_44751[(1)] = (5));

} else {
var statearr_43524_44752 = state_43465__$1;
(statearr_43524_44752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (23))){
var inst_43424 = (state_43465[(14)]);
var inst_43430 = (inst_43424 == null);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43430)){
var statearr_43525_44754 = state_43465__$1;
(statearr_43525_44754[(1)] = (26));

} else {
var statearr_43526_44755 = state_43465__$1;
(statearr_43526_44755[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (35))){
var inst_43450 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
if(cljs.core.truth_(inst_43450)){
var statearr_43527_44756 = state_43465__$1;
(statearr_43527_44756[(1)] = (36));

} else {
var statearr_43528_44757 = state_43465__$1;
(statearr_43528_44757[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (19))){
var inst_43392 = (state_43465[(7)]);
var inst_43412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43392);
var state_43465__$1 = state_43465;
var statearr_43531_44758 = state_43465__$1;
(statearr_43531_44758[(2)] = inst_43412);

(statearr_43531_44758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (11))){
var inst_43392 = (state_43465[(7)]);
var inst_43396 = (inst_43392 == null);
var inst_43397 = cljs.core.not(inst_43396);
var state_43465__$1 = state_43465;
if(inst_43397){
var statearr_43532_44759 = state_43465__$1;
(statearr_43532_44759[(1)] = (13));

} else {
var statearr_43533_44760 = state_43465__$1;
(statearr_43533_44760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (9))){
var inst_43367 = (state_43465[(8)]);
var state_43465__$1 = state_43465;
var statearr_43534_44761 = state_43465__$1;
(statearr_43534_44761[(2)] = inst_43367);

(statearr_43534_44761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (5))){
var state_43465__$1 = state_43465;
var statearr_43535_44762 = state_43465__$1;
(statearr_43535_44762[(2)] = true);

(statearr_43535_44762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (14))){
var state_43465__$1 = state_43465;
var statearr_43536_44763 = state_43465__$1;
(statearr_43536_44763[(2)] = false);

(statearr_43536_44763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (26))){
var inst_43425 = (state_43465[(10)]);
var inst_43432 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43425);
var state_43465__$1 = state_43465;
var statearr_43537_44764 = state_43465__$1;
(statearr_43537_44764[(2)] = inst_43432);

(statearr_43537_44764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (16))){
var state_43465__$1 = state_43465;
var statearr_43538_44769 = state_43465__$1;
(statearr_43538_44769[(2)] = true);

(statearr_43538_44769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (38))){
var inst_43455 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43540_44770 = state_43465__$1;
(statearr_43540_44770[(2)] = inst_43455);

(statearr_43540_44770[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (30))){
var inst_43425 = (state_43465[(10)]);
var inst_43416 = (state_43465[(11)]);
var inst_43417 = (state_43465[(13)]);
var inst_43442 = cljs.core.empty_QMARK_(inst_43416);
var inst_43443 = (inst_43417.cljs$core$IFn$_invoke$arity$1 ? inst_43417.cljs$core$IFn$_invoke$arity$1(inst_43425) : inst_43417.call(null,inst_43425));
var inst_43444 = cljs.core.not(inst_43443);
var inst_43445 = ((inst_43442) && (inst_43444));
var state_43465__$1 = state_43465;
var statearr_43542_44772 = state_43465__$1;
(statearr_43542_44772[(2)] = inst_43445);

(statearr_43542_44772[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (10))){
var inst_43367 = (state_43465[(8)]);
var inst_43388 = (state_43465[(2)]);
var inst_43389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43388,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43388,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43388,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43392 = inst_43367;
var state_43465__$1 = (function (){var statearr_43543 = state_43465;
(statearr_43543[(16)] = inst_43390);

(statearr_43543[(17)] = inst_43391);

(statearr_43543[(18)] = inst_43389);

(statearr_43543[(7)] = inst_43392);

return statearr_43543;
})();
var statearr_43544_44774 = state_43465__$1;
(statearr_43544_44774[(2)] = null);

(statearr_43544_44774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (18))){
var inst_43407 = (state_43465[(2)]);
var state_43465__$1 = state_43465;
var statearr_43545_44775 = state_43465__$1;
(statearr_43545_44775[(2)] = inst_43407);

(statearr_43545_44775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (37))){
var state_43465__$1 = state_43465;
var statearr_43546_44776 = state_43465__$1;
(statearr_43546_44776[(2)] = null);

(statearr_43546_44776[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43466 === (8))){
var inst_43367 = (state_43465[(8)]);
var inst_43385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43367);
var state_43465__$1 = state_43465;
var statearr_43547_44781 = state_43465__$1;
(statearr_43547_44781[(2)] = inst_43385);

(statearr_43547_44781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42011__auto__ = null;
var cljs$core$async$mix_$_state_machine__42011__auto____0 = (function (){
var statearr_43551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43551[(0)] = cljs$core$async$mix_$_state_machine__42011__auto__);

(statearr_43551[(1)] = (1));

return statearr_43551;
});
var cljs$core$async$mix_$_state_machine__42011__auto____1 = (function (state_43465){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43465);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43552){var ex__42014__auto__ = e43552;
var statearr_43553_44782 = state_43465;
(statearr_43553_44782[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43465[(4)]))){
var statearr_43555_44783 = state_43465;
(statearr_43555_44783[(1)] = cljs.core.first((state_43465[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44784 = state_43465;
state_43465 = G__44784;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42011__auto__ = function(state_43465){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42011__auto____1.call(this,state_43465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42011__auto____0;
cljs$core$async$mix_$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42011__auto____1;
return cljs$core$async$mix_$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43556 = f__42137__auto__();
(statearr_43556[(6)] = c__42136__auto___44717);

return statearr_43556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44785 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44785(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44786 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44786(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44787 = (function() {
var G__44788 = null;
var G__44788__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44788__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44788 = function(p,v){
switch(arguments.length){
case 1:
return G__44788__1.call(this,p);
case 2:
return G__44788__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44788.cljs$core$IFn$_invoke$arity$1 = G__44788__1;
G__44788.cljs$core$IFn$_invoke$arity$2 = G__44788__2;
return G__44788;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43579 = arguments.length;
switch (G__43579) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44787(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44787(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43588 = arguments.length;
switch (G__43588) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43585_SHARP_){
if(cljs.core.truth_((p1__43585_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43585_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43585_SHARP_.call(null,topic)))){
return p1__43585_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43585_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43594 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43595){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43595 = meta43595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43596,meta43595__$1){
var self__ = this;
var _43596__$1 = this;
return (new cljs.core.async.t_cljs$core$async43594(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43595__$1));
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43596){
var self__ = this;
var _43596__$1 = this;
return self__.meta43595;
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43595","meta43595",548523870,null)], null);
}));

(cljs.core.async.t_cljs$core$async43594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43594");

(cljs.core.async.t_cljs$core$async43594.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43594.
 */
cljs.core.async.__GT_t_cljs$core$async43594 = (function cljs$core$async$__GT_t_cljs$core$async43594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43595){
return (new cljs.core.async.t_cljs$core$async43594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43595));
});

}

return (new cljs.core.async.t_cljs$core$async43594(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42136__auto___44795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43677){
var state_val_43678 = (state_43677[(1)]);
if((state_val_43678 === (7))){
var inst_43673 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43679_44796 = state_43677__$1;
(statearr_43679_44796[(2)] = inst_43673);

(statearr_43679_44796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (20))){
var state_43677__$1 = state_43677;
var statearr_43680_44797 = state_43677__$1;
(statearr_43680_44797[(2)] = null);

(statearr_43680_44797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (1))){
var state_43677__$1 = state_43677;
var statearr_43681_44798 = state_43677__$1;
(statearr_43681_44798[(2)] = null);

(statearr_43681_44798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (24))){
var inst_43656 = (state_43677[(7)]);
var inst_43665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43656);
var state_43677__$1 = state_43677;
var statearr_43682_44799 = state_43677__$1;
(statearr_43682_44799[(2)] = inst_43665);

(statearr_43682_44799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (4))){
var inst_43604 = (state_43677[(8)]);
var inst_43604__$1 = (state_43677[(2)]);
var inst_43605 = (inst_43604__$1 == null);
var state_43677__$1 = (function (){var statearr_43683 = state_43677;
(statearr_43683[(8)] = inst_43604__$1);

return statearr_43683;
})();
if(cljs.core.truth_(inst_43605)){
var statearr_43684_44800 = state_43677__$1;
(statearr_43684_44800[(1)] = (5));

} else {
var statearr_43685_44801 = state_43677__$1;
(statearr_43685_44801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (15))){
var inst_43650 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43686_44802 = state_43677__$1;
(statearr_43686_44802[(2)] = inst_43650);

(statearr_43686_44802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (21))){
var inst_43670 = (state_43677[(2)]);
var state_43677__$1 = (function (){var statearr_43687 = state_43677;
(statearr_43687[(9)] = inst_43670);

return statearr_43687;
})();
var statearr_43689_44807 = state_43677__$1;
(statearr_43689_44807[(2)] = null);

(statearr_43689_44807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (13))){
var inst_43632 = (state_43677[(10)]);
var inst_43634 = cljs.core.chunked_seq_QMARK_(inst_43632);
var state_43677__$1 = state_43677;
if(inst_43634){
var statearr_43692_44808 = state_43677__$1;
(statearr_43692_44808[(1)] = (16));

} else {
var statearr_43693_44809 = state_43677__$1;
(statearr_43693_44809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (22))){
var inst_43662 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
if(cljs.core.truth_(inst_43662)){
var statearr_43695_44811 = state_43677__$1;
(statearr_43695_44811[(1)] = (23));

} else {
var statearr_43696_44815 = state_43677__$1;
(statearr_43696_44815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (6))){
var inst_43604 = (state_43677[(8)]);
var inst_43656 = (state_43677[(7)]);
var inst_43658 = (state_43677[(11)]);
var inst_43656__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43604) : topic_fn.call(null,inst_43604));
var inst_43657 = cljs.core.deref(mults);
var inst_43658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43657,inst_43656__$1);
var state_43677__$1 = (function (){var statearr_43698 = state_43677;
(statearr_43698[(7)] = inst_43656__$1);

(statearr_43698[(11)] = inst_43658__$1);

return statearr_43698;
})();
if(cljs.core.truth_(inst_43658__$1)){
var statearr_43699_44816 = state_43677__$1;
(statearr_43699_44816[(1)] = (19));

} else {
var statearr_43700_44818 = state_43677__$1;
(statearr_43700_44818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (25))){
var inst_43667 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43701_44820 = state_43677__$1;
(statearr_43701_44820[(2)] = inst_43667);

(statearr_43701_44820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (17))){
var inst_43632 = (state_43677[(10)]);
var inst_43641 = cljs.core.first(inst_43632);
var inst_43642 = cljs.core.async.muxch_STAR_(inst_43641);
var inst_43643 = cljs.core.async.close_BANG_(inst_43642);
var inst_43644 = cljs.core.next(inst_43632);
var inst_43614 = inst_43644;
var inst_43615 = null;
var inst_43616 = (0);
var inst_43617 = (0);
var state_43677__$1 = (function (){var statearr_43702 = state_43677;
(statearr_43702[(12)] = inst_43616);

(statearr_43702[(13)] = inst_43614);

(statearr_43702[(14)] = inst_43615);

(statearr_43702[(15)] = inst_43617);

(statearr_43702[(16)] = inst_43643);

return statearr_43702;
})();
var statearr_43703_44821 = state_43677__$1;
(statearr_43703_44821[(2)] = null);

(statearr_43703_44821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (3))){
var inst_43675 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43677__$1,inst_43675);
} else {
if((state_val_43678 === (12))){
var inst_43652 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43704_44822 = state_43677__$1;
(statearr_43704_44822[(2)] = inst_43652);

(statearr_43704_44822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (2))){
var state_43677__$1 = state_43677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43677__$1,(4),ch);
} else {
if((state_val_43678 === (23))){
var state_43677__$1 = state_43677;
var statearr_43707_44823 = state_43677__$1;
(statearr_43707_44823[(2)] = null);

(statearr_43707_44823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (19))){
var inst_43604 = (state_43677[(8)]);
var inst_43658 = (state_43677[(11)]);
var inst_43660 = cljs.core.async.muxch_STAR_(inst_43658);
var state_43677__$1 = state_43677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43677__$1,(22),inst_43660,inst_43604);
} else {
if((state_val_43678 === (11))){
var inst_43614 = (state_43677[(13)]);
var inst_43632 = (state_43677[(10)]);
var inst_43632__$1 = cljs.core.seq(inst_43614);
var state_43677__$1 = (function (){var statearr_43709 = state_43677;
(statearr_43709[(10)] = inst_43632__$1);

return statearr_43709;
})();
if(inst_43632__$1){
var statearr_43710_44824 = state_43677__$1;
(statearr_43710_44824[(1)] = (13));

} else {
var statearr_43711_44825 = state_43677__$1;
(statearr_43711_44825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (9))){
var inst_43654 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43712_44826 = state_43677__$1;
(statearr_43712_44826[(2)] = inst_43654);

(statearr_43712_44826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (5))){
var inst_43611 = cljs.core.deref(mults);
var inst_43612 = cljs.core.vals(inst_43611);
var inst_43613 = cljs.core.seq(inst_43612);
var inst_43614 = inst_43613;
var inst_43615 = null;
var inst_43616 = (0);
var inst_43617 = (0);
var state_43677__$1 = (function (){var statearr_43713 = state_43677;
(statearr_43713[(12)] = inst_43616);

(statearr_43713[(13)] = inst_43614);

(statearr_43713[(14)] = inst_43615);

(statearr_43713[(15)] = inst_43617);

return statearr_43713;
})();
var statearr_43714_44827 = state_43677__$1;
(statearr_43714_44827[(2)] = null);

(statearr_43714_44827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (14))){
var state_43677__$1 = state_43677;
var statearr_43718_44828 = state_43677__$1;
(statearr_43718_44828[(2)] = null);

(statearr_43718_44828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (16))){
var inst_43632 = (state_43677[(10)]);
var inst_43636 = cljs.core.chunk_first(inst_43632);
var inst_43637 = cljs.core.chunk_rest(inst_43632);
var inst_43638 = cljs.core.count(inst_43636);
var inst_43614 = inst_43637;
var inst_43615 = inst_43636;
var inst_43616 = inst_43638;
var inst_43617 = (0);
var state_43677__$1 = (function (){var statearr_43722 = state_43677;
(statearr_43722[(12)] = inst_43616);

(statearr_43722[(13)] = inst_43614);

(statearr_43722[(14)] = inst_43615);

(statearr_43722[(15)] = inst_43617);

return statearr_43722;
})();
var statearr_43723_44829 = state_43677__$1;
(statearr_43723_44829[(2)] = null);

(statearr_43723_44829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (10))){
var inst_43616 = (state_43677[(12)]);
var inst_43614 = (state_43677[(13)]);
var inst_43615 = (state_43677[(14)]);
var inst_43617 = (state_43677[(15)]);
var inst_43626 = cljs.core._nth(inst_43615,inst_43617);
var inst_43627 = cljs.core.async.muxch_STAR_(inst_43626);
var inst_43628 = cljs.core.async.close_BANG_(inst_43627);
var inst_43629 = (inst_43617 + (1));
var tmp43715 = inst_43616;
var tmp43716 = inst_43614;
var tmp43717 = inst_43615;
var inst_43614__$1 = tmp43716;
var inst_43615__$1 = tmp43717;
var inst_43616__$1 = tmp43715;
var inst_43617__$1 = inst_43629;
var state_43677__$1 = (function (){var statearr_43724 = state_43677;
(statearr_43724[(12)] = inst_43616__$1);

(statearr_43724[(13)] = inst_43614__$1);

(statearr_43724[(14)] = inst_43615__$1);

(statearr_43724[(15)] = inst_43617__$1);

(statearr_43724[(17)] = inst_43628);

return statearr_43724;
})();
var statearr_43725_44830 = state_43677__$1;
(statearr_43725_44830[(2)] = null);

(statearr_43725_44830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (18))){
var inst_43647 = (state_43677[(2)]);
var state_43677__$1 = state_43677;
var statearr_43726_44831 = state_43677__$1;
(statearr_43726_44831[(2)] = inst_43647);

(statearr_43726_44831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43678 === (8))){
var inst_43616 = (state_43677[(12)]);
var inst_43617 = (state_43677[(15)]);
var inst_43620 = (inst_43617 < inst_43616);
var inst_43621 = inst_43620;
var state_43677__$1 = state_43677;
if(cljs.core.truth_(inst_43621)){
var statearr_43727_44832 = state_43677__$1;
(statearr_43727_44832[(1)] = (10));

} else {
var statearr_43728_44833 = state_43677__$1;
(statearr_43728_44833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_43730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43730[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_43730[(1)] = (1));

return statearr_43730;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_43677){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43677);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43731){var ex__42014__auto__ = e43731;
var statearr_43732_44834 = state_43677;
(statearr_43732_44834[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43677[(4)]))){
var statearr_43733_44835 = state_43677;
(statearr_43733_44835[(1)] = cljs.core.first((state_43677[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44839 = state_43677;
state_43677 = G__44839;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_43677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_43677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43737 = f__42137__auto__();
(statearr_43737[(6)] = c__42136__auto___44795);

return statearr_43737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43741 = arguments.length;
switch (G__43741) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43746 = arguments.length;
switch (G__43746) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43751 = arguments.length;
switch (G__43751) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42136__auto___44859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43800){
var state_val_43801 = (state_43800[(1)]);
if((state_val_43801 === (7))){
var state_43800__$1 = state_43800;
var statearr_43806_44860 = state_43800__$1;
(statearr_43806_44860[(2)] = null);

(statearr_43806_44860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (1))){
var state_43800__$1 = state_43800;
var statearr_43807_44861 = state_43800__$1;
(statearr_43807_44861[(2)] = null);

(statearr_43807_44861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (4))){
var inst_43760 = (state_43800[(7)]);
var inst_43761 = (state_43800[(8)]);
var inst_43763 = (inst_43761 < inst_43760);
var state_43800__$1 = state_43800;
if(cljs.core.truth_(inst_43763)){
var statearr_43811_44862 = state_43800__$1;
(statearr_43811_44862[(1)] = (6));

} else {
var statearr_43812_44864 = state_43800__$1;
(statearr_43812_44864[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (15))){
var inst_43786 = (state_43800[(9)]);
var inst_43791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43786);
var state_43800__$1 = state_43800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43800__$1,(17),out,inst_43791);
} else {
if((state_val_43801 === (13))){
var inst_43786 = (state_43800[(9)]);
var inst_43786__$1 = (state_43800[(2)]);
var inst_43787 = cljs.core.some(cljs.core.nil_QMARK_,inst_43786__$1);
var state_43800__$1 = (function (){var statearr_43816 = state_43800;
(statearr_43816[(9)] = inst_43786__$1);

return statearr_43816;
})();
if(cljs.core.truth_(inst_43787)){
var statearr_43817_44865 = state_43800__$1;
(statearr_43817_44865[(1)] = (14));

} else {
var statearr_43818_44866 = state_43800__$1;
(statearr_43818_44866[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (6))){
var state_43800__$1 = state_43800;
var statearr_43819_44870 = state_43800__$1;
(statearr_43819_44870[(2)] = null);

(statearr_43819_44870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (17))){
var inst_43793 = (state_43800[(2)]);
var state_43800__$1 = (function (){var statearr_43827 = state_43800;
(statearr_43827[(10)] = inst_43793);

return statearr_43827;
})();
var statearr_43828_44877 = state_43800__$1;
(statearr_43828_44877[(2)] = null);

(statearr_43828_44877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (3))){
var inst_43798 = (state_43800[(2)]);
var state_43800__$1 = state_43800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43800__$1,inst_43798);
} else {
if((state_val_43801 === (12))){
var _ = (function (){var statearr_43829 = state_43800;
(statearr_43829[(4)] = cljs.core.rest((state_43800[(4)])));

return statearr_43829;
})();
var state_43800__$1 = state_43800;
var ex43825 = (state_43800__$1[(2)]);
var statearr_43830_44884 = state_43800__$1;
(statearr_43830_44884[(5)] = ex43825);


if((ex43825 instanceof Object)){
var statearr_43831_44885 = state_43800__$1;
(statearr_43831_44885[(1)] = (11));

(statearr_43831_44885[(5)] = null);

} else {
throw ex43825;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (2))){
var inst_43759 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43760 = cnt;
var inst_43761 = (0);
var state_43800__$1 = (function (){var statearr_43832 = state_43800;
(statearr_43832[(7)] = inst_43760);

(statearr_43832[(8)] = inst_43761);

(statearr_43832[(11)] = inst_43759);

return statearr_43832;
})();
var statearr_43833_44886 = state_43800__$1;
(statearr_43833_44886[(2)] = null);

(statearr_43833_44886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (11))){
var inst_43765 = (state_43800[(2)]);
var inst_43766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43800__$1 = (function (){var statearr_43835 = state_43800;
(statearr_43835[(12)] = inst_43765);

return statearr_43835;
})();
var statearr_43836_44887 = state_43800__$1;
(statearr_43836_44887[(2)] = inst_43766);

(statearr_43836_44887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (9))){
var inst_43761 = (state_43800[(8)]);
var _ = (function (){var statearr_43837 = state_43800;
(statearr_43837[(4)] = cljs.core.cons((12),(state_43800[(4)])));

return statearr_43837;
})();
var inst_43772 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43761) : chs__$1.call(null,inst_43761));
var inst_43773 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43761) : done.call(null,inst_43761));
var inst_43774 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43772,inst_43773);
var ___$1 = (function (){var statearr_43839 = state_43800;
(statearr_43839[(4)] = cljs.core.rest((state_43800[(4)])));

return statearr_43839;
})();
var state_43800__$1 = state_43800;
var statearr_43840_44888 = state_43800__$1;
(statearr_43840_44888[(2)] = inst_43774);

(statearr_43840_44888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (5))){
var inst_43784 = (state_43800[(2)]);
var state_43800__$1 = (function (){var statearr_43841 = state_43800;
(statearr_43841[(13)] = inst_43784);

return statearr_43841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43800__$1,(13),dchan);
} else {
if((state_val_43801 === (14))){
var inst_43789 = cljs.core.async.close_BANG_(out);
var state_43800__$1 = state_43800;
var statearr_43843_44889 = state_43800__$1;
(statearr_43843_44889[(2)] = inst_43789);

(statearr_43843_44889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (16))){
var inst_43796 = (state_43800[(2)]);
var state_43800__$1 = state_43800;
var statearr_43844_44890 = state_43800__$1;
(statearr_43844_44890[(2)] = inst_43796);

(statearr_43844_44890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (10))){
var inst_43761 = (state_43800[(8)]);
var inst_43777 = (state_43800[(2)]);
var inst_43778 = (inst_43761 + (1));
var inst_43761__$1 = inst_43778;
var state_43800__$1 = (function (){var statearr_43846 = state_43800;
(statearr_43846[(14)] = inst_43777);

(statearr_43846[(8)] = inst_43761__$1);

return statearr_43846;
})();
var statearr_43847_44897 = state_43800__$1;
(statearr_43847_44897[(2)] = null);

(statearr_43847_44897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43801 === (8))){
var inst_43782 = (state_43800[(2)]);
var state_43800__$1 = state_43800;
var statearr_43848_44898 = state_43800__$1;
(statearr_43848_44898[(2)] = inst_43782);

(statearr_43848_44898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_43850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43850[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_43850[(1)] = (1));

return statearr_43850;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_43800){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43800);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43851){var ex__42014__auto__ = e43851;
var statearr_43852_44899 = state_43800;
(statearr_43852_44899[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43800[(4)]))){
var statearr_43853_44900 = state_43800;
(statearr_43853_44900[(1)] = cljs.core.first((state_43800[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44901 = state_43800;
state_43800 = G__44901;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_43800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_43800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43855 = f__42137__auto__();
(statearr_43855[(6)] = c__42136__auto___44859);

return statearr_43855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43858 = arguments.length;
switch (G__43858) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___44909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43891){
var state_val_43892 = (state_43891[(1)]);
if((state_val_43892 === (7))){
var inst_43870 = (state_43891[(7)]);
var inst_43871 = (state_43891[(8)]);
var inst_43870__$1 = (state_43891[(2)]);
var inst_43871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43870__$1,(0),null);
var inst_43872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43870__$1,(1),null);
var inst_43873 = (inst_43871__$1 == null);
var state_43891__$1 = (function (){var statearr_43894 = state_43891;
(statearr_43894[(9)] = inst_43872);

(statearr_43894[(7)] = inst_43870__$1);

(statearr_43894[(8)] = inst_43871__$1);

return statearr_43894;
})();
if(cljs.core.truth_(inst_43873)){
var statearr_43895_44910 = state_43891__$1;
(statearr_43895_44910[(1)] = (8));

} else {
var statearr_43896_44911 = state_43891__$1;
(statearr_43896_44911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (1))){
var inst_43860 = cljs.core.vec(chs);
var inst_43861 = inst_43860;
var state_43891__$1 = (function (){var statearr_43897 = state_43891;
(statearr_43897[(10)] = inst_43861);

return statearr_43897;
})();
var statearr_43898_44912 = state_43891__$1;
(statearr_43898_44912[(2)] = null);

(statearr_43898_44912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (4))){
var inst_43861 = (state_43891[(10)]);
var state_43891__$1 = state_43891;
return cljs.core.async.ioc_alts_BANG_(state_43891__$1,(7),inst_43861);
} else {
if((state_val_43892 === (6))){
var inst_43887 = (state_43891[(2)]);
var state_43891__$1 = state_43891;
var statearr_43902_44913 = state_43891__$1;
(statearr_43902_44913[(2)] = inst_43887);

(statearr_43902_44913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (3))){
var inst_43889 = (state_43891[(2)]);
var state_43891__$1 = state_43891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43891__$1,inst_43889);
} else {
if((state_val_43892 === (2))){
var inst_43861 = (state_43891[(10)]);
var inst_43863 = cljs.core.count(inst_43861);
var inst_43864 = (inst_43863 > (0));
var state_43891__$1 = state_43891;
if(cljs.core.truth_(inst_43864)){
var statearr_43909_44914 = state_43891__$1;
(statearr_43909_44914[(1)] = (4));

} else {
var statearr_43910_44915 = state_43891__$1;
(statearr_43910_44915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (11))){
var inst_43861 = (state_43891[(10)]);
var inst_43880 = (state_43891[(2)]);
var tmp43908 = inst_43861;
var inst_43861__$1 = tmp43908;
var state_43891__$1 = (function (){var statearr_43911 = state_43891;
(statearr_43911[(11)] = inst_43880);

(statearr_43911[(10)] = inst_43861__$1);

return statearr_43911;
})();
var statearr_43912_44916 = state_43891__$1;
(statearr_43912_44916[(2)] = null);

(statearr_43912_44916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (9))){
var inst_43871 = (state_43891[(8)]);
var state_43891__$1 = state_43891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43891__$1,(11),out,inst_43871);
} else {
if((state_val_43892 === (5))){
var inst_43885 = cljs.core.async.close_BANG_(out);
var state_43891__$1 = state_43891;
var statearr_43913_44923 = state_43891__$1;
(statearr_43913_44923[(2)] = inst_43885);

(statearr_43913_44923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (10))){
var inst_43883 = (state_43891[(2)]);
var state_43891__$1 = state_43891;
var statearr_43914_44924 = state_43891__$1;
(statearr_43914_44924[(2)] = inst_43883);

(statearr_43914_44924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43892 === (8))){
var inst_43872 = (state_43891[(9)]);
var inst_43870 = (state_43891[(7)]);
var inst_43871 = (state_43891[(8)]);
var inst_43861 = (state_43891[(10)]);
var inst_43875 = (function (){var cs = inst_43861;
var vec__43866 = inst_43870;
var v = inst_43871;
var c = inst_43872;
return (function (p1__43856_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43856_SHARP_);
});
})();
var inst_43876 = cljs.core.filterv(inst_43875,inst_43861);
var inst_43861__$1 = inst_43876;
var state_43891__$1 = (function (){var statearr_43915 = state_43891;
(statearr_43915[(10)] = inst_43861__$1);

return statearr_43915;
})();
var statearr_43916_44925 = state_43891__$1;
(statearr_43916_44925[(2)] = null);

(statearr_43916_44925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_43918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43918[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_43918[(1)] = (1));

return statearr_43918;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_43891){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43891);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43919){var ex__42014__auto__ = e43919;
var statearr_43920_44926 = state_43891;
(statearr_43920_44926[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43891[(4)]))){
var statearr_43921_44927 = state_43891;
(statearr_43921_44927[(1)] = cljs.core.first((state_43891[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44928 = state_43891;
state_43891 = G__44928;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_43891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_43891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43922 = f__42137__auto__();
(statearr_43922[(6)] = c__42136__auto___44909);

return statearr_43922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43924 = arguments.length;
switch (G__43924) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___44930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_43948){
var state_val_43949 = (state_43948[(1)]);
if((state_val_43949 === (7))){
var inst_43930 = (state_43948[(7)]);
var inst_43930__$1 = (state_43948[(2)]);
var inst_43931 = (inst_43930__$1 == null);
var inst_43932 = cljs.core.not(inst_43931);
var state_43948__$1 = (function (){var statearr_43950 = state_43948;
(statearr_43950[(7)] = inst_43930__$1);

return statearr_43950;
})();
if(inst_43932){
var statearr_43951_44933 = state_43948__$1;
(statearr_43951_44933[(1)] = (8));

} else {
var statearr_43952_44934 = state_43948__$1;
(statearr_43952_44934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (1))){
var inst_43925 = (0);
var state_43948__$1 = (function (){var statearr_43953 = state_43948;
(statearr_43953[(8)] = inst_43925);

return statearr_43953;
})();
var statearr_43954_44935 = state_43948__$1;
(statearr_43954_44935[(2)] = null);

(statearr_43954_44935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (4))){
var state_43948__$1 = state_43948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43948__$1,(7),ch);
} else {
if((state_val_43949 === (6))){
var inst_43943 = (state_43948[(2)]);
var state_43948__$1 = state_43948;
var statearr_43955_44936 = state_43948__$1;
(statearr_43955_44936[(2)] = inst_43943);

(statearr_43955_44936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (3))){
var inst_43945 = (state_43948[(2)]);
var inst_43946 = cljs.core.async.close_BANG_(out);
var state_43948__$1 = (function (){var statearr_43956 = state_43948;
(statearr_43956[(9)] = inst_43945);

return statearr_43956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43948__$1,inst_43946);
} else {
if((state_val_43949 === (2))){
var inst_43925 = (state_43948[(8)]);
var inst_43927 = (inst_43925 < n);
var state_43948__$1 = state_43948;
if(cljs.core.truth_(inst_43927)){
var statearr_43957_44937 = state_43948__$1;
(statearr_43957_44937[(1)] = (4));

} else {
var statearr_43958_44938 = state_43948__$1;
(statearr_43958_44938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (11))){
var inst_43925 = (state_43948[(8)]);
var inst_43935 = (state_43948[(2)]);
var inst_43936 = (inst_43925 + (1));
var inst_43925__$1 = inst_43936;
var state_43948__$1 = (function (){var statearr_43959 = state_43948;
(statearr_43959[(8)] = inst_43925__$1);

(statearr_43959[(10)] = inst_43935);

return statearr_43959;
})();
var statearr_43960_44941 = state_43948__$1;
(statearr_43960_44941[(2)] = null);

(statearr_43960_44941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (9))){
var state_43948__$1 = state_43948;
var statearr_43961_44942 = state_43948__$1;
(statearr_43961_44942[(2)] = null);

(statearr_43961_44942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (5))){
var state_43948__$1 = state_43948;
var statearr_43962_44943 = state_43948__$1;
(statearr_43962_44943[(2)] = null);

(statearr_43962_44943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (10))){
var inst_43940 = (state_43948[(2)]);
var state_43948__$1 = state_43948;
var statearr_43963_44944 = state_43948__$1;
(statearr_43963_44944[(2)] = inst_43940);

(statearr_43963_44944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43949 === (8))){
var inst_43930 = (state_43948[(7)]);
var state_43948__$1 = state_43948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43948__$1,(11),out,inst_43930);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_43965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43965[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_43965[(1)] = (1));

return statearr_43965;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_43948){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_43948);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e43966){var ex__42014__auto__ = e43966;
var statearr_43967_44945 = state_43948;
(statearr_43967_44945[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_43948[(4)]))){
var statearr_43968_44946 = state_43948;
(statearr_43968_44946[(1)] = cljs.core.first((state_43948[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44947 = state_43948;
state_43948 = G__44947;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_43948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_43948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_43969 = f__42137__auto__();
(statearr_43969[(6)] = c__42136__auto___44930);

return statearr_43969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43971 = (function (f,ch,meta43972){
this.f = f;
this.ch = ch;
this.meta43972 = meta43972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43973,meta43972__$1){
var self__ = this;
var _43973__$1 = this;
return (new cljs.core.async.t_cljs$core$async43971(self__.f,self__.ch,meta43972__$1));
}));

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43973){
var self__ = this;
var _43973__$1 = this;
return self__.meta43972;
}));

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43974 = (function (f,ch,meta43972,_,fn1,meta43975){
this.f = f;
this.ch = ch;
this.meta43972 = meta43972;
this._ = _;
this.fn1 = fn1;
this.meta43975 = meta43975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43976,meta43975__$1){
var self__ = this;
var _43976__$1 = this;
return (new cljs.core.async.t_cljs$core$async43974(self__.f,self__.ch,self__.meta43972,self__._,self__.fn1,meta43975__$1));
}));

(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43976){
var self__ = this;
var _43976__$1 = this;
return self__.meta43975;
}));

(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43970_SHARP_){
var G__43977 = (((p1__43970_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43970_SHARP_) : self__.f.call(null,p1__43970_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43977) : f1.call(null,G__43977));
});
}));

(cljs.core.async.t_cljs$core$async43974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43972","meta43972",-1584530925,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43971","cljs.core.async/t_cljs$core$async43971",1444226908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43975","meta43975",-207599416,null)], null);
}));

(cljs.core.async.t_cljs$core$async43974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43974");

(cljs.core.async.t_cljs$core$async43974.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43974.
 */
cljs.core.async.__GT_t_cljs$core$async43974 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43974(f__$1,ch__$1,meta43972__$1,___$2,fn1__$1,meta43975){
return (new cljs.core.async.t_cljs$core$async43974(f__$1,ch__$1,meta43972__$1,___$2,fn1__$1,meta43975));
});

}

return (new cljs.core.async.t_cljs$core$async43974(self__.f,self__.ch,self__.meta43972,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43978 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43978) : self__.f.call(null,G__43978));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43972","meta43972",-1584530925,null)], null);
}));

(cljs.core.async.t_cljs$core$async43971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43971");

(cljs.core.async.t_cljs$core$async43971.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43971.
 */
cljs.core.async.__GT_t_cljs$core$async43971 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43971(f__$1,ch__$1,meta43972){
return (new cljs.core.async.t_cljs$core$async43971(f__$1,ch__$1,meta43972));
});

}

return (new cljs.core.async.t_cljs$core$async43971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43979 = (function (f,ch,meta43980){
this.f = f;
this.ch = ch;
this.meta43980 = meta43980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43981,meta43980__$1){
var self__ = this;
var _43981__$1 = this;
return (new cljs.core.async.t_cljs$core$async43979(self__.f,self__.ch,meta43980__$1));
}));

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43981){
var self__ = this;
var _43981__$1 = this;
return self__.meta43980;
}));

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43980","meta43980",-1646921875,null)], null);
}));

(cljs.core.async.t_cljs$core$async43979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43979");

(cljs.core.async.t_cljs$core$async43979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43979.
 */
cljs.core.async.__GT_t_cljs$core$async43979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43979(f__$1,ch__$1,meta43980){
return (new cljs.core.async.t_cljs$core$async43979(f__$1,ch__$1,meta43980));
});

}

return (new cljs.core.async.t_cljs$core$async43979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43984 = (function (p,ch,meta43985){
this.p = p;
this.ch = ch;
this.meta43985 = meta43985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43986,meta43985__$1){
var self__ = this;
var _43986__$1 = this;
return (new cljs.core.async.t_cljs$core$async43984(self__.p,self__.ch,meta43985__$1));
}));

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43986){
var self__ = this;
var _43986__$1 = this;
return self__.meta43985;
}));

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43985","meta43985",-221784260,null)], null);
}));

(cljs.core.async.t_cljs$core$async43984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43984");

(cljs.core.async.t_cljs$core$async43984.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43984.
 */
cljs.core.async.__GT_t_cljs$core$async43984 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43984(p__$1,ch__$1,meta43985){
return (new cljs.core.async.t_cljs$core$async43984(p__$1,ch__$1,meta43985));
});

}

return (new cljs.core.async.t_cljs$core$async43984(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43988 = arguments.length;
switch (G__43988) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___44964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44009){
var state_val_44010 = (state_44009[(1)]);
if((state_val_44010 === (7))){
var inst_44005 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44011_44965 = state_44009__$1;
(statearr_44011_44965[(2)] = inst_44005);

(statearr_44011_44965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (1))){
var state_44009__$1 = state_44009;
var statearr_44012_44967 = state_44009__$1;
(statearr_44012_44967[(2)] = null);

(statearr_44012_44967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (4))){
var inst_43991 = (state_44009[(7)]);
var inst_43991__$1 = (state_44009[(2)]);
var inst_43992 = (inst_43991__$1 == null);
var state_44009__$1 = (function (){var statearr_44013 = state_44009;
(statearr_44013[(7)] = inst_43991__$1);

return statearr_44013;
})();
if(cljs.core.truth_(inst_43992)){
var statearr_44014_44969 = state_44009__$1;
(statearr_44014_44969[(1)] = (5));

} else {
var statearr_44015_44970 = state_44009__$1;
(statearr_44015_44970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (6))){
var inst_43991 = (state_44009[(7)]);
var inst_43996 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43991) : p.call(null,inst_43991));
var state_44009__$1 = state_44009;
if(cljs.core.truth_(inst_43996)){
var statearr_44016_44971 = state_44009__$1;
(statearr_44016_44971[(1)] = (8));

} else {
var statearr_44017_44973 = state_44009__$1;
(statearr_44017_44973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (3))){
var inst_44007 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44009__$1,inst_44007);
} else {
if((state_val_44010 === (2))){
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44009__$1,(4),ch);
} else {
if((state_val_44010 === (11))){
var inst_43999 = (state_44009[(2)]);
var state_44009__$1 = state_44009;
var statearr_44018_44974 = state_44009__$1;
(statearr_44018_44974[(2)] = inst_43999);

(statearr_44018_44974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (9))){
var state_44009__$1 = state_44009;
var statearr_44019_44975 = state_44009__$1;
(statearr_44019_44975[(2)] = null);

(statearr_44019_44975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (5))){
var inst_43994 = cljs.core.async.close_BANG_(out);
var state_44009__$1 = state_44009;
var statearr_44020_44977 = state_44009__$1;
(statearr_44020_44977[(2)] = inst_43994);

(statearr_44020_44977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (10))){
var inst_44002 = (state_44009[(2)]);
var state_44009__$1 = (function (){var statearr_44021 = state_44009;
(statearr_44021[(8)] = inst_44002);

return statearr_44021;
})();
var statearr_44022_44978 = state_44009__$1;
(statearr_44022_44978[(2)] = null);

(statearr_44022_44978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44010 === (8))){
var inst_43991 = (state_44009[(7)]);
var state_44009__$1 = state_44009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44009__$1,(11),out,inst_43991);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_44023 = [null,null,null,null,null,null,null,null,null];
(statearr_44023[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_44023[(1)] = (1));

return statearr_44023;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_44009){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44009);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44024){var ex__42014__auto__ = e44024;
var statearr_44025_44980 = state_44009;
(statearr_44025_44980[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44009[(4)]))){
var statearr_44026_44981 = state_44009;
(statearr_44026_44981[(1)] = cljs.core.first((state_44009[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44982 = state_44009;
state_44009 = G__44982;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_44009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_44009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44027 = f__42137__auto__();
(statearr_44027[(6)] = c__42136__auto___44964);

return statearr_44027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44029 = arguments.length;
switch (G__44029) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44091){
var state_val_44092 = (state_44091[(1)]);
if((state_val_44092 === (7))){
var inst_44087 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
var statearr_44093_44989 = state_44091__$1;
(statearr_44093_44989[(2)] = inst_44087);

(statearr_44093_44989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (20))){
var inst_44057 = (state_44091[(7)]);
var inst_44068 = (state_44091[(2)]);
var inst_44069 = cljs.core.next(inst_44057);
var inst_44043 = inst_44069;
var inst_44044 = null;
var inst_44045 = (0);
var inst_44046 = (0);
var state_44091__$1 = (function (){var statearr_44094 = state_44091;
(statearr_44094[(8)] = inst_44044);

(statearr_44094[(9)] = inst_44046);

(statearr_44094[(10)] = inst_44045);

(statearr_44094[(11)] = inst_44068);

(statearr_44094[(12)] = inst_44043);

return statearr_44094;
})();
var statearr_44095_44997 = state_44091__$1;
(statearr_44095_44997[(2)] = null);

(statearr_44095_44997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (1))){
var state_44091__$1 = state_44091;
var statearr_44096_45002 = state_44091__$1;
(statearr_44096_45002[(2)] = null);

(statearr_44096_45002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (4))){
var inst_44032 = (state_44091[(13)]);
var inst_44032__$1 = (state_44091[(2)]);
var inst_44033 = (inst_44032__$1 == null);
var state_44091__$1 = (function (){var statearr_44097 = state_44091;
(statearr_44097[(13)] = inst_44032__$1);

return statearr_44097;
})();
if(cljs.core.truth_(inst_44033)){
var statearr_44098_45004 = state_44091__$1;
(statearr_44098_45004[(1)] = (5));

} else {
var statearr_44099_45005 = state_44091__$1;
(statearr_44099_45005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (15))){
var state_44091__$1 = state_44091;
var statearr_44103_45006 = state_44091__$1;
(statearr_44103_45006[(2)] = null);

(statearr_44103_45006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (21))){
var state_44091__$1 = state_44091;
var statearr_44104_45007 = state_44091__$1;
(statearr_44104_45007[(2)] = null);

(statearr_44104_45007[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (13))){
var inst_44044 = (state_44091[(8)]);
var inst_44046 = (state_44091[(9)]);
var inst_44045 = (state_44091[(10)]);
var inst_44043 = (state_44091[(12)]);
var inst_44053 = (state_44091[(2)]);
var inst_44054 = (inst_44046 + (1));
var tmp44100 = inst_44044;
var tmp44101 = inst_44045;
var tmp44102 = inst_44043;
var inst_44043__$1 = tmp44102;
var inst_44044__$1 = tmp44100;
var inst_44045__$1 = tmp44101;
var inst_44046__$1 = inst_44054;
var state_44091__$1 = (function (){var statearr_44105 = state_44091;
(statearr_44105[(8)] = inst_44044__$1);

(statearr_44105[(9)] = inst_44046__$1);

(statearr_44105[(10)] = inst_44045__$1);

(statearr_44105[(14)] = inst_44053);

(statearr_44105[(12)] = inst_44043__$1);

return statearr_44105;
})();
var statearr_44106_45012 = state_44091__$1;
(statearr_44106_45012[(2)] = null);

(statearr_44106_45012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (22))){
var state_44091__$1 = state_44091;
var statearr_44107_45013 = state_44091__$1;
(statearr_44107_45013[(2)] = null);

(statearr_44107_45013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (6))){
var inst_44032 = (state_44091[(13)]);
var inst_44041 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44032) : f.call(null,inst_44032));
var inst_44042 = cljs.core.seq(inst_44041);
var inst_44043 = inst_44042;
var inst_44044 = null;
var inst_44045 = (0);
var inst_44046 = (0);
var state_44091__$1 = (function (){var statearr_44108 = state_44091;
(statearr_44108[(8)] = inst_44044);

(statearr_44108[(9)] = inst_44046);

(statearr_44108[(10)] = inst_44045);

(statearr_44108[(12)] = inst_44043);

return statearr_44108;
})();
var statearr_44109_45023 = state_44091__$1;
(statearr_44109_45023[(2)] = null);

(statearr_44109_45023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (17))){
var inst_44057 = (state_44091[(7)]);
var inst_44061 = cljs.core.chunk_first(inst_44057);
var inst_44062 = cljs.core.chunk_rest(inst_44057);
var inst_44063 = cljs.core.count(inst_44061);
var inst_44043 = inst_44062;
var inst_44044 = inst_44061;
var inst_44045 = inst_44063;
var inst_44046 = (0);
var state_44091__$1 = (function (){var statearr_44110 = state_44091;
(statearr_44110[(8)] = inst_44044);

(statearr_44110[(9)] = inst_44046);

(statearr_44110[(10)] = inst_44045);

(statearr_44110[(12)] = inst_44043);

return statearr_44110;
})();
var statearr_44111_45029 = state_44091__$1;
(statearr_44111_45029[(2)] = null);

(statearr_44111_45029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (3))){
var inst_44089 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44091__$1,inst_44089);
} else {
if((state_val_44092 === (12))){
var inst_44077 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
var statearr_44112_45034 = state_44091__$1;
(statearr_44112_45034[(2)] = inst_44077);

(statearr_44112_45034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (2))){
var state_44091__$1 = state_44091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44091__$1,(4),in$);
} else {
if((state_val_44092 === (23))){
var inst_44085 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
var statearr_44113_45042 = state_44091__$1;
(statearr_44113_45042[(2)] = inst_44085);

(statearr_44113_45042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (19))){
var inst_44072 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
var statearr_44114_45044 = state_44091__$1;
(statearr_44114_45044[(2)] = inst_44072);

(statearr_44114_45044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (11))){
var inst_44057 = (state_44091[(7)]);
var inst_44043 = (state_44091[(12)]);
var inst_44057__$1 = cljs.core.seq(inst_44043);
var state_44091__$1 = (function (){var statearr_44115 = state_44091;
(statearr_44115[(7)] = inst_44057__$1);

return statearr_44115;
})();
if(inst_44057__$1){
var statearr_44116_45046 = state_44091__$1;
(statearr_44116_45046[(1)] = (14));

} else {
var statearr_44117_45047 = state_44091__$1;
(statearr_44117_45047[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (9))){
var inst_44079 = (state_44091[(2)]);
var inst_44080 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44091__$1 = (function (){var statearr_44118 = state_44091;
(statearr_44118[(15)] = inst_44079);

return statearr_44118;
})();
if(cljs.core.truth_(inst_44080)){
var statearr_44119_45048 = state_44091__$1;
(statearr_44119_45048[(1)] = (21));

} else {
var statearr_44120_45050 = state_44091__$1;
(statearr_44120_45050[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (5))){
var inst_44035 = cljs.core.async.close_BANG_(out);
var state_44091__$1 = state_44091;
var statearr_44121_45051 = state_44091__$1;
(statearr_44121_45051[(2)] = inst_44035);

(statearr_44121_45051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (14))){
var inst_44057 = (state_44091[(7)]);
var inst_44059 = cljs.core.chunked_seq_QMARK_(inst_44057);
var state_44091__$1 = state_44091;
if(inst_44059){
var statearr_44122_45052 = state_44091__$1;
(statearr_44122_45052[(1)] = (17));

} else {
var statearr_44123_45053 = state_44091__$1;
(statearr_44123_45053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (16))){
var inst_44075 = (state_44091[(2)]);
var state_44091__$1 = state_44091;
var statearr_44124_45054 = state_44091__$1;
(statearr_44124_45054[(2)] = inst_44075);

(statearr_44124_45054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44092 === (10))){
var inst_44044 = (state_44091[(8)]);
var inst_44046 = (state_44091[(9)]);
var inst_44051 = cljs.core._nth(inst_44044,inst_44046);
var state_44091__$1 = state_44091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44091__$1,(13),out,inst_44051);
} else {
if((state_val_44092 === (18))){
var inst_44057 = (state_44091[(7)]);
var inst_44066 = cljs.core.first(inst_44057);
var state_44091__$1 = state_44091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44091__$1,(20),out,inst_44066);
} else {
if((state_val_44092 === (8))){
var inst_44046 = (state_44091[(9)]);
var inst_44045 = (state_44091[(10)]);
var inst_44048 = (inst_44046 < inst_44045);
var inst_44049 = inst_44048;
var state_44091__$1 = state_44091;
if(cljs.core.truth_(inst_44049)){
var statearr_44125_45056 = state_44091__$1;
(statearr_44125_45056[(1)] = (10));

} else {
var statearr_44126_45057 = state_44091__$1;
(statearr_44126_45057[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____0 = (function (){
var statearr_44127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44127[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__);

(statearr_44127[(1)] = (1));

return statearr_44127;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____1 = (function (state_44091){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44091);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44128){var ex__42014__auto__ = e44128;
var statearr_44129_45060 = state_44091;
(statearr_44129_45060[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44091[(4)]))){
var statearr_44130_45061 = state_44091;
(statearr_44130_45061[(1)] = cljs.core.first((state_44091[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45062 = state_44091;
state_44091 = G__45062;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__ = function(state_44091){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____1.call(this,state_44091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42011__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44131 = f__42137__auto__();
(statearr_44131[(6)] = c__42136__auto__);

return statearr_44131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));

return c__42136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44133 = arguments.length;
switch (G__44133) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44135 = arguments.length;
switch (G__44135) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44137 = arguments.length;
switch (G__44137) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___45077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44161){
var state_val_44162 = (state_44161[(1)]);
if((state_val_44162 === (7))){
var inst_44156 = (state_44161[(2)]);
var state_44161__$1 = state_44161;
var statearr_44163_45085 = state_44161__$1;
(statearr_44163_45085[(2)] = inst_44156);

(statearr_44163_45085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (1))){
var inst_44138 = null;
var state_44161__$1 = (function (){var statearr_44164 = state_44161;
(statearr_44164[(7)] = inst_44138);

return statearr_44164;
})();
var statearr_44165_45091 = state_44161__$1;
(statearr_44165_45091[(2)] = null);

(statearr_44165_45091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (4))){
var inst_44141 = (state_44161[(8)]);
var inst_44141__$1 = (state_44161[(2)]);
var inst_44142 = (inst_44141__$1 == null);
var inst_44143 = cljs.core.not(inst_44142);
var state_44161__$1 = (function (){var statearr_44166 = state_44161;
(statearr_44166[(8)] = inst_44141__$1);

return statearr_44166;
})();
if(inst_44143){
var statearr_44167_45103 = state_44161__$1;
(statearr_44167_45103[(1)] = (5));

} else {
var statearr_44168_45104 = state_44161__$1;
(statearr_44168_45104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (6))){
var state_44161__$1 = state_44161;
var statearr_44169_45110 = state_44161__$1;
(statearr_44169_45110[(2)] = null);

(statearr_44169_45110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (3))){
var inst_44158 = (state_44161[(2)]);
var inst_44159 = cljs.core.async.close_BANG_(out);
var state_44161__$1 = (function (){var statearr_44170 = state_44161;
(statearr_44170[(9)] = inst_44158);

return statearr_44170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44161__$1,inst_44159);
} else {
if((state_val_44162 === (2))){
var state_44161__$1 = state_44161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44161__$1,(4),ch);
} else {
if((state_val_44162 === (11))){
var inst_44141 = (state_44161[(8)]);
var inst_44150 = (state_44161[(2)]);
var inst_44138 = inst_44141;
var state_44161__$1 = (function (){var statearr_44171 = state_44161;
(statearr_44171[(7)] = inst_44138);

(statearr_44171[(10)] = inst_44150);

return statearr_44171;
})();
var statearr_44172_45127 = state_44161__$1;
(statearr_44172_45127[(2)] = null);

(statearr_44172_45127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (9))){
var inst_44141 = (state_44161[(8)]);
var state_44161__$1 = state_44161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44161__$1,(11),out,inst_44141);
} else {
if((state_val_44162 === (5))){
var inst_44138 = (state_44161[(7)]);
var inst_44141 = (state_44161[(8)]);
var inst_44145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44141,inst_44138);
var state_44161__$1 = state_44161;
if(inst_44145){
var statearr_44174_45141 = state_44161__$1;
(statearr_44174_45141[(1)] = (8));

} else {
var statearr_44175_45146 = state_44161__$1;
(statearr_44175_45146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (10))){
var inst_44153 = (state_44161[(2)]);
var state_44161__$1 = state_44161;
var statearr_44176_45150 = state_44161__$1;
(statearr_44176_45150[(2)] = inst_44153);

(statearr_44176_45150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44162 === (8))){
var inst_44138 = (state_44161[(7)]);
var tmp44173 = inst_44138;
var inst_44138__$1 = tmp44173;
var state_44161__$1 = (function (){var statearr_44177 = state_44161;
(statearr_44177[(7)] = inst_44138__$1);

return statearr_44177;
})();
var statearr_44178_45160 = state_44161__$1;
(statearr_44178_45160[(2)] = null);

(statearr_44178_45160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_44179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44179[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_44179[(1)] = (1));

return statearr_44179;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_44161){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44161);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44180){var ex__42014__auto__ = e44180;
var statearr_44181_45173 = state_44161;
(statearr_44181_45173[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44161[(4)]))){
var statearr_44182_45174 = state_44161;
(statearr_44182_45174[(1)] = cljs.core.first((state_44161[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45175 = state_44161;
state_44161 = G__45175;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_44161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_44161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44183 = f__42137__auto__();
(statearr_44183[(6)] = c__42136__auto___45077);

return statearr_44183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44185 = arguments.length;
switch (G__44185) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___45181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44223){
var state_val_44224 = (state_44223[(1)]);
if((state_val_44224 === (7))){
var inst_44219 = (state_44223[(2)]);
var state_44223__$1 = state_44223;
var statearr_44225_45186 = state_44223__$1;
(statearr_44225_45186[(2)] = inst_44219);

(statearr_44225_45186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (1))){
var inst_44186 = (new Array(n));
var inst_44187 = inst_44186;
var inst_44188 = (0);
var state_44223__$1 = (function (){var statearr_44226 = state_44223;
(statearr_44226[(7)] = inst_44188);

(statearr_44226[(8)] = inst_44187);

return statearr_44226;
})();
var statearr_44227_45191 = state_44223__$1;
(statearr_44227_45191[(2)] = null);

(statearr_44227_45191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (4))){
var inst_44191 = (state_44223[(9)]);
var inst_44191__$1 = (state_44223[(2)]);
var inst_44192 = (inst_44191__$1 == null);
var inst_44193 = cljs.core.not(inst_44192);
var state_44223__$1 = (function (){var statearr_44228 = state_44223;
(statearr_44228[(9)] = inst_44191__$1);

return statearr_44228;
})();
if(inst_44193){
var statearr_44229_45197 = state_44223__$1;
(statearr_44229_45197[(1)] = (5));

} else {
var statearr_44230_45198 = state_44223__$1;
(statearr_44230_45198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (15))){
var inst_44213 = (state_44223[(2)]);
var state_44223__$1 = state_44223;
var statearr_44231_45200 = state_44223__$1;
(statearr_44231_45200[(2)] = inst_44213);

(statearr_44231_45200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (13))){
var state_44223__$1 = state_44223;
var statearr_44232_45201 = state_44223__$1;
(statearr_44232_45201[(2)] = null);

(statearr_44232_45201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (6))){
var inst_44188 = (state_44223[(7)]);
var inst_44209 = (inst_44188 > (0));
var state_44223__$1 = state_44223;
if(cljs.core.truth_(inst_44209)){
var statearr_44233_45202 = state_44223__$1;
(statearr_44233_45202[(1)] = (12));

} else {
var statearr_44234_45203 = state_44223__$1;
(statearr_44234_45203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (3))){
var inst_44221 = (state_44223[(2)]);
var state_44223__$1 = state_44223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44223__$1,inst_44221);
} else {
if((state_val_44224 === (12))){
var inst_44187 = (state_44223[(8)]);
var inst_44211 = cljs.core.vec(inst_44187);
var state_44223__$1 = state_44223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44223__$1,(15),out,inst_44211);
} else {
if((state_val_44224 === (2))){
var state_44223__$1 = state_44223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44223__$1,(4),ch);
} else {
if((state_val_44224 === (11))){
var inst_44203 = (state_44223[(2)]);
var inst_44204 = (new Array(n));
var inst_44187 = inst_44204;
var inst_44188 = (0);
var state_44223__$1 = (function (){var statearr_44235 = state_44223;
(statearr_44235[(7)] = inst_44188);

(statearr_44235[(8)] = inst_44187);

(statearr_44235[(10)] = inst_44203);

return statearr_44235;
})();
var statearr_44236_45205 = state_44223__$1;
(statearr_44236_45205[(2)] = null);

(statearr_44236_45205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (9))){
var inst_44187 = (state_44223[(8)]);
var inst_44201 = cljs.core.vec(inst_44187);
var state_44223__$1 = state_44223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44223__$1,(11),out,inst_44201);
} else {
if((state_val_44224 === (5))){
var inst_44188 = (state_44223[(7)]);
var inst_44191 = (state_44223[(9)]);
var inst_44187 = (state_44223[(8)]);
var inst_44196 = (state_44223[(11)]);
var inst_44195 = (inst_44187[inst_44188] = inst_44191);
var inst_44196__$1 = (inst_44188 + (1));
var inst_44197 = (inst_44196__$1 < n);
var state_44223__$1 = (function (){var statearr_44237 = state_44223;
(statearr_44237[(11)] = inst_44196__$1);

(statearr_44237[(12)] = inst_44195);

return statearr_44237;
})();
if(cljs.core.truth_(inst_44197)){
var statearr_44238_45209 = state_44223__$1;
(statearr_44238_45209[(1)] = (8));

} else {
var statearr_44239_45212 = state_44223__$1;
(statearr_44239_45212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (14))){
var inst_44216 = (state_44223[(2)]);
var inst_44217 = cljs.core.async.close_BANG_(out);
var state_44223__$1 = (function (){var statearr_44241 = state_44223;
(statearr_44241[(13)] = inst_44216);

return statearr_44241;
})();
var statearr_44242_45214 = state_44223__$1;
(statearr_44242_45214[(2)] = inst_44217);

(statearr_44242_45214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (10))){
var inst_44207 = (state_44223[(2)]);
var state_44223__$1 = state_44223;
var statearr_44243_45219 = state_44223__$1;
(statearr_44243_45219[(2)] = inst_44207);

(statearr_44243_45219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44224 === (8))){
var inst_44187 = (state_44223[(8)]);
var inst_44196 = (state_44223[(11)]);
var tmp44240 = inst_44187;
var inst_44187__$1 = tmp44240;
var inst_44188 = inst_44196;
var state_44223__$1 = (function (){var statearr_44244 = state_44223;
(statearr_44244[(7)] = inst_44188);

(statearr_44244[(8)] = inst_44187__$1);

return statearr_44244;
})();
var statearr_44245_45231 = state_44223__$1;
(statearr_44245_45231[(2)] = null);

(statearr_44245_45231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_44246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44246[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_44246[(1)] = (1));

return statearr_44246;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_44223){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44223);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44247){var ex__42014__auto__ = e44247;
var statearr_44248_45241 = state_44223;
(statearr_44248_45241[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44223[(4)]))){
var statearr_44249_45246 = state_44223;
(statearr_44249_45246[(1)] = cljs.core.first((state_44223[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45250 = state_44223;
state_44223 = G__45250;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_44223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_44223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44250 = f__42137__auto__();
(statearr_44250[(6)] = c__42136__auto___45181);

return statearr_44250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44252 = arguments.length;
switch (G__44252) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42136__auto___45273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42137__auto__ = (function (){var switch__42010__auto__ = (function (state_44294){
var state_val_44295 = (state_44294[(1)]);
if((state_val_44295 === (7))){
var inst_44290 = (state_44294[(2)]);
var state_44294__$1 = state_44294;
var statearr_44296_45274 = state_44294__$1;
(statearr_44296_45274[(2)] = inst_44290);

(statearr_44296_45274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (1))){
var inst_44253 = [];
var inst_44254 = inst_44253;
var inst_44255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44294__$1 = (function (){var statearr_44297 = state_44294;
(statearr_44297[(7)] = inst_44255);

(statearr_44297[(8)] = inst_44254);

return statearr_44297;
})();
var statearr_44298_45276 = state_44294__$1;
(statearr_44298_45276[(2)] = null);

(statearr_44298_45276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (4))){
var inst_44258 = (state_44294[(9)]);
var inst_44258__$1 = (state_44294[(2)]);
var inst_44259 = (inst_44258__$1 == null);
var inst_44260 = cljs.core.not(inst_44259);
var state_44294__$1 = (function (){var statearr_44299 = state_44294;
(statearr_44299[(9)] = inst_44258__$1);

return statearr_44299;
})();
if(inst_44260){
var statearr_44300_45277 = state_44294__$1;
(statearr_44300_45277[(1)] = (5));

} else {
var statearr_44301_45278 = state_44294__$1;
(statearr_44301_45278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (15))){
var inst_44284 = (state_44294[(2)]);
var state_44294__$1 = state_44294;
var statearr_44302_45279 = state_44294__$1;
(statearr_44302_45279[(2)] = inst_44284);

(statearr_44302_45279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (13))){
var state_44294__$1 = state_44294;
var statearr_44303_45280 = state_44294__$1;
(statearr_44303_45280[(2)] = null);

(statearr_44303_45280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (6))){
var inst_44254 = (state_44294[(8)]);
var inst_44279 = inst_44254.length;
var inst_44280 = (inst_44279 > (0));
var state_44294__$1 = state_44294;
if(cljs.core.truth_(inst_44280)){
var statearr_44304_45281 = state_44294__$1;
(statearr_44304_45281[(1)] = (12));

} else {
var statearr_44305_45282 = state_44294__$1;
(statearr_44305_45282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (3))){
var inst_44292 = (state_44294[(2)]);
var state_44294__$1 = state_44294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44294__$1,inst_44292);
} else {
if((state_val_44295 === (12))){
var inst_44254 = (state_44294[(8)]);
var inst_44282 = cljs.core.vec(inst_44254);
var state_44294__$1 = state_44294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44294__$1,(15),out,inst_44282);
} else {
if((state_val_44295 === (2))){
var state_44294__$1 = state_44294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44294__$1,(4),ch);
} else {
if((state_val_44295 === (11))){
var inst_44262 = (state_44294[(10)]);
var inst_44258 = (state_44294[(9)]);
var inst_44272 = (state_44294[(2)]);
var inst_44273 = [];
var inst_44274 = inst_44273.push(inst_44258);
var inst_44254 = inst_44273;
var inst_44255 = inst_44262;
var state_44294__$1 = (function (){var statearr_44306 = state_44294;
(statearr_44306[(7)] = inst_44255);

(statearr_44306[(11)] = inst_44274);

(statearr_44306[(12)] = inst_44272);

(statearr_44306[(8)] = inst_44254);

return statearr_44306;
})();
var statearr_44307_45295 = state_44294__$1;
(statearr_44307_45295[(2)] = null);

(statearr_44307_45295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (9))){
var inst_44254 = (state_44294[(8)]);
var inst_44270 = cljs.core.vec(inst_44254);
var state_44294__$1 = state_44294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44294__$1,(11),out,inst_44270);
} else {
if((state_val_44295 === (5))){
var inst_44255 = (state_44294[(7)]);
var inst_44262 = (state_44294[(10)]);
var inst_44258 = (state_44294[(9)]);
var inst_44262__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44258) : f.call(null,inst_44258));
var inst_44263 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44262__$1,inst_44255);
var inst_44264 = cljs.core.keyword_identical_QMARK_(inst_44255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44265 = ((inst_44263) || (inst_44264));
var state_44294__$1 = (function (){var statearr_44308 = state_44294;
(statearr_44308[(10)] = inst_44262__$1);

return statearr_44308;
})();
if(cljs.core.truth_(inst_44265)){
var statearr_44309_45297 = state_44294__$1;
(statearr_44309_45297[(1)] = (8));

} else {
var statearr_44310_45298 = state_44294__$1;
(statearr_44310_45298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (14))){
var inst_44287 = (state_44294[(2)]);
var inst_44288 = cljs.core.async.close_BANG_(out);
var state_44294__$1 = (function (){var statearr_44312 = state_44294;
(statearr_44312[(13)] = inst_44287);

return statearr_44312;
})();
var statearr_44313_45301 = state_44294__$1;
(statearr_44313_45301[(2)] = inst_44288);

(statearr_44313_45301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (10))){
var inst_44277 = (state_44294[(2)]);
var state_44294__$1 = state_44294;
var statearr_44314_45303 = state_44294__$1;
(statearr_44314_45303[(2)] = inst_44277);

(statearr_44314_45303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44295 === (8))){
var inst_44254 = (state_44294[(8)]);
var inst_44262 = (state_44294[(10)]);
var inst_44258 = (state_44294[(9)]);
var inst_44267 = inst_44254.push(inst_44258);
var tmp44311 = inst_44254;
var inst_44254__$1 = tmp44311;
var inst_44255 = inst_44262;
var state_44294__$1 = (function (){var statearr_44315 = state_44294;
(statearr_44315[(7)] = inst_44255);

(statearr_44315[(14)] = inst_44267);

(statearr_44315[(8)] = inst_44254__$1);

return statearr_44315;
})();
var statearr_44316_45305 = state_44294__$1;
(statearr_44316_45305[(2)] = null);

(statearr_44316_45305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42011__auto__ = null;
var cljs$core$async$state_machine__42011__auto____0 = (function (){
var statearr_44317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44317[(0)] = cljs$core$async$state_machine__42011__auto__);

(statearr_44317[(1)] = (1));

return statearr_44317;
});
var cljs$core$async$state_machine__42011__auto____1 = (function (state_44294){
while(true){
var ret_value__42012__auto__ = (function (){try{while(true){
var result__42013__auto__ = switch__42010__auto__(state_44294);
if(cljs.core.keyword_identical_QMARK_(result__42013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42013__auto__;
}
break;
}
}catch (e44318){var ex__42014__auto__ = e44318;
var statearr_44319_45306 = state_44294;
(statearr_44319_45306[(2)] = ex__42014__auto__);


if(cljs.core.seq((state_44294[(4)]))){
var statearr_44320_45307 = state_44294;
(statearr_44320_45307[(1)] = cljs.core.first((state_44294[(4)])));

} else {
throw ex__42014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45308 = state_44294;
state_44294 = G__45308;
continue;
} else {
return ret_value__42012__auto__;
}
break;
}
});
cljs$core$async$state_machine__42011__auto__ = function(state_44294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42011__auto____1.call(this,state_44294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42011__auto____0;
cljs$core$async$state_machine__42011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42011__auto____1;
return cljs$core$async$state_machine__42011__auto__;
})()
})();
var state__42138__auto__ = (function (){var statearr_44321 = f__42137__auto__();
(statearr_44321[(6)] = c__42136__auto___45273);

return statearr_44321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42138__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
