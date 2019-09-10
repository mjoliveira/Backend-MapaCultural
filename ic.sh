set -x
dir=/opt/docker/Ibere

# build web
cd $dir/web
pwd
nvm use 8.9.3
rm -rf /opt/docker/Ibere/api/build


npm install
npm run build
ls $dir/web/build/
mv -f /opt/docker/Ibere/web/build /opt/docker/Ibere/api/build
cd $dir/api
ls -la $dir/api/build
