# Palworld-Handler-Fix
Palworld Nucleus Co-op controller fix

Issue:
Controller 2 was not detected / after changing layout, Player 1 stopped detecting / controller routing broke.

Fix:
Changed the Palworld handler XInput setup.

Tested with:
- Palworld Steam version
- Nucleus Co-op version: 2.4.1
- Windows 11
- Two Xbox controllers
- Steam Input disabled
- Overwolf/TH.GL closed

Replace with current handler by loading with Nucleus.
Notes:
Do not manually place xinput DLLs in the Palworld folder.
Let Nucleus handle the XInput DLL.
