# Run Chocolatey script
cinst -y $( ( [xml]( Invoke-WebRequest -Uri https://www.missionbit.com/laptop/windows/mb.config -UseBasicParsing) ).packages.package | Select id ).id
# Download Meraki agent installer
#(New-Object System.Net.WebClient).DownloadFile("https://www.missionbit.com/laptop/windows/meraki-agent-missionbit.1.0.nupkg", "C:\Windows\Temp\archive.zip")
(New-Object System.Net.WebClient).DownloadFile("https://www.missionbit.com/laptop/windows/meraki-agent-missionbit.1.0.nupkg")
# Install Meraki agent
cinst meraki-agent-missionbit -s .