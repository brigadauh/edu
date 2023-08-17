#mirroring repositories
rm -r -f ./project_xxxx.git
git clone --mirrowhttps://brigadauh@github.com/project_xxx.git
cd ./project_xxx.git
git remote add github https://brigadauh@github.com/project_xxx2.git
git push --all github
git push --tags github
cd ..
