### Contribution Rules

1. 思考自己要做什么事，最好是一件很小的事，比如数据库添加一个字段，后端改进一个算法之类。

2. 在Issues下创建一个issue，记住issue的编号。

3. 从`develop`新建分支，分支命名规则："cssa" + {issue编号}，如：`cssa1`, `cssa2`之类。

   ```Shell
   # 上一个完成的issue在cssa2
   [cssa2] $ git checkout develop
   # 从cssa2切换到develop，此时如果terminal提示develop有新的commit，就更新一下develop
   [develop] $ git pull origin develop
   # 创建新分支
   [develop] $ git checkout -b cssa3
   [cssa3] # Do something
   ```

4. coding...

5. 自己测试，保证除了自己预先决定要做的事以外没有修改其他任何东西，如果在过程中想到了什么别的地方要修改，先记录下来，等完成这个功能之后再开新branch。

6. 上传代码

   ```Shell
   [cssa3] $ git add .
   [cssa3] $ git commit -m "Add aboutus page" # commit comment must be understandable. 
   [cssa3] $ git push origin cssa3
   ```

7. 再github pull request，base是develop，等待别人review并merge，不要自己merge。

8. 任何人review任何人的代码都要在merge完之后要删掉这个branch，不然会积累很多已经merge了的branch。

9. 在Issues里面关闭对应的issue。

10. 返回`develop`，重复步骤1。