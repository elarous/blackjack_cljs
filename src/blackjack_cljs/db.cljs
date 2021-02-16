(ns blackjack-cljs.db
  (:require [cljs.core :refer [PersistentQueue]]))

(defn queue
  ([] (.-EMPTY PersistentQueue))
  ([coll]
   (reduce conj (.-EMPTY PersistentQueue)  coll)))

(def app-db
  {:wins      10
   :losses    3
   :has-won?  false
   :has-lost? true
   :draw?     false
   :cards     (-> (for [type [:hearts :clubs :diamonds :spades]
                        number [\A 2 3 4 5 6 7 8 9 10 \J \Q \K]]
                    (hash-map :type type :number number :face-down? false))
                  shuffle
                  queue)
   :round     5
   :player    [{:kind :hearts :number 3 :face-down? false} {:kind :spades :number 5 :face-down? false}]
   :dealer    [{:kind :diamonds :number \K :face-down? false} {:kind :hearts :number \A :face-down? true}]})

