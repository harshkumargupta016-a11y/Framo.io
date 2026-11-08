@echo off
title Framo.io Launcher
color 0B

echo ==========================================================
echo                   FRAMO.IO LAUNCHER
echo ==========================================================
echo [1] Start Development Server (npm run dev)
echo [2] Build Production Project (npm run build)
echo [3] Run Production Server (npm start)
echo [4] Exit
echo ==========================================================
echo.

set /p choice="Select an option (1-4, default 1): "

if "%choice%"=="" set choice=1
if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto start
if "%choice%"=="4" goto exit

:dev
echo.
echo Starting Development Server at http://localhost:3000 ...
start "" "http://localhost:3000"
call npm.cmd run dev
goto end

:build
echo.
echo Building optimized production build...
call npm.cmd run build
pause
goto end

:start
echo.
echo Starting Production Server at http://localhost:3000 ...
start "" "http://localhost:3000"
call npm.cmd run start
goto end

:exit
exit /b 0

:end
pause

