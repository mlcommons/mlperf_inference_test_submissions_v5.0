This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-49-generic-x86_64-with-glibc2.35
* CPU version: x86_64
* Python version: 3.10.12 (main, Nov  6 2024, 20:22:13) [GCC 11.4.0]
* MLCommons CM version: 3.5.2

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo gateoverflow@mlperf-automations --checkout=791720fb56b3ac12db456083e8432c67c070bfc3

cm run script \
	--tags=app,mlperf,inference,generic,_reference,_llama2-70b-99,_pytorch,_cpu,_test,_r5.0-dev_default,_bfloat16,_offline \
	--quiet=true \
	--env.CM_MLPERF_MODEL_LLAMA2_70B_DOWNLOAD_TO_HOST=yes \
	--env.CM_QUIET=yes \
	--env.CM_MLPERF_IMPLEMENTATION=reference \
	--env.CM_MLPERF_MODEL=llama2-70b-99 \
	--env.CM_MLPERF_RUN_STYLE=test \
	--env.CM_MLPERF_SKIP_SUBMISSION_GENERATION=False \
	--env.CM_DOCKER_PRIVILEGED_MODE=True \
	--env.CM_MLPERF_BACKEND=pytorch \
	--env.CM_MLPERF_SUBMISSION_SYSTEM_TYPE=datacenter \
	--env.CM_MLPERF_CLEAN_ALL=True \
	--env.CM_MLPERF_DEVICE=cpu \
	--env.CM_MLPERF_USE_DOCKER=True \
	--env.CM_HW_NAME=gh_action \
	--env.CM_MLPERF_MODEL_PRECISION=bfloat16 \
	--env.CM_MLPERF_INFERENCE_PULL_CODE_CHANGES=yes \
	--env.CM_MLPERF_INFERENCE_PULL_SRC_CHANGES=yes \
	--env.OUTPUT_BASE_DIR=/home/arjun/gh_action_results \
	--env.CM_MLPERF_LOADGEN_SCENARIO=Offline \
	--env.CM_MLPERF_INFERENCE_SUBMISSION_DIR=/home/arjun/gh_action_submissions \
	--env.CM_MLPERF_SUBMITTER=MLCommons \
	--env.CM_MLPERF_LOADGEN_TARGET_QPS=0.001 \
	--env.CM_TEST_QUERY_COUNT=1 \
	--env.CM_MLPERF_LOADGEN_COMPLIANCE=no \
	--env.CM_MLPERF_SUBMISSION_RUN=yes \
	--env.CM_RUN_MLPERF_ACCURACY=on \
	--env.CM_RUN_SUBMISSION_CHECKER=yes \
	--env.CM_TAR_SUBMISSION_DIR=yes \
	--env.CM_MLPERF_SUBMISSION_DIVISION=open \
	--env.CM_RUN_MLPERF_SUBMISSION_PREPROCESSOR=False \
	--env.CM_MLPERF_SUBMISSION_GENERATION_STYLE=short \
	--env.CM_MLPERF_LOADGEN_ALL_MODES=yes \
	--env.CM_MLPERF_INFERENCE_VERSION=5.0-dev \
	--env.CM_RUN_MLPERF_INFERENCE_APP_DEFAULTS=r5.0-dev_default \
	--env.CM_MLPERF_SUBMISSION_CHECKER_VERSION=v5.0 \
	--env.CM_MLPERF_INFERENCE_SOURCE_VERSION=5.0.4 \
	--env.CM_MLPERF_LAST_RELEASE=v5.0 \
	--env.CM_TMP_PIP_VERSION_STRING= \
	--env.CM_MODEL=llama2-70b-99 \
	--env.CM_MLPERF_CLEAN_SUBMISSION_DIR=yes \
	--env.CM_RERUN=yes \
	--env.CM_MLPERF_LOADGEN_EXTRA_OPTIONS= \
	--env.CM_MLPERF_LOADGEN_MODE=performance \
	--env.CM_MLPERF_LOADGEN_SCENARIOS,=Offline \
	--env.CM_MLPERF_LOADGEN_MODES,=performance,accuracy \
	--env.CM_OUTPUT_FOLDER_NAME=test_results \
	--env.CM_DOCKER_REUSE_EXISTING_CONTAINER=no \
	--env.CM_DOCKER_DETACHED_MODE=yes \
	--add_deps_recursive.compiler.tags=gcc \
	--add_deps_recursive.submission-checker.tags=_short-run \
	--add_deps_recursive.get-mlperf-inference-results-dir.tags=_version.r5.0-dev \
	--add_deps_recursive.get-mlperf-inference-submission-dir.tags=_version.r5.0-dev \
	--add_deps_recursive.mlperf-inference-nvidia-scratch-space.tags=_version.r5.0-dev \
	--adr.compiler.tags=gcc \
	--adr.submission-checker.tags=_short-run \
	--adr.get-mlperf-inference-results-dir.tags=_version.r5.0-dev \
	--adr.get-mlperf-inference-submission-dir.tags=_version.r5.0-dev \
	--adr.mlperf-inference-nvidia-scratch-space.tags=_version.r5.0-dev \
	--v=False \
	--print_env=False \
	--print_deps=False \
	--dump_version_info=True \
	--env.OUTPUT_BASE_DIR=/cm-mount/home/arjun/gh_action_results \
	--env.CM_MLPERF_INFERENCE_SUBMISSION_DIR=/cm-mount/home/arjun/gh_action_submissions \
	--env.LLAMA2_CHECKPOINT_PATH=/home/cmuser/CM/repos/local/cache/92f669176b2246ad/repo
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload gateoverflow@mlperf-automations without checkout and clean CM cache as follows:*

```bash
cm rm repo gateoverflow@mlperf-automations
cm pull repo gateoverflow@mlperf-automations
cm rm cache -f

```

## Results

Platform: gh_action-reference-cpu-pytorch-v2.5.1-default_config

Model Precision: fp32

### Accuracy Results 
`ROUGE1`: `61.7021`, Required accuracy for closed division `>= 43.98689`
`ROUGE2`: `37.9679`, Required accuracy for closed division `>= 21.81485`
`ROUGEL`: `39.3617`, Required accuracy for closed division `>= 28.33004`
`TOKENS_PER_SAMPLE`: `610.0`, Required accuracy for closed division `>= 265.005` and `<= 323.895`

### Performance Results 
`Samples per second`: `0.400711`
