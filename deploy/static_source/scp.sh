# start scp

# read path

read -p "please input static_source path('../static_source'):" staticPath

if [ ! -n "$staticPath" ] ; then
  staticPath='../static_source'
  echo '$staticPath'
elif [ ! -d "$staticPath" ] ; then
  echo 'path error.'
  exit 1
else 
  echo 'start deploy.'
fi

# build prdc
npm run build-prd
echo '\033[34m build prd done. \033[0m'

# remove nop cache
echo '\033[34m remove nop cache in static_source \033[0m'
rm -rf $staticPath/nop/
if [ "$?" = "0" ]; then
  echo '\033[34m rm nop files done. \033[0m'
else
  echo "\033[31m can not change directory. \033[0m" 1>&2
  exit 1
fi

# scp file

scp -r ./build/prd/ $staticPath/nop/
# echo 'scp file done.'
echo "\033[34m scp file done. \033[0m"
echo "\033[31m 文件已拷贝至static_source文件夹\n 接下来要在static_source提交Git代码  \033[0m"
echo "\033[31m Well done! Do not forget to manage codes in static_source project!  \033[0m"

