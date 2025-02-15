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

mlc pull repo gateoverflow@mlperf-automations --checkout=7865f552ca7e14d938b805c326c3c5f613fa87af


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
`ROUGE1`: `31.4286`, Required accuracy for closed division `>= 45.14291`
`ROUGE2`: `5.8824`, Required accuracy for closed division `>= 23.11907`
`ROUGEL`: `28.5714`, Required accuracy for closed division `>= 30.15619`
`TOKENS_PER_SAMPLE`: `152.0`, Required accuracy for closed division `>= 130.356` and `<= 160.49`
`gsm8k_accuracy`: `100.0`, Required accuracy for closed division `>= 72.9234`
`mbxp_accuracy`: `0.0`, Required accuracy for closed division `>= 59.5584`

### Performance Results 
`Samples per second`: `0.0148696`
