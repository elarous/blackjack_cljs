(ns blackjack-cljs.views
  (:require [re-frame.core :as rf]
            [herb.core :refer [<class join]]
            [clojure.string :as s]
            [blackjack-cljs.styles :as stl]))

(defn deck-column []
  [:div
   [:div {:class (<class stl/deck)}
    [:img {:src   "imgs/cards/1B.svg"
           :class (<class stl/deck-card 0 true)}]
    [:img {:src   "imgs/cards/1B.svg"
           :class (<class stl/deck-card 10 false)}]]])

(defn stats-row []
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

(defn dealer []
  [:div {:class (<class stl/contender false)}
   [:div {:class (<class stl/avatar)}
    [:img {:src (str "imgs/dealer.svg")}]]
   [:div {:class (<class stl/contender-name)} "Dealer"]])

(defn player-actions-row []
  [:div
   [:button {:class (join (<class stl/button) (<class stl/button-hit))} "Hit"]
   [:button {:class (join (<class stl/button) (<class stl/button-stand))} "Stand"]])

(defn player []
  [:div {:class (<class stl/player-row)}
   [:div {:class (<class stl/contender true)}
    [:div {:class (<class stl/avatar)}
     [:img {:class (<class stl/player-avatar-img)
            :src   (str "imgs/player.svg")}]]
    [:div {:class (<class stl/contender-name)} "Player"]]])

(defn card [{:keys [kind number]}]
  (let [img-name (str number (-> kind name first s/upper-case))]
    [:div {:class (<class stl/card-container)}
     [:img {:class (<class stl/card)
            :src (str "imgs/cards/" img-name ".svg")}]]))

(defn cards []
  [:div {:class (<class stl/cards)}
   [card {:kind :hearts :number 2}]
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
   [player {:name "player"}]
   ])

(defn page []
  [container
   [stats-row]
   [game-row]
   [player-actions-row]])
