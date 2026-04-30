Hub.Handler.Version = 5; // Released at https://hub.splitscreen.me/ on Thu Feb 01 2024 01:09:48 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "fDmTaAoYKJmiWi3s3";
Hub.Maintainer.Name = "PoundlandBacon";
Hub.Maintainer.Id = "AdiAjSyfZPMvu3a4M";

// JOY MENU/FPS PATCH 01 - CVars only
// Based on your latest working handler; no ProtoInput focus hooks added.
// JOY NO-BLOCK TEST PACK
// Purpose: stop keyboard/mouse blocking and test whether Xbox A/B face-button failure is caused by input locking/message filters.
// Steam Input should stay OFF while testing.

var fpscapanswers = ["60", "50", "45", "40", "30", "0"];
var servanswers = ["No", "Yes"];
var steamanswers = ["No", "Yes"];
Game.AddOption("Limit frames per second to:", "", "fps", fpscapanswers);
Game.AddOption(
  "Automatically Launch Server?",
  "Only use this if the server folder is in the same location as the game folder. Make sure both are installed to the same drive in Steam and you should be fine.",
  "serv",
  servanswers
);
Game.AddOption("Launch the first instance under your Steam account?", "REQUIRES DEDICATED SERVER. Allows you to unlock Steam achievements in the first instance.", "Steam", steamanswers);

Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64", "Pal\\Binaries\\Win64", "Engine\\Binaries\\Win64"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "EOSSDK-Win64-Shipping.dll", "steam_appid.txt", "FOV100.pak", "xinput1_3.dll", "xinput1_4.dll", "xinput9_1_0.dll", "x360ce.ini", "x360ce.exe"];
Game.UseNucleusEnvironment = true;
Game.UseGoldberg = true;
Game.UseNemirtingasEpicEmu = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.GameName = "Palworld";
Game.ExecutableName = "Palworld-Win64-Shipping.exe";
Game.GUID = "Palworld";
Game.SteamID = "1623730";
Game.CreateSteamAppIdByExe = true;
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "Pal\\Binaries\\Win64";
Game.LauncherTitle = "";
Game.Hook.ForceFocusWindowName = "Pal";
Game.HasDynamicWindowTitle = false;
Game.RefreshWindowAfterStart = true;
Game.SetForegroundWindowElsewhere = true;
Game.ToggleUnfocusOnInputsLock = false; // JOY NO-BLOCK TEST: do not toggle focus/input lock
// CONTROLLER FIX: let ProtoInput handle XInput routing.
// Do not mix the old Nucleus XInput hook with ProtoInput XInput.
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
// Keep XInputPlus disabled for this fix.
// Game.XInputPlusDll = ["xinput1_4.dll", "xinput9_1_0.dll"];
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.MultipleProtoControllers = false; // JOY AUTO-ROUTE TEST
Game.UserProfileSavePath = "AppData\\Local\\Pal\\Saved\\SaveGames";
Game.UserProfileConfigPath = "AppData\\Local\\Pal\\Saved\\Config\\Windows";
Game.UserProfileSavePathNoCopy = true;
Game.UserProfileConfigPathNoCopy = false;
Game.Description =
  'READ ALL OF THESE NOTES!\n \nTHIS HANDLER IS FOR THE STEAM VERSION OF THE GAME!\n \nOnce all instances are in game and connected lock input (default lock shortcut is the END key) for controllers and/or mice/keys to function correctly. Press the lock shortcut again to unlock the input when you have finished playing. Read about the two connection methods below.\n \nINVITE CODE INSTRUCTIONS (NO SERVER NEEDED):\n \nBEFORE LOCKING INPUT: Once all instances have loaded to the menu screen, using the mouse (even for controller instances) start a game on the first instance. \n \nOnce in game go to the menu and on the options page press the button to copy the invite code. \n \nOn the other instances, again using the mouse, select "Join Multiplayer Game (Invite Code)" and use ctrl+v to paste the invite code in to each instance and connect. \n \nDEDICATED SERVER INSTRUCTIONS:\n \nInstall the server either manually through Steam or by opening this link in your web browser - steam://install/2394010 \n \nTo use the auto launch server option ensure the server is installed to the same drive as the game if you have your library split across multiple drives.\n \nBEFORE LOCKING INPUT: Once all instances have loaded to the menu screen, using the mouse/mice (even for controller instances) select "Join Multiplayer Game" then press the "Connect" button, next to where it says 127.0.0.1:8211, to join the local server. Repeat for each instance. \n \n \nIf you experience crashes try disabling any overlays that might be added by apps like Discord/Geforce Experience/RivaTuner/etc \n \nHandler by Talos91 and PoundlandBacon, support our work here if you can - https://ko-fi.com/talos91';
Game.PauseBetweenProcessGrab = 1;
Game.PauseBetweenStarts = 20;

// OUTDATED OPTIONS, DISABLED TO AVOID CONFLICTS
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = true; // JOY NO-BLOCK TEST: allow normal mouse input
Game.SendNormalKeyboardInput = true; // JOY NO-BLOCK TEST: allow normal keyboard input
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

// REQUIRED FOR MICE/KEYS
Game.SupportsMultipleKeyboardsAndMice = false; // JOY NO-BLOCK TEST: controller-only, no keyboard/mouse isolation

Game.ProtoInput.MessageFilterHook = false; // JOY NO-BLOCK TEST: do not filter keyboard/mouse messages
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = false; // JOY NO-BLOCK TEST: do not clip mouse cursor
Game.ProtoInput.FocusHooks = false;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.FindWindowHook = false;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false; // original handler typo kept for compatibility
Game.ProtoInput.WindowActivateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

// REQUIRED FOR CONTROLLERS
Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false; // JOY NO-BLOCK TEST: never suspend Explorer
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false; // JOY NO-BLOCK TEST: do not freeze external input
Game.LockInputToggleKey = 0x23;

// XInput routing: Controller 1 -> Instance 1, Controller 2 -> Instance 2.
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.MultipleProtoControllers = false; // JOY AUTO-ROUTE TEST

// Keep the old Nucleus controller hooks off while ProtoInput routes controllers.
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;

// Raw input + focus support.
Game.ProtoInput.FocusHooks = false; // JOY NO-BLOCK TEST: avoid focus hooks while testing buttons
Game.ProtoInput.RegisterRawInputHook = false; // JOY NO-BLOCK TEST
Game.ProtoInput.GetRawInputDataHook = false; // JOY NO-BLOCK TEST
Game.ProtoInput.ClipCursorHook = false; // JOY NO-BLOCK TEST: do not clip mouse cursor
Game.ProtoInput.WindowActivateFilter = false; // JOY NO-BLOCK TEST

// Keep both Palworld windows believing they have focus while input is locked.
Game.ProtoInput.EnableFocusMessageLoop = false; // JOY NO-BLOCK TEST
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;

// Block WM_KILLFOCUS so controller input does not die when another window gets focus.
Game.ProtoInput.BlockedMessages = []; // JOY NO-BLOCK TEST: do not block WM_KILLFOCUS

// INPUT LOCK/UNLOCK
// JOY NO-BLOCK TEST: no-op lock/unlock to stop Nucleus from swallowing mouse/keyboard messages.
Game.ProtoInput.OnInputLocked = function() {
  // Intentionally empty.
};

Game.ProtoInput.OnInputUnlocked = function() {
  // Intentionally empty.
};

Game.KillProcessesOnClose = ["PalServer", "PalServer-Win64-Test-Cmd"];

Game.Play = function() {
  // JOY AUTO-ROUTE TEST:
  // Do not manually set ProtoController1/2/3/4. Let ProtoInput route each selected Xbox controller automatically.
  if (Context.PlayerID == 0) {
    Game.ProtoInput.MultipleProtoControllers = false;
  }

  Context.StartArguments = "-windowed -AlwaysFocus -nosplash" + " -ResX=" + Context.Width + " -ResY=" + Context.Height;

  var steam = Context.Options["Steam"];
  var fps = Context.Options["fps"];
  var serv = Context.Options["serv"];

  if (System.IO.File.Exists(Context.EnvironmentPlayer + "\\AppData\\Local\\Pal\\Saved\\Config\\Windows\\GameUserSettings.ini")) {
    var VideoConfig = Context.EnvironmentPlayer + "\\AppData\\Local\\Pal\\Saved\\Config\\Windows\\GameUserSettings.ini";
    Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeX", Context.Width),
      new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeY", Context.Height),
      new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "FrameRateLimit", fps),
      new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "bUseVSync", "True"),
      new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "FullscreenMode", "2")
    ]);

    if (Context.AspectRatioDecimal > 1.8) {
      var ARConfig = Context.EnvironmentPlayer + "\\AppData\\Local\\Pal\\Saved\\Config\\Windows\\engine.ini";
      Context.ModifySaveFile(ARConfig, ARConfig, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("/script/engine.localplayer", "AspectRatioAxisConstraint", "AspectRatio_MaintainYFOV")]);
    } else {
      var ARConfig = Context.EnvironmentPlayer + "\\AppData\\Local\\Pal\\Saved\\Config\\Windows\\engine.ini";
      Context.ModifySaveFile(ARConfig, ARConfig, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("/script/engine.localplayer", "AspectRatioAxisConstraint", "AspectRatio_MaintainXFOV")]);
    }

    // JOY MENU/FPS PATCH:
    // Do not fake-focus windows with ProtoInput; menus in Unreal/Slate can require focus-like gamepad UI handling.
    // These CVars try to keep UI/gamepad menus alive while background windows remain unfocused.
    var EngineConfig = Context.EnvironmentPlayer + "\\AppData\\Local\\Pal\\Saved\\Config\\Windows\\Engine.ini";
    Context.ModifySaveFile(EngineConfig, EngineConfig, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("SystemSettings", "t.IdleWhenNotForeground", "0"),
      new Nucleus.IniSaveInfo("SystemSettings", "Slate.bAllowThrottling", "0"),
      new Nucleus.IniSaveInfo("SystemSettings", "Slate.RequireFocusForGamepadInput", "0")
    ]);
  }

  if (Context.PlayerID == 0 && serv == "Yes") {
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat";
    var lines = ['cd /D "' + Context.RootInstallFolder + '"', "cd ..", "cd ..", "cd ..", "cd ..", 'start "" /B "PalServer\\PalServer.exe"'];
    Context.WriteTextFile(Bat, lines);

    Context.RunAdditionalFiles([Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat"], false, 1);
  }

  if (Context.PlayerID == 0 && steam == "Yes") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_api64.dll");
    var savePkgOrigin = System.IO.Path.Combine(Context.OrigRootFolder, "Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_api64.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\Win64\\EOSSDK-Win64-Shipping.dll");
    var savePkgOrigin = System.IO.Path.Combine(Context.OrigRootFolder, "Engine\\Binaries\\Win64\\EOSSDK-Win64-Shipping.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
};
