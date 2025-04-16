*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1021-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.9.22 (main, Apr  8 2025, 21:45:32) 
[GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo mlcommons@mlperf-automations --checkout=8819550a9bbf3e5fb136f3b0c974225e77d07397


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload mlcommons@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo mlcommons@mlperf-automations
mlc pull repo mlcommons@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest-reference-cpu-tvm-onnx_v1.19.2-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `80.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `1.73161`
