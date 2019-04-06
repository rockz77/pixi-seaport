# pixi-seaport

## Description
Animation app that uses pixi.js and charm.js to show truck objects moving along designated paths in a seaport.

Note there are 4 colored trucks that move along specific paths within the seaport pixi canvas. Each truck moves at it's own speed to a specific destination at a certain time. The destination coordinates are contained within an object called "wayPoints", which contain all coordinates in an array. Each wayPoint property value can be replaced with dynamic data coming from an API endpoint via JSON.

```
let wayPoints = {
  rtWaypoints: [
    [1310,720],
    [600,800],
    [100,570],
    [550,440],
    [170,340]
  ],
  gnWaypoints: [
    [440,280],
    [280,330],
    [1310,640]
  ],
  blWaypoints: [
    [1310,440],
    [740,250],
    [920,230]
  ],
  orWaypoints: [
    [1310,640],
    [280,330],
    [440,280]
  ]
}
```

The red and blue trucks initially travel northwest, with starting points southeast. The green truck starts north and then travels southeast to it's final destination. Once it arrives to it's final destination, the orange truck then starts traveling northwest.

Total time of animation of all moving trucks to reach their final destinations is 1:27.

In the project directory, run the following command to start the app on port 3000:

### `npm start`
