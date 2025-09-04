*Check [MLC MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: macOS-15.5-arm64-arm-64bit
* CPU version: arm
* Python version: 3.12.10 (v3.12.10:0cc81280367, Apr  8 2025, 08:46:59) [Clang 13.0.0 (clang-1300.0.29.30)]
* MLC version: unknown

## MLC Run Command

See [MLC installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo shahfarazz@mlperf-automations --checkout=f6115ee49cbfcdf71aca745c3eab6875b6526511


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload shahfarazz@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo shahfarazz@mlperf-automations
mlc pull repo shahfarazz@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_macos-latest_x86-mlcommons_cpp-cpu-onnxruntime-default_config

Model Precision: fp32

### Accuracy Results 
`acc`: `76.0`, Required accuracy for closed division `>= 75.6954`

### Performance Results 
`Samples per second`: `5.45703`
