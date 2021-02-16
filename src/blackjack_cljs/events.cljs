(ns blackjack-cljs.events
  (:require [re-frame.core :as rf]
            [blackjack-cljs.db :refer [app-db]]
            [blackjack-cljs.game :as game]))

(rf/reg-event-db
 :>initialize-db
 (fn [_ _]
   app-db))

(rf/reg-event-db
 :>play-round
 (fn [db _]
   (-> db
       (game/new-round)
       (game/initial-deal))))

(rf/reg-event-db
 :>initial-deal
 (fn [db _]
   (game/initial-deal db)))

(rf/reg-event-db
 :>stand
 (fn [db _]
   (-> (game/face-up-cards db :dealer)
       (game/dealer-check))))

(rf/reg-event-db
 :>hit
 (fn [db _]
   (-> (game/hit db :player)
       (game/lose-if-bust))))


