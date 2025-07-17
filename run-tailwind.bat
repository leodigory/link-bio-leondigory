  @echo off
  call node node_modules/tailwindcss/lib/cli.js -i ./src/input.css -o ./src/output.css --watch
  pause