*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1020-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.8 (main, Dec  4 2024, 06:20:31) [GCC 13.2.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=3fa276f60f1179da74f4afe1d2ba821f20d0aba9


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload GATEOverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo GATEOverflow@mlperf-automations
mlc pull repo GATEOverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-onnxruntime_v1.20.1-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `23.1749`
