(ns blackjack-cljs.views
  (:require [re-frame.core :as rf]
            [herb.core :refer [<class join]]
            [clojure.string :as s]
            [blackjack-cljs.styles :as stl]))

(defn heading-row []
  [:div {:class (<class stl/heading-row)} "Round 1"])

(defn dealer []
  [:div {:class (<class stl/contender false)}
   [:div {:class (<class stl/stats-losses)} "0"]
   [:div {:class (<class stl/avatar)}
    [:img {:src (str "imgs/dealer.svg")}]]
   [:div {:class (<class stl/contender-name)} "Dealer"]])

(defn player-actions-row []
  [:div {:class (<class stl/player-actions)}
   [:button {:class (join (<class stl/button) (<class stl/button-hit))} "Hit"]
   [:button {:class (join (<class stl/button) (<class stl/button-stand))} "Stand"]])

(defn player []
  [:div {:class (<class stl/contender true)}
   [:div {:class (<class stl/stats-wins)} "0"]
   [:div {:class (<class stl/avatar)}
    [:img {:class (<class stl/player-avatar-img)
           :src   (str "imgs/player.svg")}]]
   [:div {:class (<class stl/contender-name)} "Player"]])

(defn card [{:keys [kind number]}]
  (let [img-name (str number (-> kind name first s/upper-case))]
    [:div {:class (<class stl/card-container)}
     [:img {:class (<class stl/card)
            :src (str "imgs/cards/" img-name ".svg")}]]))

(defn cards []
  [:div {:class (<class stl/cards)}
   [card {:kind :hearts :number 4}]
   [card {:kind :spades :number \Q}]
   [card {:kind :diamonds :number 6}]])

(defn container [& columns]
  [:div {:class (<class stl/container)} columns])

(defn game-row []
  [:div {:class (<class stl/game-row)}
   [dealer {:name "dealer"}]
   [cards]
   [:div]
   [:div]
   [cards]
   [player {:name "player"}]])

(defn page []
  [container
   [heading-row]
   [game-row]
   [player-actions-row]])

