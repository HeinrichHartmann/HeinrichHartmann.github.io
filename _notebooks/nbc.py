c = get_config()
# c.NbConvertApp.notebooks = ['*.ipynb']
c.NbConvertApp.export_format = 'markdown'
c.NbConvertApp.output_files_dir='../images'
c.Exporter.preprocessors = ['jekyll_preprocessor.JekyllPreprocessor']
c.Exporter.template_file = 'jekyll'
c.ExtractOutputPreprocessor.enabled = False
