(() => {
  let app = new PIXI.Application(800, 600, {backgroundColor : 0x000000});
  let c = new Charm(PIXI);
  document.body.appendChild(app.view);

  // Set options for pixi canvas
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);

  // Create sprites
  const seaportBG = PIXI.Sprite.fromImage('../images/seaport.png'),
  redTruck = PIXI.Sprite.fromImage('../images/red-truck.png'),
  greenTruck = PIXI.Sprite.fromImage('../images/green-truck.png'),
  blueTruck = PIXI.Sprite.fromImage('../images/blue-truck.png'),
  orangeTruck = PIXI.Sprite.fromImage('../images/orange-truck.png');

  let portItems = new PIXI.Container();
  portItems.addChild(seaportBG);
  portItems.addChild(redTruck);
  portItems.addChild(greenTruck);
  portItems.addChild(blueTruck);
  portItems.addChild(orangeTruck);

  // Set sprite default positions and scaling
  seaportBG.position.set(0,0);
  seaportBG.scale.x = 0.40;
  seaportBG.scale.y = 0.40;
  redTruck.position.set(1310,720);
  redTruck.scale.x = 0.3;
  redTruck.scale.y = 0.3;
  greenTruck.scale.x = 0.3;
  greenTruck.scale.y = 0.3;
  blueTruck.scale.x = 0.3;
  blueTruck.scale.y = 0.3;
  orangeTruck.position.set(1310,640);
  orangeTruck.scale.x = 0.3;
  orangeTruck.scale.y = 0.3;

  // Add all sprites to the pixi canvas
  app.stage.addChild(portItems);

  // Sprite waypoints
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

  app.ticker.add(function(delta) {
    c.update();
  });

  // Initiate sprite movement paths and timing
  setTimeout(() => {
    c.walkPath(
      redTruck,       //The sprite
      wayPoints.rtWaypoints,       //The array of waypoints
      3400,             //Total duration, in frames
      "smoothstep",    //Easing type
      false,            //Should the path loop?
      false,            //Should the path reverse?
      2500             //Delay in milliseconds between segments
    );
  }, 3000);
  c.walkPath(
    greenTruck,
    wayPoints.gnWaypoints,
    4000,
    "smoothstep",
    false,
    false,
    200
  );
  c.walkPath(
    blueTruck,
    wayPoints.blWaypoints,
    3500,
    "smoothstep",
    false,
    false,
    500
  );
  setTimeout(() => {
    c.walkPath(
      orangeTruck,
      wayPoints.orWaypoints,
      4000,
      "smoothstep",
      false,
      false,
      200
    );
  }, 44000);
})()
