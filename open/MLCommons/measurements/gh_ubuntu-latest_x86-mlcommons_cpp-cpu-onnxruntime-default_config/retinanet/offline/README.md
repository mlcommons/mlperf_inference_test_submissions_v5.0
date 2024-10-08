This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1014-azure-x86_64-with-glibc2.35
* CPU version: x86_64
* Python version: 3.12.6 (main, Sep  9 2024, 03:08:08) [GCC 11.4.0]
* MLCommons CM version: 3.0.2

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo anandhu-eng@cm4mlops --checkout=17114558ec5c24995158d14d8ec6780fd95eab96

cm run script \
	--tags=run,mlperf,inference,generate-run-cmds,_submission,_short \
	--submitter=MLCommons \
	--hw_name=gh_ubuntu-latest_x86 \
	--model=retinanet \
	--implementation=cpp \
	--backend=onnxruntime \
	--device=cpu \
	--scenario=Offline \
	--test_query_count=5 \
	--adr.compiler.tags=gcc \
	--quiet \
	-v \
	--target_qps=1
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload anandhu-eng@cm4mlops without checkout and clean CM cache as follows:*

```bash
cm rm repo anandhu-eng@cm4mlops
cm pull repo anandhu-eng@cm4mlops
cm rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-mlcommons_cpp-cpu-onnxruntime-default_config

Model Precision: fp32

### Accuracy Results 
`mAP`: `76.951`, Required accuracy for closed division `>= 37.1745`

### Performance Results 
`Samples per second`: `0.429184`
