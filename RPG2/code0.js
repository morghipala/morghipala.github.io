gdjs.gameCode = {};
gdjs.gameCode.GDPauseButtonObjects1_1final = [];

gdjs.gameCode.GDNewPanelSpriteObjects1= [];
gdjs.gameCode.GDNewPanelSpriteObjects2= [];
gdjs.gameCode.GDNewPanelSpriteObjects3= [];
gdjs.gameCode.GDPlayerObjects1= [];
gdjs.gameCode.GDPlayerObjects2= [];
gdjs.gameCode.GDPlayerObjects3= [];
gdjs.gameCode.GDPauseButtonObjects1= [];
gdjs.gameCode.GDPauseButtonObjects2= [];
gdjs.gameCode.GDPauseButtonObjects3= [];
gdjs.gameCode.GDSettingsButtonObjects1= [];
gdjs.gameCode.GDSettingsButtonObjects2= [];
gdjs.gameCode.GDSettingsButtonObjects3= [];
gdjs.gameCode.GDFullScreenToggleObjects1= [];
gdjs.gameCode.GDFullScreenToggleObjects2= [];
gdjs.gameCode.GDFullScreenToggleObjects3= [];
gdjs.gameCode.GDResumeButtonObjects1= [];
gdjs.gameCode.GDResumeButtonObjects2= [];
gdjs.gameCode.GDResumeButtonObjects3= [];
gdjs.gameCode.GDExitButtonObjects1= [];
gdjs.gameCode.GDExitButtonObjects2= [];
gdjs.gameCode.GDExitButtonObjects3= [];
gdjs.gameCode.GDFullscreenObjects1= [];
gdjs.gameCode.GDFullscreenObjects2= [];
gdjs.gameCode.GDFullscreenObjects3= [];
gdjs.gameCode.GDNewTiledSpriteObjects1= [];
gdjs.gameCode.GDNewTiledSpriteObjects2= [];
gdjs.gameCode.GDNewTiledSpriteObjects3= [];
gdjs.gameCode.GDFlatDarkJoystickObjects1= [];
gdjs.gameCode.GDFlatDarkJoystickObjects2= [];
gdjs.gameCode.GDFlatDarkJoystickObjects3= [];
gdjs.gameCode.GDNewTiledSprite2Objects1= [];
gdjs.gameCode.GDNewTiledSprite2Objects2= [];
gdjs.gameCode.GDNewTiledSprite2Objects3= [];
gdjs.gameCode.GDNewTextObjects1= [];
gdjs.gameCode.GDNewTextObjects2= [];
gdjs.gameCode.GDNewTextObjects3= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPauseButtonObjects2Objects = Hashtable.newFrom({"PauseButton": gdjs.gameCode.GDPauseButtonObjects2});
gdjs.gameCode.asyncCallback9585100 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.gameCode.asyncCallback9585100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPauseButtonObjects2Objects = Hashtable.newFrom({"PauseButton": gdjs.gameCode.GDPauseButtonObjects2});
gdjs.gameCode.asyncCallback11504148 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.gameCode.asyncCallback11504148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDResumeButtonObjects1Objects = Hashtable.newFrom({"ResumeButton": gdjs.gameCode.GDResumeButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.gameCode.GDExitButtonObjects1});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMovementAngleAround(270, 20) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("up");
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk_" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMovementAngleAround(90, 20) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("down");
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk_" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMovementAngleAround(180, 50) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("left");
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk_" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMovementAngleAround(0, 50) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("right");
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk_" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayerObjects1[k] = gdjs.gameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walk_" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].setAnimationFrame(0);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.gameCode.GDPlayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.gameCode.GDNewTiledSprite2Objects1});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.gameCode.GDExitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.gameCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggle"), gdjs.gameCode.GDFullScreenToggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.gameCode.GDFullscreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.gameCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.gameCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResumeButton"), gdjs.gameCode.GDResumeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.gameCode.GDSettingsButtonObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth() * 1.2, gdjs.evtTools.window.getWindowInnerHeight() * 1.2);
}{for(var i = 0, len = gdjs.gameCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewPanelSpriteObjects1[i].getBehavior("Resizable").setWidth(308);
}
}{for(var i = 0, len = gdjs.gameCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewPanelSpriteObjects1[i].getBehavior("Resizable").setHeight(330);
}
}{for(var i = 0, len = gdjs.gameCode.GDResumeButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDResumeButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 120);
}
}{for(var i = 0, len = gdjs.gameCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSettingsButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 44);
}
}{for(var i = 0, len = gdjs.gameCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDExitButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 22);
}
}{for(var i = 0, len = gdjs.gameCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewPanelSpriteObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.gameCode.GDFullScreenToggleObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFullScreenToggleObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 66,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 132);
}
}{for(var i = 0, len = gdjs.gameCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFullscreenObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 44,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 132);
}
}{for(var i = 0, len = gdjs.gameCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewTiledSpriteObjects1[i].setZOrder(-(100));
}
}{for(var i = 0, len = gdjs.gameCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFlatDarkJoystickObjects1[i].setPosition((gdjs.gameCode.GDFlatDarkJoystickObjects1[i].getWidth()) - 22,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.gameCode.GDFlatDarkJoystickObjects1[i].getHeight()) + 22);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggle"), gdjs.gameCode.GDFullScreenToggleObjects1);
{for(var i = 0, len = gdjs.gameCode.GDFullScreenToggleObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFullScreenToggleObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.gameCode.GDPauseButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDPauseButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.gameCode.GDPauseButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPauseButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDPauseButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDPauseButtonObjects1_1final.indexOf(gdjs.gameCode.GDPauseButtonObjects2[j]) === -1 )
            gdjs.gameCode.GDPauseButtonObjects1_1final.push(gdjs.gameCode.GDPauseButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.gameCode.GDPauseButtonObjects1_1final, gdjs.gameCode.GDPauseButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.gameCode.GDPauseButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDPauseButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.gameCode.GDPauseButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPauseButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDPauseButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDPauseButtonObjects1_1final.indexOf(gdjs.gameCode.GDPauseButtonObjects2[j]) === -1 )
            gdjs.gameCode.GDPauseButtonObjects1_1final.push(gdjs.gameCode.GDPauseButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.gameCode.GDPauseButtonObjects1_1final, gdjs.gameCode.GDPauseButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggle"), gdjs.gameCode.GDFullScreenToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDFullScreenToggleObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDFullScreenToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDFullScreenToggleObjects1[k] = gdjs.gameCode.GDFullScreenToggleObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDFullScreenToggleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggle"), gdjs.gameCode.GDFullScreenToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDFullScreenToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDFullScreenToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDFullScreenToggleObjects1[k] = gdjs.gameCode.GDFullScreenToggleObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDFullScreenToggleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Menu");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "ui");
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", true);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "ui");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Menu");
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", false);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResumeButton"), gdjs.gameCode.GDResumeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDResumeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.gameCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDExitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.gameCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.gameCode.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Win");
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.gameCode.GDPlayerObjects1.length = 0;
gdjs.gameCode.GDPlayerObjects2.length = 0;
gdjs.gameCode.GDPlayerObjects3.length = 0;
gdjs.gameCode.GDPauseButtonObjects1.length = 0;
gdjs.gameCode.GDPauseButtonObjects2.length = 0;
gdjs.gameCode.GDPauseButtonObjects3.length = 0;
gdjs.gameCode.GDSettingsButtonObjects1.length = 0;
gdjs.gameCode.GDSettingsButtonObjects2.length = 0;
gdjs.gameCode.GDSettingsButtonObjects3.length = 0;
gdjs.gameCode.GDFullScreenToggleObjects1.length = 0;
gdjs.gameCode.GDFullScreenToggleObjects2.length = 0;
gdjs.gameCode.GDFullScreenToggleObjects3.length = 0;
gdjs.gameCode.GDResumeButtonObjects1.length = 0;
gdjs.gameCode.GDResumeButtonObjects2.length = 0;
gdjs.gameCode.GDResumeButtonObjects3.length = 0;
gdjs.gameCode.GDExitButtonObjects1.length = 0;
gdjs.gameCode.GDExitButtonObjects2.length = 0;
gdjs.gameCode.GDExitButtonObjects3.length = 0;
gdjs.gameCode.GDFullscreenObjects1.length = 0;
gdjs.gameCode.GDFullscreenObjects2.length = 0;
gdjs.gameCode.GDFullscreenObjects3.length = 0;
gdjs.gameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.gameCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.gameCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.gameCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.gameCode.GDNewTextObjects1.length = 0;
gdjs.gameCode.GDNewTextObjects2.length = 0;
gdjs.gameCode.GDNewTextObjects3.length = 0;

gdjs.gameCode.eventsList3(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
