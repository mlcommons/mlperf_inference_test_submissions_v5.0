*Check [MLC MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1018-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.9.23 (main, Jun  4 2025, 04:11:23) 
[GCC 13.3.0]
* MLC version: unknown

## MLC Run Command

See [MLC installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=a94a1ca0df8fc31b7fab332219ccc5c6cf3a99c0


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
`Samples per second`: `1.69931`
