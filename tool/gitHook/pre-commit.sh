#!/bin/sh
#
# A hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To use this hook, run 'ln -s ../../tool/gitHook/pre-commit.sh .git/hooks/pre-commit'
# in your project root dir.

# function to echo colorful message
# 1 for warn, 2 for success, default for normal message
console()
{
    case $1 in
        1)
            echo -e '\033[40;31;1m '$2' \033[0m'
            ;;
        2)
            echo -e '\033[40;32;1m '$2' \033[0m'
            ;;
        *)
            echo -e '\033[40;37;1m '$1' \033[0m'
            ;;
    esac
}

# Redirect output to stderr.
exec 1>&2

console 'Running fecs.'

# 执行fecs检查本次提交的、src目录下的、.js为后缀名的文件中的代码
# 过滤出本次提交的、src目录下的、.js为后缀名的文件
filePathString=`git diff-index --cached --name-only --diff-filter=ACMRTU HEAD src | grep '\.js$' | grep -v page | grep -v 'tongji\.js$'`

if [ -z "$filePathString" ]
    then
        console 2 'No js file found. Skip fecs.'
else
    fecs $filePathString
    fecsCheckResult=$?

    if [ $fecsCheckResult -ne 0 ]
        then
            console 1 'Please fix fecs warnings and errors before commit.'
            exit 1
    fi

    console 2 'Very good!'
fi

exit 0
