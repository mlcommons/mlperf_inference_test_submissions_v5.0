import json
import os
import time
import sys
sys.path.insert(0, os.path.join("inference", "tools", "submission"))
import submission_checker as checker # noqa

with open('summary_results.json') as f:
    data = json.load(f)
#print(models_all)
#print(platforms)

def get_header():
    css = """
    /* General table styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    border: none;
}

table.titlebarcontainer,.titlebar {
    text-align: center !important;
}
td.headerbar {
    text-align: center;
    font-size: x-large;
}
th, td {
    padding: 8px;
    text-align: left;
    vertical-align: top;
}

/* Styling for the first table to make it stand out */
table:first-of-type {
    background-color: #e8e8e8; /* Light grey background */
    color: #333; /* Darker text for contrast */
    font-weight: bold; /* Makes text bold */
}

/* Styling inner tables to have borders */
table table {
    border: 1px solid #ccc;
}

/* More specific styling for headers and rows of inner tables */
table table th, table table td {
    border: 1px solid #ccc;
}

th {
    background-color: #f4f4f4;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:nth-child(odd) {
    background-color: #ffffff;
}

/* Adjust column widths if necessary */
th:nth-child(1), td:nth-child(1) { width: 20%; }
th:nth-child(2), td:nth-child(2) { width: 30%; }
    """
    html_header = f"""
<head>
<style type="text/css">
{css}
</style>
</head>
"""
    return html_header

def get_header_table(system_json):
    submitter = system_json.get('submitter')
    system_name = system_json.get('system_name')
    html =  f"""
<div class="resultpage">
 <div class="titlebarcontainer">
  <div class="logo">
   <a href="/" style="border: none"><img src="" alt="" /></a>
  </div>
  <div class="titlebar">
   <h1 class="title">MLPerf Inference v4.1</h1>
   <p style="font-size: smaller">Copyright 2019-2024 MLCommons</p>
  </div>
 </div>
 <table class="titlebarcontainer">
  <tr>
   <td class="headerbar" rowspan="2">
    <p>{submitter}     </p>
    <p>{system_name}    </p>
   </td>
  </tr>
 </table>
 <table class="datebar">
  <tbody>
   <tr>
    <th id="license_num"><a href="">MLPerf Inference Category:</a></th>
    <td id="license_num_val">Datacenter</td>
    <th id="test_date"><a href="">MLPerf Inference Division:</a></th>
    <td id="test_date_val">Closed</td>
   </tr>
   <tr>
    <th id="tester"><a href="">Submitted by:</a></th>
    <td id="tester_val">{submitter}</td>
    <th id="sw_avail"><a href="">Availability:</a></th>
    <td id="sw_avail_val">Available as of Aug 2024</td>
   </tr>
  </tbody>
 </table>
  """
    return html


def get_system_json(path):
    #import requests
    # Send a GET request to the URL
    #response = requests.get(url)

    with open(path, "r") as f:
        data = json.load(f)
    # Check if the request was successful
    #if response.status_code == 200:
    #    # Parse the JSON content
    #    data = response.json()
        
    return data

def get_accelerator_details_table(system_json):
    table = '<h3>Accelerator Details</h3><table>'
    for key,value in system_json.items():
        if not key.startswith("accelerator"):
            continue
        table += f"""<tr><td>{key}</td><td>{value}</td></tr>"""

    table += "</table>"
    return table

def get_cpu_details_table(system_json):
    table = '<h3>Processor and Memory Details</h3><table>'
    hardware_fields = [ "processor", "cpu", "memory" ]
    for key,value in system_json.items():
        if any (a in key for a in hardware_fields) and "accelerator" not in key:
            table += f"""<tr><td>{key}</td><td>{value}</td></tr>"""

    table += "</table>"
    return table
def get_network_details_table(system_json):
    table = '<h3>Network and Interconnect Details</h3><table>'
    hardware_fields = [ "network", "nics" ]
    for key,value in system_json.items():
        if any (a in key for a in hardware_fields) and "accelerator" not in key:
            table += f"""<tr><td>{key}</td><td>{value}</td></tr>"""

    table += "</table>"
    return table
def get_hardware_details_table(system_json):
    table = '<h3>Other Hardware Details</h3><table>'
    hardware_fields = [ "hardware", "disk", "cooling",  "power", "hw_" ]
    for key,value in system_json.items():
        if any (a in key for a in hardware_fields) and "accelerator" not in key:
            table += f"""<tr><td>{key}</td><td>{value}</td></tr>"""

    table += "</table>"
    return table

def get_software_details_table(system_json):
    table = '<h3>Software Details</h3><table>'
    software_fields = [ "software", "framework", "firmware", "sw_", "operating_" ]
    for key,value in system_json.items():
        if any (a in key for a in software_fields):
            table += f"""<tr><td>{key}</td><td>{value}</td></tr>"""

    table += "</table>"
    return table

# Initialize a dictionary to organize the data by 'Details'
tables = {}

# Populate the dictionary with data
for entry in data:
    details = entry['Details']
    if details not in tables:
        tables[details] = {}
    categories = [ "edge", "datacenter" ]
    for category in categories:
        if category not in entry['Suite']:
            continue
        if category not in tables[details]:
            tables[details][category] = {}
        if entry['Category'] not in tables[details][category]:
            tables[details][category][entry['Category']] = {}

        if entry['Model'] not in tables[details][category][entry['Category']]:
            tables[details][category][entry['Category']] [entry['Model']] = {}
        if entry['Scenario'] not in tables[details][category][entry['Category']][entry['Model']]:
            tables[details][category][entry['Category']][entry['Model']][entry['Scenario']] = entry

# Now you can format each group in 'tables' as a markdown table
for details, entries in tables.items():
    out = f"## {details}"

    models_edge = [ "gptj-99", "gptj-99.9", "bert-99", "bert-99.9", "stable-diffusion-xl", "retinanet", "resnet", "3d-unet-99", "3d-unet-99.9"  ]
    if "datacenter" in entries:
        models = [ "llama2-70b-99", "llama2-70b-99.9", "gptj-99", "gptj-99.9", "bert-99", "bert-99.9", "stable-diffusion-xl",  "dlrm-v2-99", "dlrm-v2-99.9", "retinanet", "resnet", "3d-unet-99", "3d-unet-99.9"  ]

    html_table_head = f"""
<h3>Results Table</h3>
<table>
    <tr>
        <th rowspan="2">Model</th>
        <th rowspan="2">Accuracy Target</th>
        <th colspan="2">Server</th>
        <th colspan="2">Offline</th>
    </tr>
    <tr> 
    <td>Metric</td>
    <td>Performance</td>
    <td>Metric</td>
    <td>Performance</td>
    </tr>
    """
    for category in entries:
        for division, data in entries[category].items():
            html_table = html_table_head
            hardware_details = ''
            for model in models:
                if model in data:
                    html_table += f"""<tr><td>{model}</td>"""
                    if "closed" in division:
                        version = data[model]["Offline"]["version"]
                        acc_target = checker.MODEL_CONFIG[version]["accuracy-target"][model]
                        i = 0
                        acc_targets = []
                        key = None
                        for item in acc_target:
                            if i%2 == 0:
                                key = item
                            else:
                                acc_targets.append( (key, item))
                            i+=1
                    else:
                        acc_targets = []
                    acc_targets_list = []
                    for item in acc_targets:
                        acc_targets_list.append(f"""{item[0]}: {round(item[1], 4)}""")
                    acc_targets_string = ", ".join(acc_targets_list)
                    html_table += f"""<td>{acc_targets_string}</td>"""
                    if "Server" in data[model]:
                        html_table += f"""<td>{data[model]["Server"]["Performance_Units"]}</td> <td>{data[model]["Server"]["Performance_Result"]}</td>"""
                    else:
                        html_table += "<td></td><td></td>"
                    if "Offline" in data[model]:
                        details_split = details.split("/")
                        details_split[9] = "systems"
                        system = os.path.sep.join(details_split[7:11])
                        #details_split[0] = "https://raw.githubusercontent.com"
                        #system = details.replace("github.com", "raw.githubusercontent.com").replace("tree/", "refs/heads/").replace("results/", "systems/")
                        system_json_path = f"""{system}.json"""
                        system_json = get_system_json(system_json_path)
                        header_table = get_header_table(system_json)
                        accelerator_details = get_accelerator_details_table(system_json)
                        cpu_details = get_cpu_details_table(system_json)
                        hardware_details = get_hardware_details_table(system_json)
                        software_details = get_software_details_table(system_json)
                        network_details = get_network_details_table(system_json)
                        html_table += f"""<td>{data[model]["Offline"]['Performance_Units']}</td> <td>{data[model]["Offline"]["Performance_Result"]}</td>"""
                    else:
                        html_table += "<td></td><td></td>"
                else:
                    pass
                    #html_table += "<td></td> <td></td>"
                    #html_table += "<td></td> <td></td>"
                    #html_table += "</tr>"
            html_table += "</table>"
            sut_name = os.path.basename(details)
            tmp_path = os.path.dirname(details)
            tmp_path = os.path.dirname(tmp_path)
            submitter = os.path.basename(tmp_path)
            out_path = os.path.join(division, submitter, "results", sut_name, "summary", "README.md")
            os.makedirs(os.path.dirname(out_path), exist_ok=True)

            html_table = f"""
{header_table}
<table>
            <tr><td>{accelerator_details}</td> <td>{cpu_details}</td> </tr>
            <tr><td >{hardware_details}</td> <td>{network_details}</td> </tr>
            <tr><td colspan="2">{software_details}</td> </tr>
            </table>
{html_table}
"""
            with open(out_path, "w") as f:
                f.write(html_table)
            html_out_path = os.path.join(division, submitter, "results", sut_name, "summary", "summary.html")
            html_header = get_header()
            html = f"""
<html>
{html_header}
<body>
{html_table}
</body>
</html>
            """
            with open(html_out_path, "w") as f:
                f.write(html)
            print(html_table)
            #sys.exit()
    
    

