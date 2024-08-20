#!/bin/bash

python3 -m pip install -r docs/requirements.txt
python3 process.py
python3 process_results_table.py
if [ ! -e docs/thirdparty/tablesorter ]; then
    cd docs/thirdparty && git clone https://github.com/Mottie/tablesorter.git && cd -
fi
