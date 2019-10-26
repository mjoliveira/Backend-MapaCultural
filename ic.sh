set -x
dir=/opt/docker/ibere

# build web
cd $dir/web
pwd
nvm use 10.15.0
rm -rf /opt/docker/ibere/api/build


npm install
npm run build
ls $dir/web/build/
mv -f /opt/docker/ibere/web/build /opt/docker/ibere/api/build
cd $dir/api
ls -la $dir/api/build
