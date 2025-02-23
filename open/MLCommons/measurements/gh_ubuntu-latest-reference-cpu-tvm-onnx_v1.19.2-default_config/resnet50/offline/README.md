*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1021-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.9.21 (main, Dec 12 2024, 19:08:08) 
[GCC 13.2.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=ec9d5fb1a3c252f42620a176c991aca4188dc1e5


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
`Samples per second`: `1.77934`
