*Check [MLC MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.11.0-1018-azure-x86_64-with-glibc2.39
* CPU version: x86_64
* Python version: 3.12.12 (main, Oct 10 2025, 01:01:16) [GCC 13.3.0]
* MLC version: unknown

## MLC Run Command

See [MLC installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo Patel230@mlperf-automations --checkout=abd44b8924334ab793d01aceb038f4f8d9c721c2


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload Patel230@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo Patel230@mlperf-automations
mlc pull repo Patel230@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_ubuntu-latest_x86-mlcommons_cpp-cpu-onnxruntime-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `23.1046`
