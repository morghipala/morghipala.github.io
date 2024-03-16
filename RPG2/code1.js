gdjs.WinCode = {};
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDPauseButtonObjects1= [];
gdjs.WinCode.GDPauseButtonObjects2= [];
gdjs.WinCode.GDPlayerCollisionObjects1= [];
gdjs.WinCode.GDPlayerCollisionObjects2= [];
gdjs.WinCode.GDErbaObjects1= [];
gdjs.WinCode.GDErbaObjects2= [];
gdjs.WinCode.GDPlayerObjects1= [];
gdjs.WinCode.GDPlayerObjects2= [];
gdjs.WinCode.GDFlatDarkJoystickObjects1= [];
gdjs.WinCode.GDFlatDarkJoystickObjects2= [];
gdjs.WinCode.GDSettingsButtonObjects1= [];
gdjs.WinCode.GDSettingsButtonObjects2= [];
gdjs.WinCode.GDResumeButtonObjects1= [];
gdjs.WinCode.GDResumeButtonObjects2= [];
gdjs.WinCode.GDExitButtonObjects1= [];
gdjs.WinCode.GDExitButtonObjects2= [];
gdjs.WinCode.GDFullScreenToggleObjects1= [];
gdjs.WinCode.GDFullScreenToggleObjects2= [];
gdjs.WinCode.GDNewPanelSpriteObjects1= [];
gdjs.WinCode.GDNewPanelSpriteObjects2= [];
gdjs.WinCode.GDFullscreenObjects1= [];
gdjs.WinCode.GDFullscreenObjects2= [];
gdjs.WinCode.GDScalaDrittaSinistraObjects1= [];
gdjs.WinCode.GDScalaDrittaSinistraObjects2= [];
gdjs.WinCode.GDScalaDrittaDestraObjects1= [];
gdjs.WinCode.GDScalaDrittaDestraObjects2= [];
gdjs.WinCode.GDMuroH1FrontaleObjects1= [];
gdjs.WinCode.GDMuroH1FrontaleObjects2= [];
gdjs.WinCode.GDPavimentoRialzatoObjects1= [];
gdjs.WinCode.GDPavimentoRialzatoObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.WinCode.GDNewTextObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth() * 1.5, gdjs.evtTools.window.getWindowInnerHeight() * 1.5);
}{for(var i = 0, len = gdjs.WinCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDNewTextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDPauseButtonObjects1.length = 0;
gdjs.WinCode.GDPauseButtonObjects2.length = 0;
gdjs.WinCode.GDPlayerCollisionObjects1.length = 0;
gdjs.WinCode.GDPlayerCollisionObjects2.length = 0;
gdjs.WinCode.GDErbaObjects1.length = 0;
gdjs.WinCode.GDErbaObjects2.length = 0;
gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.WinCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.WinCode.GDSettingsButtonObjects1.length = 0;
gdjs.WinCode.GDSettingsButtonObjects2.length = 0;
gdjs.WinCode.GDResumeButtonObjects1.length = 0;
gdjs.WinCode.GDResumeButtonObjects2.length = 0;
gdjs.WinCode.GDExitButtonObjects1.length = 0;
gdjs.WinCode.GDExitButtonObjects2.length = 0;
gdjs.WinCode.GDFullScreenToggleObjects1.length = 0;
gdjs.WinCode.GDFullScreenToggleObjects2.length = 0;
gdjs.WinCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.WinCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.WinCode.GDFullscreenObjects1.length = 0;
gdjs.WinCode.GDFullscreenObjects2.length = 0;
gdjs.WinCode.GDScalaDrittaSinistraObjects1.length = 0;
gdjs.WinCode.GDScalaDrittaSinistraObjects2.length = 0;
gdjs.WinCode.GDScalaDrittaDestraObjects1.length = 0;
gdjs.WinCode.GDScalaDrittaDestraObjects2.length = 0;
gdjs.WinCode.GDMuroH1FrontaleObjects1.length = 0;
gdjs.WinCode.GDMuroH1FrontaleObjects2.length = 0;
gdjs.WinCode.GDPavimentoRialzatoObjects1.length = 0;
gdjs.WinCode.GDPavimentoRialzatoObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
