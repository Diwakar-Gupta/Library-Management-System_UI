git branch -d build
git checkout -b build

npm run build
mv ./build/asset-manifest.json ./build/static/asset-manifest.json
mv ./build/favicon.ico ./build/static/favicon.ico
mv ./build/logo192.png ./build/static/logo192.png
mv ./build/logo512.png ./build/static/logo512.png
mv ./build/manifest.json ./build/static/manifest.json

git add ./build -f
git commit -m 'build'
git push --set-upstream origin build --force
