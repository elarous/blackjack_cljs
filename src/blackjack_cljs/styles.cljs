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
   :grid-template-rows "20% 60% 20%"
   :height                "100%"})

(defn game-row []
  {:display         "grid"
   :grid-template-rows "50% 50%"
   :grid-template-columns "20% 60% 20%"
   :justify-items "center"
   :padding-top     (sizes 2)
   :padding-bottom  (sizes 2)})

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

(defn contender [end?]
  {:display        "flex"
   :flex-direction "column"
   :align-items    (if end? "flex-end" "flex-start")})

(defn avatar []
  {:display         "flex"
   :justify-content "center"
   :align-items     "center"
   :height          (sizes 15)
   :width           (sizes 15)
   :border          (str "3px solid " (:grey-lighter colors))
   :border-radius   "50%"
   :padding         (sizes 2)})

(defn player-avatar-img []
  {:height (sizes 14)})

(defn player-row []
  {:display         "flex"
   :justify-content "space-between"
   :align-items     "center"})

(defn contender-name []
  {:font-family "Indie Flower"
   :color       (:primary-text colors)
   :font-size   (sizes 2)
   :margin      (str "0 " (sizes 7))})

(defn card-container []
  {:margin (sizes 1)})

(defn card []
  {:height (sizes 25)})

(defn cards []
  {:display "flex"})

(defn button []
  ^{:pseudo {:hover {:background-position "right center"
                     :color               "#fff"
                     :text-decoration     "none"}}}
  {:padding         (str (sizes 2) " 0")
   :width (sizes 30)
   :margin          (sizes 1)
   :font-family     "Indie Flower"
   :font-size       (sizes 3)
   :border          "none"
   :border-radius   (sizes 1)
   ;:padding          "15px 45px"
   :text-align      "center"
   ;:text-transform   "uppercase"
   :transition      "0.5s"
   :background-size "200% auto"
   :color           "white"
   :box-shadow      "0 0 20px #eee"
   :display         "block"
   :outline         "none"})

(defn button-hit []
  {:background-image "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)"})

(defn button-stand []
  {:background-image "linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)"})
