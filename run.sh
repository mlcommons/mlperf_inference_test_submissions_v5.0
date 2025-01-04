export INFERENCE_RESULTS_REPO_OWNER=${INFERENCE_RESULTS_REPO_OWNER:-mlcommons}
export INFERENCE_RESULTS_REPO_NAME=${INFERENCE_RESULTS_REPO_NAME:-mlperf_inference_test_submissions}
export INFERENCE_RESULTS_REPO_BRANCH=${INFERENCE_RESULTS_REPO_BRANCH:-main}
export INFERENCE_RESULTS_VERSION=${INFERENCE_RESULTS_VERSION:-v4.1}

if [ ! -e docs ]; then
    git clone https://github.com/GATEOverflow/inference_results_visualization_template.git docs
    test $? -eq 0 || exit $?
fi

cp docs/docinit.sh .


export default_division="open";
export default_category="edge";

bash docinit.sh
git add .
git commit -m "Added results summary"
