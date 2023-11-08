import {onMessagePublished} from "firebase-functions/v2/pubsub"


export const pubsub = onMessagePublished("topic", (event) => {
  console.log(JSON.stringify(event))
})


