import {beforeUserSignedIn} from "firebase-functions/v2/identity"

export const beforesignin = beforeUserSignedIn(async (event) => {
  console.log(" ------------- beforeUserSignedIn --------------- ");
  console.log(`beforesignin: ${JSON.stringify(event.data)}`)
})