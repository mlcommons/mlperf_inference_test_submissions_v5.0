This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Windows-2022Server-10.0.20348-SP0
* CPU version: AMD64 Family 25 Model 1 Stepping 1, AuthenticAMD
* Python version: 3.12.7 (tags/v3.12.7:0b05ead, Oct  1 2024, 03:06:41) [MSC v.1941 64 bit (AMD64)]
* MLCommons CM version: 3.2.4

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo anandhu-eng@cm4mlops --checkout=c9bbd2a814e78b7ee93215752e2d7f099a056486

cm run script ^
	--tags=run-mlperf,inference,_submission,_short ^
	--submitter=MLCommons ^
	--hw_name=gh_windows-latest_x86 ^
	--model=resnet50 ^
	--adr.loadgen.tags=_from-pip ^
	--pip_loadgen=yes ^
	--implementation=python ^
	--backend=tf ^
	--device=cpu ^
	--scenario=Offline ^
	--test_query_count=500 ^
	--target_qps=1 ^
	-v ^
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

Platform: gh_windows-latest_x86-reference-cpu-tf_v2.17.0-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `21.9731`
