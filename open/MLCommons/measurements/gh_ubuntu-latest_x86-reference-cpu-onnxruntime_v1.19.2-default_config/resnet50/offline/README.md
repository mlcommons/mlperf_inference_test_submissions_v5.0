This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1014-azure-x86_64-with-glibc2.35
* CPU version: x86_64
* Python version: 3.12.6 (main, Sep  9 2024, 03:08:08) [GCC 11.4.0]
* MLCommons CM version: 2.4.0

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo anandhu-eng@cm4mlops --checkout=6f66aa2aa4523d34dff40647b753114b83e849b9

cm run script \
	--tags=run-mlperf,inference,_submission,_short \
	--submitter=MLCommons \
	--hw_name=gh_ubuntu-latest_x86 \
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

Platform: gh_ubuntu-latest_x86-reference-cpu-onnxruntime_v1.19.2-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `23.2375`
