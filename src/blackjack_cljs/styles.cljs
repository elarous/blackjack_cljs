(ns blackjack-cljs.styles)

(def colors
  {:green          "#8FE388"
   :red            "#E26D5A"
   :primary        "#43BCCD"
   :secondary      "#7F7EFF"
   :primary-text   "#2F131E"
   :secondary-text "#240115"
   :grey-lighter   "#F5F5F5"
   :grey-light     "#EEEEEE"})

(defn sizes [num]
  (str (* num 8) "px"))

(defn container []
  {:display               "grid"
   :grid-template-columns "20% 60% 20%"})

(defn deck []
  {:position "relative"})

(defn deck-card [left shadow]
  {:left          (str left "px")
   :box-shadow    (if shadow "4px 4px 8px rgba(0,0,0,1)" "none")
   :border-radius "15px"
   :border        "1px solid black"
   :position      "absolute"})

(defn round-card []
  {:font-family             "Indie Flower"
   :font-size               (sizes 5)
   :background              (:grey-light colors)
   :color                   (:secondary colors)
   :border-top-right-radius (sizes 1)
   :border-top-left-radius  (sizes 1)
   :padding                 (str (sizes 1) " " (sizes 3))
   :display                 "flex"
   :justify-content         "space-between"})

(defn round-lbl []
  {:color (:primary colors)})

(defn round-num []
  {:color (:secondary colors)})



(defn stats-card []
  {:background-color (:grey-lighter colors)
   :padding          (str (sizes 1) " " (sizes 4))
   :border-radius    "5px"
   :font-family      "Indie Flower"})

(defn stats-card-item []
  {:display         "flex"
   :justify-content "space-between"
   :align-items     "center"
   :font-size       (sizes 3)
   :margin          (sizes 1)})

(defn stats-card-lbl []
  {:color (:primary colors)})

(defn stats-card-wins []
  {:color     (:green colors)
   :font-size (sizes 4)})

(defn stats-card-losses []
  {:color     (:red colors)
   :font-size (sizes 4)})
