*Check [CM MLPerf docs](https://docs.mlcommons.org/inference) for more details.*

## Host platform

* OS version: Linux-6.8.0-52-generic-x86_64-with-glibc2.35
* CPU version: x86_64
* Python version: 3.10.12 (main, Jan 17 2025, 14:35:34) [GCC 11.4.0]
* MLC version: unknown

## CM Run Command

See [CM installation guide](https://docs.mlcommons.org/inference/install/).

```bash
pip install -U mlcflow

mlc rm cache -f

mlc pull repo gateoverflow@mlperf-automations --checkout=1b66121d6c46ea0742eeff9b502f0c20e7a9883a


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload gateoverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo gateoverflow@mlperf-automations
mlc pull repo gateoverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_action-reference-cpu-pytorch_v2.6.0-default_config

Model Precision: fp32

### Accuracy Results 
`ROUGE1`: `61.7021`, Required accuracy for closed division `>= 43.98689`
`ROUGE2`: `37.9679`, Required accuracy for closed division `>= 21.81485`
`ROUGEL`: `39.3617`, Required accuracy for closed division `>= 28.33004`
`TOKENS_PER_SAMPLE`: `610.0`, Required accuracy for closed division `>= 265.005` and `<= 323.895`

### Performance Results 
`Samples per second`: `0.391627`
