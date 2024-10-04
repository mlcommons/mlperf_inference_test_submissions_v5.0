Please download [summary.xlsx](summary.xlsx) to view the most recent results. [This page](https://docs.google.com/spreadsheets/d/e/2PACX-1vSCu8F7Hwck-AGJ5kWxi2G3xhO5MJoc_igybvsxjCt-2fEEYyf2BIcR0rTXW0eUzg/pubhtml) shows the results which may not be the latest. 
 ```
[2024-10-04 09:33:39,639 submission_checker1.py:2936 INFO] Results=1, NoResults=0, Power Results=0
[2024-10-04 09:33:39,639 submission_checker1.py:2943 INFO] ---
[2024-10-04 09:33:39,640 submission_checker1.py:2944 INFO] Closed Results=0, Closed Power Results=0

[2024-10-04 09:33:39,640 submission_checker1.py:2949 INFO] Open Results=1, Open Power Results=0

[2024-10-04 09:33:39,640 submission_checker1.py:2954 INFO] Network Results=0, Network Power Results=0

[2024-10-04 09:33:39,640 submission_checker1.py:2959 INFO] ---
[2024-10-04 09:33:39,640 submission_checker1.py:2961 INFO] Systems=1, Power Systems=0
[2024-10-04 09:33:39,640 submission_checker1.py:2962 INFO] Closed Systems=0, Closed Power Systems=0
[2024-10-04 09:33:39,640 submission_checker1.py:2967 INFO] Open Systems=1, Open Power Systems=0
[2024-10-04 09:33:39,640 submission_checker1.py:2972 INFO] Network Systems=0, Network Power Systems=0
[2024-10-04 09:33:39,640 submission_checker1.py:2977 INFO] ---
[2024-10-04 09:33:39,640 submission_checker1.py:2982 INFO] SUMMARY: submission looks OK
INFO:root:       ! call "postprocess" from /home/runner/CM/repos/mlcommons@cm4mlops/script/run-mlperf-inference-submission-checker/customize.py

```

|    | Organization   | Availability   | Division   | SystemType   | SystemName   | Platform                                             | Model               | MlperfModel         | Scenario   |   Result | Accuracy                                                     |   number_of_nodes | host_processor_model_name   |   host_processors_per_node |   host_processor_core_count | accelerator_model_name   |   accelerators_per_node | Location                                                                                                | framework      | operating_system                                | notes                             |   compliance |   errors | version   |   inferred | has_power   | Units     | weight_data_types   |
|---:|:---------------|:---------------|:-----------|:-------------|:-------------|:-----------------------------------------------------|:--------------------|:--------------------|:-----------|---------:|:-------------------------------------------------------------|------------------:|:----------------------------|---------------------------:|----------------------------:|:-------------------------|------------------------:|:--------------------------------------------------------------------------------------------------------|:---------------|:------------------------------------------------|:----------------------------------|-------------:|---------:|:----------|-----------:|:------------|:----------|:--------------------|
|  0 | MLCommons      | available      | open       | datacenter   | 3b07702db56d | 3b07702db56d-reference-gpu-pytorch_v2.4.1-scc24-base | stable-diffusion-xl | stable-diffusion-xl | Offline    | 0.374837 | CLIP_SCORE: 15.18544016778469  FID_SCORE: 235.69504308101006 |                 1 | Intel(R) Xeon(R) w7-2495X   |                          1 |                          24 | NVIDIA GeForce RTX 4090  |                       1 | open/MLCommons/results/3b07702db56d-reference-gpu-pytorch_v2.4.1-scc24-base/stable-diffusion-xl/offline | pytorch v2.4.1 | Ubuntu 22.04 (linux-6.2.0-39-generic-glibc2.35) | Automated by MLCommons CM v2.3.9. |            1 |        0 | v4.1      |          0 | False       | Samples/s | fp32                |