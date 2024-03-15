gdjs.WinCode = {};
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.WinCode.GDNewTextObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight());
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

gdjs.WinCode.eventsList0(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
