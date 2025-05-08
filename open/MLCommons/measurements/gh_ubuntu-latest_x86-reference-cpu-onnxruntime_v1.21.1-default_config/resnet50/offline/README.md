*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1013-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.10 (main, Apr  8 2025, 22:38:13) [GCC 13.3.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo H9660@mlperf-automations --checkout=5ff6d5abd432bc19fb496cb93245708e474c2eb3


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload H9660@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo H9660@mlperf-automations
mlc pull repo H9660@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-reference-cpu-onnxruntime_v1.21.1-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `23.0274`
