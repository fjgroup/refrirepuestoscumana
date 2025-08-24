# PowerShell helper to set up AUTOMATIC1111 WebUI in CPU-only mode on Windows
# Usage (run in PowerShell as regular user):
#   Set-Location -Path $PWD  # anywhere
#   powershell -ExecutionPolicy Bypass -File scripts/a1111_setup.ps1

$ErrorActionPreference = 'Stop'

$root = "C:\sd"
$repo = Join-Path $root 'stable-diffusion-webui'

Write-Host "==> Target directory: $repo"
if (!(Test-Path $root)) { New-Item -ItemType Directory -Path $root | Out-Null }

# Check dependencies
function Check-Cmd($cmd) {
  $null = & cmd /c "$cmd --version" 2>$null
  return $LASTEXITCODE -eq 0
}

if (-not (Check-Cmd git)) {
  Write-Host "Git not found. Please install Git for Windows from https://git-scm.com/download/win and re-run." -ForegroundColor Yellow
  exit 1
}

# Clone if missing
if (!(Test-Path $repo)) {
  Write-Host "==> Cloning AUTOMATIC1111 WebUI..."
  git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git $repo
} else {
  Write-Host "==> Repo already exists, skipping clone"
}

# Configure CPU-only flags
$bat = Join-Path $repo 'webui-user.bat'
if (!(Test-Path $bat)) { New-Item -ItemType File -Path $bat | Out-Null }
$flags = "--skip-torch-cuda-test --use-cpu all --no-half --no-half-vae --xformers"
(Get-Content $bat) | Where-Object {$_ -notmatch '^set COMMANDLINE_ARGS='} | Set-Content $bat
Add-Content $bat "set COMMANDLINE_ARGS=$flags"

Write-Host "==> Wrote CPU-only flags to $bat"
Write-Host "==> NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1) Install Python 3.10.x (64-bit) from https://www.python.org/downloads/release/python-31011/ and check 'Add to PATH'"
Write-Host "2) Run: $bat  (first run installs dependencies; then open the local URL it prints)"
Write-Host "3) Download a SD 1.5 photo-realistic model (Deliberate/Realistic Vision) and place it in:`n   $repo\\models\\Stable-diffusion\\"
Write-Host "4) Use prompts from scripts/prompts/ in this repo and follow the README instructions."

