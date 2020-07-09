// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface, Math as ReactMath } from 'react-360-web';
import { hallnumber } from './components/commonutility';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // const myCylinderSurface = new Surface(
  //   1000,
  //   600,
  //   Surface.SurfaceShape.Cylinder
  // );


  const myFlatSurface = new Surface(
    512, /* width */
    375, /* height */
    Surface.SurfaceShape.Flat   /* shape */
  );
  const myFlatSurfacecardexchange = new Surface(
    512, /* width */
    375, /* height */
    Surface.SurfaceShape.Flat   /* shape */
  );

  myFlatSurface.setAngle(
    0, /* yaw angle */
    0,//Math.PI/12, /* pitch angle */
    0 /* roll angle */
  );


  r360.renderToSurface(
    r360.createRoot('UIscreen', {}),
    myFlatSurface
  );

  r360.renderToSurface(
    r360.createRoot('Cardexchangedonescreen', {}),
    myFlatSurfacecardexchange
  );


  const customLocation = new Location([180, -7, -30]);

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, customLocation, myFlatSurface, myFlatSurfacecardexchange)
  );

  r360.renderToLocation(
    r360.createRoot('xporiumthreed'),
    customLocation
  );





  const rightPanel = new Surface(500, 900, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.9, -0.1);

  r360.renderToSurface(
    //r360.createRoot('Infopanel', {"hall_number": hallnumber.hall1}),
    r360.createRoot('Infopanel'),
    rightPanel,
  );

  // Render your app content to the default cylinder surface

  // r360.renderToSurface(
  //   r360.createRoot('WelcomeTo360', {/*initial props */}),
  //   myCylinderSurface
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('outdoor.jpg'));
}

function onMessage(e, r360, customLocation, myFlatSurface, myFlatSurfacecardexchange) {
  console.log(e.data.type)
  if (e.data.type === 'newPosition') {
    customLocation.setWorldPosition(e.data.x, -7, e.data.z);
  }
  if (e.data.type === 'newPic') {
    //const cameraDirection = [0, 0, -1];
    const cameraQuat = r360.getCameraQuaternion();
    //ReactMath.rotateByQuaternion(cameraDirection, cameraQuat);  
    //  const x = cameraDirection[0];
    //  const y = cameraDirection[1];
    //  const z = cameraDirection[2];
    //  const yawAngle = Math.atan2(x, -z);
    //  const pitchAngle = Math.asin(y / Math.sqrt(x*x + y*y + z*z));
    //  myFlatSurface.setAngle(yawAngle, pitchAngle);
    myFlatSurface.recenter(cameraQuat, 'all');

    r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['clickedImage', { thePicture: e.data.pic }]);
  }
  if (e.data.type === 'savecardexchange') {
    const cameraQuat = r360.getCameraQuaternion();
    // console.log("111111111111111111111111")
    // console.log("clientjs", e.data.exhibitor_user_id)
    // console.log("clientjs", e.data.visitor_user_id)
    myFlatSurfacecardexchange.recenter(cameraQuat, 'all');
    r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['exhibitorvisitorcardexchangehandler', { exhibitor_user_id: e.data.exhibitor_user_id, visitor_user_id: e.data.visitor_user_id }]);
  }
  if (e.data.type === 'hall') {
    r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['clickedhallnumber', { hall_number: e.data.hall_number }]);
  }
  if (e.data.type === 'infopanel') {
    r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['clickedshowinfopanel', { show_panel: e.data.show_panel, infodata: e.data.infodata }]);
  }
}

window.React360 = { init };
