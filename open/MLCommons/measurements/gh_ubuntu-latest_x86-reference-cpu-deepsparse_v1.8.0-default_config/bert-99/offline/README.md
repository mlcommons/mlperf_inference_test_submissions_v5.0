*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1014-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.11.12 (main, Apr  8 2025, 21:35:04) [GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo GATEOverflow@mlperf-automations --checkout=a94f106cf7b745bd60be034cf67d44bba8f07878


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload GATEOverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo GATEOverflow@mlperf-automations
mlc pull repo GATEOverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-deepsparse_v1.8.0-default_config

Model Precision: fp32

### Accuracy Results 
`F1`: `80.0`, Required accuracy for closed division `>= 89.96526`

### Performance Results 
`Samples per second`: `6.32138`
