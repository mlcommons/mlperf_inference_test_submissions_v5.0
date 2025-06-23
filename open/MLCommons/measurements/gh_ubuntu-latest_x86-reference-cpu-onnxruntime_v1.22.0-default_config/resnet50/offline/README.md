*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1015-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.11 (main, Jun  4 2025, 04:14:08) [GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo mlcommons@mlperf-automations --checkout=00ac0e0d1a873a6e5d3f3b8b8b672d66fb896d69


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload mlcommons@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo mlcommons@mlperf-automations
mlc pull repo mlcommons@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-onnxruntime_v1.22.0-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `22.9983`
