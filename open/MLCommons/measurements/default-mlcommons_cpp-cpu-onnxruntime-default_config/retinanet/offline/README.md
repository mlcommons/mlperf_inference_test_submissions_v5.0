*Check [MLC MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.14.0-1012-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.12 (main, Oct 10 2025, 01:01:16) [GCC 13.3.0]
* MLC version: unknown

## MLC Run Command

See [MLC installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=e66db9c9487ea5c161e587f269ed5e01cec4152b


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload GATEOverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo GATEOverflow@mlperf-automations
mlc pull repo GATEOverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: default-mlcommons_cpp-cpu-onnxruntime-default_config

Model Precision: fp32

### Accuracy Results 
`mAP`: `49.593`, Required accuracy for closed division `>= 37.1745`

### Performance Results 
`Samples per second`: `0.42185`
