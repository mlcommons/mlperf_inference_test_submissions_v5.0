Please download [summary.xlsx](summary.xlsx) to view the most recent results. 
 ```
[2025-02-07 05:43:36,988 submission_checker1.py:3263 INFO] Results=1, NoResults=0, Power Results=0
[2025-02-07 05:43:36,988 submission_checker1.py:3270 INFO] ---
[2025-02-07 05:43:36,988 submission_checker1.py:3271 INFO] Closed Results=0, Closed Power Results=0

[2025-02-07 05:43:36,988 submission_checker1.py:3276 INFO] Open Results=1, Open Power Results=0

[2025-02-07 05:43:36,988 submission_checker1.py:3281 INFO] Network Results=0, Network Power Results=0

[2025-02-07 05:43:36,988 submission_checker1.py:3286 INFO] ---
[2025-02-07 05:43:36,988 submission_checker1.py:3288 INFO] Systems=1, Power Systems=0
[2025-02-07 05:43:36,988 submission_checker1.py:3292 INFO] Closed Systems=0, Closed Power Systems=0
[2025-02-07 05:43:36,988 submission_checker1.py:3297 INFO] Open Systems=1, Open Power Systems=0
[2025-02-07 05:43:36,988 submission_checker1.py:3302 INFO] Network Systems=0, Network Power Systems=0
[2025-02-07 05:43:36,988 submission_checker1.py:3307 INFO] ---
[2025-02-07 05:43:36,988 submission_checker1.py:3312 INFO] SUMMARY: submission looks OK
[2025-02-07 05:43:37,891 module.py:5487 INFO] -        ! call "postprocess" from /home/runner/MLC/repos/mlcommons@mlperf-automations/script/run-mlperf-inference-submission-checker/customize.py

```

|    | Organization   | Availability   | Division   | SystemType   | SystemName   | Platform                                              | Model         | MlperfModel   | Scenario   |   Result | Accuracy                                                                    |   number_of_nodes | host_processor_model_name   |   host_processors_per_node |   host_processor_core_count |   accelerator_model_name |   accelerators_per_node | Location                                                                                           | framework      | operating_system                                |   notes |   compliance |   errors | version   |   inferred | has_power   | Units    | weight_data_types   |
|---:|:---------------|:---------------|:-----------|:-------------|:-------------|:------------------------------------------------------|:--------------|:--------------|:-----------|---------:|:----------------------------------------------------------------------------|------------------:|:----------------------------|---------------------------:|----------------------------:|-------------------------:|------------------------:|:---------------------------------------------------------------------------------------------------|:---------------|:------------------------------------------------|--------:|-------------:|---------:|:----------|-----------:|:------------|:---------|:--------------------|
|  0 | MLCommons      | available      | open       | datacenter   | gh_action    | gh_action-reference-cpu-pytorch_v2.6.0-default_config | llama2-70b-99 | llama2-70b-99 | Offline    |  0.40413 | ROUGE1: 61.7021  ROUGE2: 37.9679  ROUGEL: 39.3617  TOKENS_PER_SAMPLE: 610.0 |                 1 | Intel(R) Xeon(R) w7-2495X   |                          1 |                          24 |                      nan |                       0 | open/MLCommons/results/gh_action-reference-cpu-pytorch_v2.6.0-default_config/llama2-70b-99/offline | pytorch v2.6.0 | Ubuntu 22.04 (linux-6.8.0-52-generic-glibc2.35) |     nan |            1 |        0 | v5.0      |          0 | False       | Tokens/s | fp32                |