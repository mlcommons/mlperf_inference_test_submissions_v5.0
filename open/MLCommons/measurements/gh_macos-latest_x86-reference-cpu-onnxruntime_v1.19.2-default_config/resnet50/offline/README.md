This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: macOS-14.7-arm64-arm-64bit
* CPU version: arm
* Python version: 3.12.7 (v3.12.7:0b05ead877f, Sep 30 2024, 23:18:00) [Clang 13.0.0 (clang-1300.0.29.30)]
* MLCommons CM version: 3.2.2

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo anandhu-eng@cm4mlops --checkout=9802874a4b4d658a9ca6caca630b5175ced02e8a

cm run script \
	--tags=run-mlperf,inference,_submission,_short \
	--submitter=MLCommons \
	--hw_name=gh_macos-latest_x86 \
	--model=resnet50 \
	--implementation=python \
	--backend=onnxruntime \
	--device=cpu \
	--scenario=Offline \
	--test_query_count=500 \
	--target_qps=1 \
	-v \
	--quiet
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload anandhu-eng@cm4mlops without checkout and clean CM cache as follows:*

```bash
cm rm repo anandhu-eng@cm4mlops
cm pull repo anandhu-eng@cm4mlops
cm rm cache -f

```

## Results

Platform: gh_macos-latest_x86-reference-cpu-onnxruntime_v1.19.2-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `22.9054`
