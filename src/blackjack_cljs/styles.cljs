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

(def fonts
  {:main "Indie Flower"})

(defn container []
  {:display               "grid"
   :grid-template-rows "20% 60% 20%"
   :height                "100%"
   :margin-left "auto"
   :margin-right "auto"
   :max-width (sizes 200)})

(defn game-row []
  {:display         "grid"
   :grid-template-rows "50% 50%"
   :grid-template-columns "20% 60% 20%"
   :justify-items "center"
   :padding-top     (sizes 2)
   :padding-bottom  (sizes 2)})

(defn heading-row []
  {:font-family (:main fonts)
   :font-size (sizes 5)
   :text-align "center"
   :margin (sizes 2)
   :color (:secondary colors)})

(defn stats-wins []
  {:color     (:green colors)
   :font-size (sizes 4)})

(defn stats-losses []
  {:color     (:red colors)
   :font-size (sizes 4)})

(defn contender [end?]
  {:display        "flex"
   :flex-direction "column"
   :align-items "center"})

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
  {:font-family (:main fonts)
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
   :height (sizes 10)
   :margin          (sizes 1)
   :font-family     (:main fonts)
   :font-size       (sizes 3)
   :border          "none"
   :border-radius   (sizes 1)
   :text-align      "center"
   :transition      "0.5s"
   :background-size "200% auto"
   :color           "white"
   :box-shadow      "0 0 20px #eee"
   :display         "block"
   :outline         "none"})

(defn player-actions []
  {:display "flex"
   :justify-content "center"})

(defn button-hit []
  {:background-image "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)"
   :margin (str "0 " (sizes 5))})

(defn button-stand []
  {:background-image "linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)"
   :margin (str "0 " (sizes 5))})

(defn button-new-round []
  {:background-image "linear-gradient(to right, #642B73 0%, #C6426E  51%, #642B73  100%)"})

(defn end-msg []
  {:font-family (:main fonts)
   :font-size (sizes 5)
   :display "flex"
   :flex-direction "column"
   :justify-content "center"
   :align-items "center"})

(defn win []
  ^{:extend [end-msg]}
  {:color (:green colors)})

(defn loss []
  ^{:extend [end-msg]}
  {:color (:red colors)})

(defn draw []
  ^{:extend [end-msg]}
  {:color (:primary colors)})

(defn hidden-card []
  {:height "200px"
   :width "142px"
   :background-color (:primary colors)
   :border-radius (sizes 1)})

