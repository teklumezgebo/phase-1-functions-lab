// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
   return Math.abs(blocks - 42) 
}

function distanceFromHqInFeet(feet) {
    return Math.abs(feet - 42) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
   let fare =  Math.abs((destination - start) * 264)
   if (fare <= 400) {
    return 0
   }
   else if  (fare > 400 && fare <= 2000) {
    return (fare - 400) * 0.02
   }
   else if (fare > 2000 && fare < 2500) {
    return 25
   }
   else if (fare > 2500) {
    return 'cannot travel that far'
   }
}