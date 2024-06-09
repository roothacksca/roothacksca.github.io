# cp dist
cp -r ./dist/* .
rm -rf dist

# commit changes
git commit -m "Deploy new build"
git push origin main