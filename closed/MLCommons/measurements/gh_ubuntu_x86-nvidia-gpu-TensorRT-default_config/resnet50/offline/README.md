This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.2.0-39-generic-x86_64-with-glibc2.29
* CPU version: x86_64
* Python version: 3.8.10 (default, Sep 11 2024, 16:02:53) 
[GCC 9.4.0]
* MLCommons CM version: 3.0.2

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo gateoverflow@cm4mlops --checkout=994a96a9640c7396d9c8f7a72b308c536d0f2abf

cm run script \
	--tags=app,mlperf,inference,generic,_nvidia,_resnet50,_tensorrt,_cuda,_valid,_r4.1-dev_default,_offline \
	--quiet=true \
	--env.CM_QUIET=yes \
	--env.CM_MLPERF_IMPLEMENTATION=nvidia \
	--env.CM_MLPERF_MODEL=resnet50 \
	--env.CM_MLPERF_RUN_STYLE=valid \
	--env.CM_MLPERF_SKIP_SUBMISSION_GENERATION=False \
	--env.CM_MLPERF_BACKEND=tensorrt \
	--env.CM_MLPERF_SUBMISSION_SYSTEM_TYPE=datacenter \
	--env.CM_MLPERF_CLEAN_ALL=True \
	--env.CM_MLPERF_DEVICE=cuda \
	--env.CM_MLPERF_SUBMISSION_DIVISION=closed \
	--env.CM_MLPERF_USE_DOCKER=True \
	--env.CM_HW_NAME=gh_ubuntu_x86 \
	--env.CM_MLPERF_LOADGEN_OFFLINE_TARGET_QPS=85000 \
	--env.OUTPUT_BASE_DIR=/home/arjun/gh_action_results \
	--env.CM_MLPERF_LOADGEN_SERVER_TARGET_QPS=73000 \
	--env.CM_MLPERF_INFERENCE_SUBMISSION_DIR=/home/arjun/gh_action_submissions \
	--env.CM_MLPERF_SUBMITTER=MLCommons \
	--env.CM_USE_DATASET_FROM_HOST=yes \
	--env.CM_MLPERF_LOADGEN_ALL_SCENARIOS=yes \
	--env.CM_MLPERF_LOADGEN_COMPLIANCE=yes \
	--env.CM_MLPERF_SUBMISSION_RUN=yes \
	--env.CM_RUN_MLPERF_ACCURACY=on \
	--env.CM_RUN_SUBMISSION_CHECKER=yes \
	--env.CM_TAR_SUBMISSION_DIR=yes \
	--env.CM_MLPERF_SUBMISSION_GENERATION_STYLE=full \
	--env.CM_MLPERF_INFERENCE_VERSION=4.1-dev \
	--env.CM_RUN_MLPERF_INFERENCE_APP_DEFAULTS=r4.1-dev_default \
	--env.CM_MLPERF_LOADGEN_ALL_MODES=yes \
	--env.CM_MLPERF_LAST_RELEASE=v4.0 \
	--env.CM_TMP_CURRENT_PATH=/home/arjun/actions-runner/_work/cm4mlops/cm4mlops \
	--env.CM_TMP_PIP_VERSION_STRING= \
	--env.CM_MODEL=resnet50 \
	--env.CM_MLPERF_CLEAN_SUBMISSION_DIR=yes \
	--env.CM_RERUN=yes \
	--env.CM_MLPERF_LOADGEN_EXTRA_OPTIONS= \
	--env.CM_MLPERF_LOADGEN_MODE=performance \
	--env.CM_MLPERF_LOADGEN_SCENARIO=Offline \
	--env.CM_MLPERF_LOADGEN_SCENARIOS,=Server,Offline \
	--env.CM_MLPERF_LOADGEN_MODES,=performance,accuracy \
	--env.CM_OUTPUT_FOLDER_NAME=valid_results \
	--env.CM_MLPERF_LOADGEN_TARGET_QPS=85000 \
	--env.CM_MLPERF_INFERENCE_RESULTS_DIR_=/home/arjun/gh_action_results/valid_results \
	--env.CM_DOCKER_CONTAINER_ID=b45818b57783 \
	--env.CM_MLPERF_LOADGEN_COMPLIANCE_TEST=TEST04 \
	--add_deps_recursive.compiler.tags=gcc \
	--add_deps_recursive.coco2014-original.tags=_full \
	--add_deps_recursive.coco2014-preprocessed.tags=_full \
	--add_deps_recursive.imagenet-original.tags=_full \
	--add_deps_recursive.imagenet-preprocessed.tags=_full \
	--add_deps_recursive.openimages-original.tags=_full \
	--add_deps_recursive.openimages-preprocessed.tags=_full \
	--add_deps_recursive.openorca-original.tags=_full \
	--add_deps_recursive.openorca-preprocessed.tags=_full \
	--add_deps_recursive.get-mlperf-inference-results-dir.tags=_version.r4_1-dev \
	--add_deps_recursive.get-mlperf-inference-submission-dir.tags=_version.r4_1-dev \
	--add_deps_recursive.mlperf-inference-nvidia-scratch-space.tags=_version.r4_1-dev \
	--adr.compiler.tags=gcc \
	--adr.coco2014-original.tags=_full \
	--adr.coco2014-preprocessed.tags=_full \
	--adr.imagenet-original.tags=_full \
	--adr.imagenet-preprocessed.tags=_full \
	--adr.openimages-original.tags=_full \
	--adr.openimages-preprocessed.tags=_full \
	--adr.openorca-original.tags=_full \
	--adr.openorca-preprocessed.tags=_full \
	--adr.get-mlperf-inference-results-dir.tags=_version.r4_1-dev \
	--adr.get-mlperf-inference-submission-dir.tags=_version.r4_1-dev \
	--adr.mlperf-inference-nvidia-scratch-space.tags=_version.r4_1-dev \
	--v=False \
	--print_env=False \
	--print_deps=False \
	--dump_version_info=True \
	--env.CM_DATASET_IMAGENET_PATH=/home/cmuser/CM/repos/local/cache/084455e7082544bf/imagenet-2012-val \
	--env.OUTPUT_BASE_DIR=/home/arjun/gh_action_results \
	--env.CM_MLPERF_INFERENCE_SUBMISSION_DIR=/home/arjun/gh_action_submissions \
	--env.MLPERF_SCRATCH_PATH=/home/cmuser/CM/repos/local/cache/e066920512fd47b7
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload gateoverflow@cm4mlops without checkout and clean CM cache as follows:*

```bash
cm rm repo gateoverflow@cm4mlops
cm pull repo gateoverflow@cm4mlops
cm rm cache -f

```

## Results

Platform: gh_ubuntu_x86-nvidia-gpu-TensorRT-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.078`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `80458.4`
