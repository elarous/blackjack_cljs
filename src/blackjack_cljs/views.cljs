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

(defn game-column []
  [:div])

(defn stats-column []
  [:div
   [:div {:class (<class stl/round-card)}
    [:div {:class (<class stl/round-lbl)} "Round"]
    [:div {:class (<class stl/round-num)} 1223]]
   [:div {:class (<class stl/stats-card)}
    [:div {:class (<class stl/stats-card-item)}
     [:div {:class (<class stl/stats-card-lbl)} "Wins"]
     [:div {:class (<class stl/stats-card-wins)} "1000"]]
    [:div {:class (<class stl/stats-card-item)}
     [:div {:class (<class stl/stats-card-lbl)} "Losses"]
     [:div {:class (<class stl/stats-card-losses)} "0"]]]])

(defn container [& columns]
  [:div {:class (<class stl/container)} columns])

(defn page []
  [container
   [deck-column]
   [game-column]
   [stats-column]])