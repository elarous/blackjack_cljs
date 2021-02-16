(ns blackjack-cljs.core
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [blackjack-cljs.views :refer [page]]))


;; -------------------------
;; Initialize app
(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (rdom/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:>initialize-db])
  (rf/dispatch-sync [:>play-round])
  (mount-components))
