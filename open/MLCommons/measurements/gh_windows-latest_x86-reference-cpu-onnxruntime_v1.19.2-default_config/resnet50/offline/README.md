This experiment is generated using the [MLCommons Collective Mind automation framework (CM)](https://github.com/mlcommons/cm4mlops).

*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Windows-2022Server-10.0.20348-SP0
* CPU version: AMD64 Family 25 Model 1 Stepping 1, AuthenticAMD
* Python version: 3.12.6 (tags/v3.12.6:a4a2d2b, Sep  6 2024, 20:11:23) [MSC v.1940 64 bit (AMD64)]
* MLCommons CM version: 3.0.1

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U cmind

cm rm cache -f

cm pull repo GATEOverflow@cm4mlops --checkout=662b26ebe7084725625df8f93778a0e141294eaa

cm run script ^
	--tags=run-mlperf,inference,_submission,_short ^
	--submitter=MLCommons ^
	--hw_name=gh_windows-latest_x86 ^
	--model=resnet50 ^
	--adr.loadgen.tags=_from-pip ^
	--pip_loadgen=yes ^
	--implementation=python ^
	--backend=onnxruntime ^
	--device=cpu ^
	--scenario=Offline ^
	--test_query_count=500 ^
	--target_qps=1 ^
	-v ^
	--quiet
```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf (CM scripts),
 you should simply reload GATEOverflow@cm4mlops without checkout and clean CM cache as follows:*

```bash
cm rm repo GATEOverflow@cm4mlops
cm pull repo GATEOverflow@cm4mlops
cm rm cache -f

```

## Results

Platform: gh_windows-latest_x86-reference-cpu-onnxruntime_v1.19.2-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `17.4305`
