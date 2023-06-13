import yaml


def render_field(field, value):
    if field == "name":
        return f"[{value}]({data['data'][idx].get('github_link', '')})"
    if isinstance(value, list):
        return ", ".join(value)
    return str(value)


with open("data.yaml", "r") as file:
    data = yaml.safe_load(file)

header = data["header"]
table = "| " + " | ".join(header.values()) + " |\n"
table += "| " + "|".join(["---"] * len(header)) + " |\n"

for idx, entry in enumerate(data["data"]):
    row = (
        "| "
        + " | ".join(render_field(field, entry.get(field, "")) for field in header)
        + " |\n"
    )
    table += row

with open("table.md", "w") as file:
    file.write(table)
