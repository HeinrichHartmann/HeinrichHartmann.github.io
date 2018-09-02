{% extends 'markdown.tpl'%}

{%- block any_cell %}
{%- if 'HEAD' in cell['metadata'].get('tags', []) -%}
{{ cell.source }}
{%- elif 'SKIP' in cell['metadata'].get('tags', []) -%}
{%- else -%}
{{ super() }}
{%- endif -%}
{%- endblock any_cell -%}

{%- block input -%}
{%- if 'SKIP_IN' in cell['metadata'].get('tags', []) -%}
{%- else -%}
{{ super() }}
{%- endif -%}
{%- endblock input -%}
