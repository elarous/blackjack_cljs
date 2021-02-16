(ns blackjack-cljs.db
  (:require [cljs.core :refer [PersistentQueue]]))

(defn queue
  ([] (.-EMPTY PersistentQueue))
  ([coll]
   (reduce conj (.-EMPTY PersistentQueue)  coll)))

(def app-db
  {:wins      0
   :losses    0
   :has-won?  false
   :has-lost? false
   :draw?     false
   :cards     (-> (for [type [:hearts :clubs :diamonds :spades]
                        number [\A 2 3 4 5 6 7 8 9 10 \J \Q \K]]
                    (hash-map :type type :number number :face-down? false))
                  shuffle
                  queue)
   :round     0
   :player    []
   :dealer    []})

