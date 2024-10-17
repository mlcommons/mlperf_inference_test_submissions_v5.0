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

cm pull repo anandhu-eng@cm4mlops --checkout=73f9435bc6f77f5c9d07222e295de3a4a5595db3

cm run script ^
	--tags=run,mlperf,inference,generate-run-cmds,_submission,_short ^
	--submitter=MLCommons ^
	--hw_name=gh_windows-latest ^
	--model=retinanet ^
	--adr.loadgen.tags=_from-pip ^
	--pip_loadgen=yes ^
	--implementation=python ^
	--backend=pytorch ^
	--device=cpu ^
	--scenario=Offline ^
	--test_query_count=5 ^
	--quiet ^
	-v ^
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

Platform: gh_windows-latest-reference-cpu-pytorch_v2.5.0-default_config

Model Precision: fp32

### Accuracy Results 
`mAP`: `76.951`, Required accuracy for closed division `>= 37.1745`

### Performance Results 
`Samples per second`: `0.312056`