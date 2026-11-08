@echo off
title Framo.io - Next.js Local Server
color 0A

echo ==========================================================
echo        FRAMO.IO - NEXT.JS LOCAL DEVELOPMENT SERVER
echo ==========================================================
echo.
echo Checking dependencies...

if not exist "node_modules\" (
    echo Installing dependencies... Please wait.
    call npm.cmd install
    if errorlevel 1 (
        echo Error installing dependencies.
        pause
        exit /b %errorlevel%
    )
)

echo.
echo Starting development server on http://localhost:3000 ...
echo Press Ctrl+C in this window anytime to stop the server.
echo.

start "" "http://localhost:3000"
call npm.cmd run dev

pause

