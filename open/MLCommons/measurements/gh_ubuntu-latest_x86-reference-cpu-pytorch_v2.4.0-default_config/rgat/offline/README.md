*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-1021-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.9 (main, Feb  5 2025, 03:22:31) [GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo mlcommons@mlperf-automations --checkout=9ca119727b2763e277493acc229480d5302fa523


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload mlcommons@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo mlcommons@mlperf-automations
mlc pull repo mlcommons@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-pytorch_v2.4.0-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `75.6`, Required accuracy for closed division `>= 0.72131`

### Performance Results 
`Samples per second`: `10.1969`
