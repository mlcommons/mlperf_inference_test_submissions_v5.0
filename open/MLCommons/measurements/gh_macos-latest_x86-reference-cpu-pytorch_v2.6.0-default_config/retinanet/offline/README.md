*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: macOS-14.7.2-arm64-arm-64bit
* CPU version: arm
* Python version: 3.12.8 (v3.12.8:2dc476bcb91, Dec  3 2024, 14:43:19) [Clang 13.0.0 (clang-1300.0.29.30)]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=f2b12ce7c6b81c7f2d4d7bfe70833bc6df6b4815


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload GATEOverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo GATEOverflow@mlperf-automations
mlc pull repo GATEOverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_macos-latest_x86-reference-cpu-pytorch_v2.6.0-default_config

Model Precision: fp32

### Accuracy Results 
`mAP`: `76.951`, Required accuracy for closed division `>= 37.1745`

### Performance Results 
`Samples per second`: `0.431415`
