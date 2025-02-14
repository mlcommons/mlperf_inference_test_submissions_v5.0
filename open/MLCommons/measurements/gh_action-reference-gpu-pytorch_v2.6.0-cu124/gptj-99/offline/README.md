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

mlc pull repo gateoverflow@mlperf-automations --checkout=a2f08879e6922dc541d8b5ac2d60762c71d56b58


```
*Note that if you want to use the [latest automation recipes](https://docs.mlcommons.org/inference) for MLPerf,
 you should simply reload gateoverflow@mlperf-automations without checkout and clean MLC cache as follows:*

```bash
mlc rm repo gateoverflow@mlperf-automations
mlc pull repo gateoverflow@mlperf-automations
mlc rm cache -f

```

## Results

Platform: gh_action-reference-gpu-pytorch_v2.6.0-cu124

Model Precision: fp32

### Accuracy Results 
`ROUGE1`: `32.2581`, Required accuracy for closed division `>= 42.55663`
`ROUGE2`: `6.6667`, Required accuracy for closed division `>= 19.92226`
`ROUGEL`: `22.5806`, Required accuracy for closed division `>= 29.68822`
`GEN_LEN`: `264.0`, Required accuracy for closed division `>= 3615190.2`

### Performance Results 
`Samples per second`: `49.1596`
