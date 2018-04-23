# update 之前先更新代码
git pull

# 配置
python ./../oss/osscmd config --host=oss-cn-beijing.aliyuncs.com --id=LTAIYEy3ahJbmHJX --key=V3r2h2EK4ajOL2gY2Ak0amOE9OuIkk

# 上传文件夹
# python ./../oss/osscmd uploadfromdir ./../../build/prd oss://ainemocdn/nop

# 上传文件
# python ./../oss/osscmd upload ./../../build/index.html oss://ainemocdn/nop/

# 清空目录
# python ./../oss/osscmd deleteallobject oss://ainemocdn/nop/