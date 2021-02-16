(ns blackjack-cljs.views
  (:require [re-frame.core :as rf]
            [herb.core :refer [<class join]]
            [clojure.string :as s]
            [blackjack-cljs.styles :as stl]
            [blackjack-cljs.subs]
            [blackjack-cljs.events]))

(defn heading-row []
  (let [round @(rf/subscribe [:round])]
    [:div {:class (<class stl/heading-row)}
     (str "Round " round)]))

(defn dealer []
  (let [score @(rf/subscribe [:score :dealer])]
    [:div {:class (<class stl/contender false)}
     [:div {:class (<class stl/stats-losses)} score]
     [:div {:class (<class stl/avatar)}
      [:img {:src (str "imgs/dealer.svg")}]]
     [:div {:class (<class stl/contender-name)} "Dealer"]]))

(defn player []
  (let [score @(rf/subscribe [:score :player])]
    [:div {:class (<class stl/contender true)}
     [:div {:class (<class stl/stats-wins)} score]
     [:div {:class (<class stl/avatar)}
      [:img {:class (<class stl/player-avatar-img)
             :src   (str "imgs/player.svg")}]]
     [:div {:class (<class stl/contender-name)} "Player"]]))

(defn card [{:keys [path face-down?]}]
  [:div {:class (<class stl/card-container)}
   [:img {:class (<class stl/card)
          :src path}]])

(defn cards [{:keys [contender]}]
  (let [cards-data @(rf/subscribe [:cards contender])]
    [:div {:class (<class stl/cards)}
     (for [card-data cards-data]
       [card card-data])]))

(defn container [& columns]
  [:div {:class (<class stl/container)} columns])

(defn new-round []
  [:button {:class (join (<class stl/button) (<class stl/button-new-round))}
   "Next Round"])

(defn win []
  [:div {:class (<class stl/win)}
   "You Won!"
   [new-round]])

(defn loss []
  [:div {:class (<class stl/loss)}
   "You Lost!"
   [new-round]])

(defn draw []
  [:div {:class (<class stl/draw)}
   "It's a Draw!"
   [new-round]])

(defn player-actions []
  [:div {:class (<class stl/player-actions)}
   [:button {:class (join (<class stl/button) (<class stl/button-hit))} "Hit"]
   [:button {:class (join (<class stl/button) (<class stl/button-stand))} "Stand"]])

(defn player-actions-row []
  (let [won? @(rf/subscribe [:won?])
        lost? @(rf/subscribe [:lost?])
        draw? @(rf/subscribe [:draw?])]
    (cond
      won? [win]
      lost? [loss]
      draw? [draw]
      :else [player-actions])))

(defn game-row []
  [:div {:class (<class stl/game-row)}
   [dealer {:name "dealer"}]
   [cards {:contender :dealer}]
   [:div]
   [:div]
   [cards {:contender :player}]
   [player {:name "player"}]])

(defn page []
  [container
   [heading-row]
   [game-row]
   [player-actions-row]])

