(ns blackjack-cljs.styles)

(defn container []
  {:display "flex"})

(defn deck []
  {:position "relative"})


(defn deck-card [left shadow]
  {:left       (str left "px")
   :box-shadow (if shadow "4px 4px 8px rgba(0,0,0,1)" "none")
   :border-radius "15px"
   :border "1px solid black"
   :position   "absolute"})

