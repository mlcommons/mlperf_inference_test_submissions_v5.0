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

cm pull repo gateoverflow@mlperf-automations --checkout=45c3181e7a5c12b95e8d2411e9c872d9185c2559

cm run script \
	--tags=app,mlperf,inference,generic,_reference,_gptj-99,_pytorch,_cuda,_test,_r5.0-dev_default,_float16,_offline \
	--quiet=true \
	--env.CM_QUIET=yes \
	--env.CM_MLPERF_IMPLEMENTATION=reference \
	--env.CM_MLPERF_MODEL=gptj-99 \
	--env.CM_MLPERF_RUN_STYLE=test \
	--env.CM_MLPERF_SKIP_SUBMISSION_GENERATION=False \
	--env.CM_DOCKER_PRIVILEGED_MODE=True \
	--env.CM_MLPERF_SUBMISSION_DIVISION=open \
	--env.CM_MLPERF_INFERENCE_TP_SIZE=1 \
	--env.CM_MLPERF_BACKEND=pytorch \
	--env.GPTJ_BEAM_SIZE=1 \
	--env.CM_MLPERF_CLEAN_ALL=True \
	--env.CM_MLPERF_DEVICE=cuda \
	--env.CM_MLPERF_USE_DOCKER=True \
	--env.CM_GET_PLATFORM_DETAILS=yes \
	--env.CM_HW_NAME=gh_action \
	--env.CM_MLPERF_MODEL_PRECISION=float16 \
	--env.CM_MLPERF_INFERENCE_PULL_CODE_CHANGES=yes \
	--env.CM_MLPERF_INFERENCE_PULL_SRC_CHANGES=yes \
	--env.OUTPUT_BASE_DIR=/cm-mount/home/arjun/gh_action_results \
	--env.CM_MLPERF_LOADGEN_SCENARIO=Offline \
	--env.CM_MLPERF_INFERENCE_SUBMISSION_DIR=/cm-mount/home/arjun/gh_action_submissions \
	--env.CM_MLPERF_SUBMITTER=MLCommons \
	--env.CM_MLPERF_LOADGEN_TARGET_QPS=1 \
	--env.CM_TEST_QUERY_COUNT=1 \
	--env.CM_MLPERF_LOADGEN_COMPLIANCE=no \
	--env.CM_MLPERF_SUBMISSION_RUN=yes \
	--env.CM_RUN_MLPERF_ACCURACY=on \
	--env.CM_RUN_SUBMISSION_CHECKER=yes \
	--env.CM_TAR_SUBMISSION_DIR=yes \
	--env.CM_RUN_MLPERF_SUBMISSION_PREPROCESSOR=False \
	--env.CM_MLPERF_SUBMISSION_GENERATION_STYLE=short \
	--env.CM_MLPERF_LOADGEN_ALL_MODES=yes \
	--env.CM_MLPERF_INFERENCE_VERSION=5.0-dev \
	--env.CM_RUN_MLPERF_INFERENCE_APP_DEFAULTS=r5.0-dev_default \
	--env.CM_MLPERF_SUBMISSION_CHECKER_VERSION=v5.0 \
	--env.CM_MLPERF_INFERENCE_SOURCE_VERSION=5.0.4 \
	--env.CM_MLPERF_LAST_RELEASE=v5.0 \
	--env.CM_TMP_PIP_VERSION_STRING= \
	--env.CM_MODEL=gptj-99 \
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
	--gptj_checkpoint_path=/home/cmuser/CM/repos/local/cache/31767c21a8f149e5/checkpoint/checkpoint-final
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload gateoverflow@mlperf-automations without checkout and clean CM cache as follows:*

```bash
cm rm repo gateoverflow@mlperf-automations
cm pull repo gateoverflow@mlperf-automations
cm rm cache -f

```

## Results

Platform: gh_action-reference-gpu-pytorch_v2.5.1-cu124

Model Precision: fp32

### Accuracy Results 
`GEN_LEN`: `264.0`, Required accuracy for closed division `>= 42.55663`

### Performance Results 
`Samples per second`: `48.0408`
