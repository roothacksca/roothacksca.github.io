# cp dist
cp -r ./dist/* .
rm -rf dist

# commit changes
git add --all
git commit -m "Deploy new build"
git push origin main