# Define variables
$currentLocation = Get-Location;
$dropletIp = [System.Environment]::GetEnvironmentVariable("BjjDropletIp", [System.EnvironmentVariableTarget]::Machine);
$username = [System.Environment]::GetEnvironmentVariable("BjjDropletUsername", [System.EnvironmentVariableTarget]::Machine);
$localAppPath = (Get-Location).Path;
$destinationAppPathRelative = [System.Environment]::GetEnvironmentVariable("BjjDropletAppPath", [System.EnvironmentVariableTarget]::Machine);
$destinationAppPathAbsolute = "${username}@${dropletIp}:$destinationAppPathRelative";

Write-Host "`n`nRunning ng build command...";

# Build Angular app for production
Set-Location -Path $localAppPath;
ng build --configuration=production;

Write-Host "`n`nBuild is complete, compressing folder for deployment...";
# Prepare deployment files
Set-Location -Path "$localAppPath\dist";
Compress-Archive -Path .\* -DestinationPath appForDeployment.zip;

Write-Host "`n`nCompression is complete, copying file to remote destination...";
# Copy-Item -Path "$localAppPath\dist\appForDeployment.zip" -Destination "$destinationAppPath"

$localZipFilePath = "$localAppPath\dist\appForDeployment.zip";

# Build the scp command
$scpCommand = "scp -i ~/.ssh/id_rsa $localZipFilePath $destinationAppPathAbsolute";

# Execute the scp command
Invoke-Expression -Command $scpCommand;

Write-Host "`n`nZip has been deployed. Running remote commands to deploy...`n`n";

# SSH into droplet and deploy
ssh ${username}@${dropletIp} "
    echo 'Starting remote commands. Removing dist folder...';
    sudo rm -rf $destinationAppPathRelative/dist;
    echo 'Dist removal complete!!! Unzipping file...';
    sudo unzip -o $destinationAppPathRelative/appForDeployment.zip -d $destinationAppPathRelative/dist;
    echo 'Remote unzip complete. Starting JSON Server...';
    cd $destinationAppPathRelative/Scripts;
    ./startjsonserver.sh;";

# Have to put this part in a seperate script
# This is because the last command with nohup json server will stop further commands from processing
ssh ${username}@${dropletIp} "
    echo 'JSON server started. Reloading Nginx...'
    sudo nginx -t && sudo systemctl reload nginx;
    echo 'Nginx reload. Running remote backup script...';
    sudo $destinationAppPathRelative/backupzipdeployment.sh;";

# Clean up local files
Write-Host "`n`nFinished with remote commands. Cleaning up local files...";
Remove-Item -Path ".\appForDeployment.zip";

Set-Location $currentLocation;
Write-Host "`n`n`n---------Deployment completed---------";