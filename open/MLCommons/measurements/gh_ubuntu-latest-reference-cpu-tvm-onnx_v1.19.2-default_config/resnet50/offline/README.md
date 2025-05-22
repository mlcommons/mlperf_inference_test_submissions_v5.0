*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1014-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.9.22 (main, Apr  8 2025, 21:45:32) 
[GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=c0c33df4d335c6433de04300bef04bbbb2d68a0a


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload GATEOverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo GATEOverflow@mlperf-automations
mlc pull repo GATEOverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest-reference-cpu-tvm-onnx_v1.19.2-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `80.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `1.74374`
