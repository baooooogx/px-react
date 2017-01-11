#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.

# To use this hook, run 'ln -sf ../../tool/gitHook/pre-push.sh .git/hooks/pre-push'
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

exec 2>&1

console 'pre-push: Verifying code.'

# 尝试build
console '==============='
console 'pre-push: Try building.'
edp build -f --output=output --conf=dev
buildResult=$?
rm -rf output >/dev/null 2>&1
if [ $buildResult -ne 0 ]
    then
        console 1 '==============='
        console 1 'pre-push: Build failed! You have build error.'
        exit 1
fi

console 2 '==============='
console 2 'pre-push: Good job! Start to push.'
exit 0

