*Check [MLC MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1018-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.11 (main, Jun  4 2025, 04:14:08) [GCC 13.3.0]
* MLC version: unknown

## MLC Run Command

See [MLC installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo kamieyy@mlperf-automations --checkout=4934283ddfa8a798b41fcb075c301f5ebe6e2db9


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload kamieyy@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo kamieyy@mlperf-automations
mlc pull repo kamieyy@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-onnxruntime_v1.22.1-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `23.1069`
