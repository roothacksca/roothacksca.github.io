## BEFORE RUNNING THIS SCRIPT ##
# In order to properly deploy, you must build a local copy of ./dist
# from the origin/source branch.
#
# Else, you might accidentally deploy an empty dist folder and blank
# the entire website :skull:








RED="\033[31m\033[1m"
RESET="\033[0m"
IMPORTANT="\033[4m\033[34m\033[0m"

if [ -d "dist" ]
then
    # cp local build
    cp -r ./dist/* .
    rm -rf dist

    # commit changes
    git add --all
    git commit -m "Deploy new build"
    git push origin main
else
    printf "$RED""Error: "$RESET"no "$IMPORTANT"./dist"$RESET" folder found. Please read the note in "$IMPORTANT"deploy.sh"$RESET" before deploying again."$RESET"\n"
fi