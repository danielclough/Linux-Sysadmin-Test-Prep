#!/bin/bash

script_real=$(realpath $0)
script_full=$(dirname $script_real)

dir_full=$(dirname $script_real)

project_root=$(dirname $(dirname $(realpath $0 )))

echo 'Project Root' $project_root

echo 'Script relative path:' $0
 
echo 'Script abolute path:' $script_real
  
echo 'Directory abolute path:' $dir_full