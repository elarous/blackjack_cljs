(ns blackjack-cljs.events
  (:require [re-frame.core :as rf]
            [blackjack-cljs.db :refer [app-db]]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   app-db))

