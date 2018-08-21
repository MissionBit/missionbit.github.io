:: This batch file installs Chocolatey
ECHO OFF
:: Install Chocolatey
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
:: Run PowerShell script as administrator
::powershell -NoProfile -ExecutionPolicy Bypass -Command "&{ start-process powershell -ArgumentList '-noprofile -file C:\script\psfile.ps1' -verb RunAs}"
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://www.missionbit.com/laptop/windows/sw.ps1'))"