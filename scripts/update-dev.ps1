$ErrorActionPreference = 'Stop'

Set-Location (Split-Path -Parent $PSScriptRoot)

$changes = git status --porcelain
if ($LASTEXITCODE -ne 0) {
    throw 'Could not check the working tree status.'
}

if ($changes) {
    Write-Warning 'Cannot check out and pull while there are uncommitted changes. Please commit or stash your changes, then run this script again.'
    exit 1
}

Write-Host 'Switching to the dev branch...'
git switch dev
if ($LASTEXITCODE -ne 0) {
    throw 'Could not switch to the dev branch.'
}

Write-Host 'Pulling the latest changes from origin/dev...'
git pull --ff-only origin dev
if ($LASTEXITCODE -ne 0) {
    throw 'Could not fast-forward the local dev branch.'
}

Write-Host 'Local dev branch is up to date.'