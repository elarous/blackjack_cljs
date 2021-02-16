(ns blackjack-cljs.subs
  (:require [re-frame.core :as rf]
            [clojure.string :as s]))

(rf/reg-sub
 :cards
 (fn [db [_ contender]]
   (let [card-name (fn [card]
                     (str (:number card) (-> card :type name first s/upper-case)))]
     (map (fn [card]
            {:path (str "imgs/cards/" (card-name card) ".svg")
             :face-down? (:face-down? card)})
          (get db contender)))))

(rf/reg-sub
 :score
 (fn [db [_ contender]]
   (case contender
     :dealer (:losses db)
     :player (:wins db))))

(rf/reg-sub
 :round
 (fn [db _]
   (:round db)))

(rf/reg-sub
 :won?
 (fn [db _]
   (:has-won? db)))

(rf/reg-sub
 :lost?
 (fn [db _]
   (:has-lost? db)))

(rf/reg-sub
 :draw?
 (fn [db _]
   (:draw? db)))


(comment
  @(rf/subscribe [:cards :player])

  @(rf/subscribe [:score :dealer])
  @(rf/subscribe [:round])

  (rf/dispatch [:initialize-db])

  )
