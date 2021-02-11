(ns blackjack-cljs.views
  (:require [re-frame.core :as rf]
            [herb.core :refer [<class]]
            [blackjack-cljs.styles :as stl]))



(defn deck-column []
  [:div
   [:div {:class (<class stl/deck)}
    [:img {:src   "imgs/cards/1B.svg"
           :class (<class stl/deck-card 0 true)}]
    [:img {:src   "imgs/cards/1B.svg"
           :class (<class stl/deck-card 10 false)}]]])


(defn game-column [])

(defn stats-column [])

(defn container [& columns]
  [:div {:class (<class stl/container)} columns])

(defn page []
  [container
   [deck-column]
   [game-column]
   [stats-column]])